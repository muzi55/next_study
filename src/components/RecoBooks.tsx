import React from "react";
import BookItem from "./book-item";
import type { BookData } from "@/types";
import { delay } from "@/util/delay";

export default async function RecoBooks() {
  await delay(3000);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {
    next: {
      revalidate: 3,
    },
  });

  if (!response.ok) {
    return <div>해당 요청에 오류가 발생했습니다.</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <section>
      <h3>지금 추천하는 도서</h3>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </section>
  );
}
