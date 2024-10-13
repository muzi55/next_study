import { BookData } from "@/types";
import React from "react";

export default async function Footer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: "force-cache" });
  if (!res.ok) return <footer>제작 @winterlood</footer>;
  const books: BookData[] = await res.json();

  return (
    <footer>
      제작 @winterlood
      <p>{books.length}</p>
    </footer>
  );
}
