"use server";

import { delay } from "@/util/delay";
import { revalidatePath, revalidateTag } from "next/cache";

export const createReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  // 서버 액션으로 설정이 됨
  const content = formData.get("content")?.toString();
  const author = formData.get("author");

  console.log(bookId, content, author);
  if (!bookId || !content || !author) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해 주세요",
    };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: "POST",
      body: JSON.stringify({ content, author, bookId }),
    });

    if (!res.ok) {
      throw new Error(`Review Fetch failed: ${res.statusText}`);
    }

    // 넥스트 서버가 인수로 전달한 경로를 다시 생성하게됨
    // 해당 경로의 모든 api를 재요청 하게됨

    // 1. 특정 주소의 해당하는 페이지만 재검증
    // revalidatePath(`/book/${bookId}`);

    // 2. 특정 경로의 모든 동적 페이지를 재검증
    // 모든 동적 경로를 모두 한번에 재검증 가능해짐
    // revalidatePath(`/book/[id]`, "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지를 재검증
    // revalidatePath(`/(width-searchbar)`, "layout");

    // 4. 모든 데이터를 재검증
    // revalidatePath(`/`, "layout");

    // 5. 태그 기준, 데이터 캐시 재검증
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      error: "리뷰 작성에 실패했습니다",
    };
  }
};
