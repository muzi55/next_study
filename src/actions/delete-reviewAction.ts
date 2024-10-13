"use server";

import { revalidateTag } from "next/cache";

const a = `
export interface ActionFormData {
  formData: FormData;
  _: any;
}
이런식의 타입을 쓸려고 했지만 타입 에러로 사용이 불가했다.
`;

export const deleteReviewAction = async (_: any, formData: FormData) => {
  const reviewId = formData.get("reviewId")?.toString();
  const bookId = formData.get("bookId")?.toString();

  if (!reviewId)
    return {
      status: false,
      error: "삭제할 리뷰가 없습니다.",
    };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    revalidateTag(`review-${reviewId}`);

    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: "리뷰 삭제에 실패했습니다.",
    };
  }
};
