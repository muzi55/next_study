import React from "react";
import BookItem from "./book-item";
import type { BookData } from "@/types";

export default async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: "no-store" });
  if (!response.ok) {
    return <div>해당 요청에 오류가 발생했습니다.</div>;
  }

  const allBooks: BookData[] = await response.json();
  return (
    <section>
      <h3>등록된 모든 도서</h3>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </section>
  );
}
