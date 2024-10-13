"use server";

import { revalidatePath } from "next/cache";

export const createReviewAction = async (formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  // 서버 액션으로 설정이 됨
  const content = formData.get("content")?.toString();
  const author = formData.get("author");

  console.log(bookId, content, author);
  if (!bookId || !content || !author) {
    return;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: "POST",
      body: JSON.stringify({ content, author, bookId }),
    });
    console.log(res.status);

    // 넥스트 서버가 인수로 전달한 경로를 다시 생성하게됨
    // 해당 경로의 모든 api를 재요청 하게됨
    revalidatePath(`/book/${bookId}`);
  } catch (error) {
    console.error(error);
    return;
  }
};
