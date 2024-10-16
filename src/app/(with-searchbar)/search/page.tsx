import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import type { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookSkeleton from "@/components/skeleton/BookSkeleton";
import BookSkeletonList from "@/components/skeleton/BookSkeletonList";

async function SearchResult({ q }: { q: string }) {
  await delay(1500);
  // 해당 props를 받아서 동적으로 항상 값을 보여줘야하는 이 컴포넌트는
  // 데이터 캐시 최적화를 통해 성능을 향상 시킬 수 있다.
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`, {
    cache: "force-cache",
  });
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

// export const dynamic = "error";
interface ISearchParams {
  searchParams: {
    q?: string;
  };
}

export default function Page({ searchParams }: ISearchParams) {
  return (
    <Suspense
      key={searchParams.q || ""}
      fallback={
        <>
          <BookSkeletonList length={3} />
        </>
      }>
      <SearchResult q={searchParams.q || ""} />
    </Suspense>
  );
}
