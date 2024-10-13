import { createReviewAction } from "@/actions/createReview";
import React from "react";

export default function BookReview({ bookId }: { bookId: string }) {
  return (
    <section>
      <form action={createReviewAction}>
        <input type="text" name="bookId" value={bookId} hidden />
        <input type="text" name="content" placeholder="리뷰 내용" required />
        <input type="text" name="author" placeholder="작성자" required />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
}
