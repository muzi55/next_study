"use client";
import { deleteReviewAction } from "@/actions/delete-reviewAction";
import React, { useActionState, useEffect, useRef } from "react";

interface IReviewDelButtonProps {
  children: React.ReactNode;
  reviewId: number;
  bookId: number;
}
export default function ReviewDelButton({ children, reviewId, bookId }: IReviewDelButtonProps) {
  // 프로그래머틱
  // submit 보다는 requestSubmit !! 을 더욱 권장한다.
  // button 말고 다른 태그를 클릭했을때 이벤트가 발생해야할 경우 해당 처럼 ref를 사용하여 작업한다.
  const formRef = useRef<HTMLFormElement>(null);

  const [state, action, isPending] = useActionState(deleteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, []);

  return (
    <form ref={formRef} action={action}>
      <input type="text" name="reviewId" value={reviewId} readOnly hidden />
      <input type="text" name="bookId" value={bookId} readOnly hidden />

      {isPending ? <p>리뷰 삭제 중...</p> : <div onClick={() => formRef.current?.requestSubmit()}>{children}</div>}
    </form>
  );
}
