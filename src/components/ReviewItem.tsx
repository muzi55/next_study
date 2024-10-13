import type { ReviewData } from "@/types";
import React from "react";
import ReviewDelButton from "./ReviewDelButton";

export default function ReviewItem({ id, content, author, createdAt, bookId }: ReviewData) {
  return (
    <li>
      <div>{author}</div>
      <div>{content}</div>
      <div>
        <div>{new Date(createdAt).toLocaleDateString()}</div>
        <div>
          <ReviewDelButton reviewId={id} bookId={bookId}>
            삭제
          </ReviewDelButton>
        </div>
      </div>
    </li>
  );
}
