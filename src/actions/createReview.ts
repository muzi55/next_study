"use server";

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
  } catch (error) {
    console.error(error);
    return;
  }
};
