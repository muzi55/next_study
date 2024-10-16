import { BookData } from "@/types";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import BookDetail from "@/components/BookDetail";
import BookReview from "@/components/BookReview";
import ReviewList from "@/components/ReviewList";

interface IBookParams {
  params: {
    id: string;
  };
}

export default function Page({ params }: IBookParams) {
  return (
    <div>
      <BookDetail bookId={params.id} />
      <ReviewList bookId={params.id} />
      <BookReview bookId={params.id} />
    </div>
  );
}
