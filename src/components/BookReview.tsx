import React from "react";

export default function BookReview() {
  const createReviewAction = async (formData: FormData) => {
    "use server";
    // 서버 액션으로 설정이 됨
    const content = formData.get("content")?.toString();
    const author = formData.get("author");

    console.log(content);
    console.log(author);
  };

  return (
    <section>
      <form action={createReviewAction}>
        <input type="text" name="content" placeholder="리뷰 내용" />
        <input type="text" name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
}
