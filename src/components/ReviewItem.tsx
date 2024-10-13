import type { ReviewData } from "@/types";
import React from "react";

export default function ReviewItem({ id, content, author, createdAt, bookId }: ReviewData) {
  return (
    <li>
      <div>{author}</div>
      <div>{content}</div>
      <div>
        <div>{new Date(createdAt).toLocaleDateString()}</div>
        <div>
          <button>삭제</button>
        </div>
      </div>
    </li>
  );
}
