import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import type { BookData } from "@/types";

interface ISearchParams {
  searchParams: {
    q?: string;
  };
}

export default async function Page({ searchParams }: ISearchParams) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`);
  if (!response.ok) {
    return <div>해당 요청에 오류가 발생했습니다.</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
