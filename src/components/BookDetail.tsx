import { BookData } from "@/types";
import { notFound } from "next/navigation";
import React from "react";
import style from "./page.module.css";
import Image from "next/image";

interface IBookParams {
  params: {
    id: string | string[];
  };
}

// 아래 값 이외의 파라미터가 들어오면 404 페이지로 이동함
// export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`);
  if (!response.ok) {
    if (response.status === 404) {
      return notFound();
    }
    return <div>해당 요청에 오류가 발생했습니다.</div>;
  }

  const book: BookData = await response.json();
  const { coverImgUrl, title, subTitle, author, publisher, description } = book;

  return (
    <section>
      <div className={style.container}>
        <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
          <Image src={coverImgUrl} width={240} height={300} alt={`${title} 의 표지 이미지`} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </section>
  );
}
