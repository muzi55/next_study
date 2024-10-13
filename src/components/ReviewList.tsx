import type { ReviewData } from "@/types";
import React from "react";
import ReviewItem from "./ReviewItem";

async function ReviewList({ bookId }: { bookId: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`);

  if (!res.ok) {
    throw new Error(`Review Fetch failed: ${res.statusText}`);
  }

  const reviews: ReviewData[] = await res.json();

  return (
    <section>
      <ul>
        {reviews.map((el) => (
          <ReviewItem key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
}

export default ReviewList;
