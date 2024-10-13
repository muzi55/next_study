"use client";

import { createReviewAction } from "@/actions/createReview";
import React, { useActionState, useEffect } from "react";

export default function BookReview({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(createReviewAction, null);

  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, [state]);
  return (
    <section>
      <form action={formAction}>
        <input type="text" name="bookId" readOnly value={bookId} hidden />
        <input type="text" name="content" placeholder="리뷰 내용" required />
        <input type="text" name="author" placeholder="작성자" required />
        <button disabled={isPending} type="submit">
          작성하기
        </button>
      </form>
      {isPending && <p>리뷰 작성 중...</p>}
    </section>
  );
}
