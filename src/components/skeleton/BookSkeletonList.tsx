import React from "react";
import BookSkeleton from "./BookSkeleton";

export default function BookSkeletonList({ length }: { length: number }) {
  const createArr = (length: number) => Array.from({ length }, (_, i) => i);
  return (
    <ul>
      {createArr(length).map((el) => (
        <li key={el}>
          <BookSkeleton />
        </li>
      ))}
    </ul>
  );
}
