import style from "./page.module.css";
import AllBooks from "@/components/AllBooks";
import RecoBooks from "@/components/RecoBooks";
import BookSkeleton from "@/components/skeleton/BookSkeleton";
import BookSkeletonList from "@/components/skeleton/BookSkeletonList";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

// export const dynamic = "auto";
// 특정 페이지의 유형을 "강제"로 Static, Dynamic 페이지로 설정
// auto = 기본 값, 아무것도 강제하지 않음
// force-dynamic = 페이지를 강제로 동적으로 렌더링
// force-static = 페이지를 강제로 정적으로 렌더링
// error = 페이지를 강제로 정적으로 렌더링 ( 설정하면 안되는 이유 => 빌드 에러)

export default async function Home() {
  const 로딩 = <p>로딩 중...</p>;

  return (
    <div className={style.container}>
      <Suspense fallback={<BookSkeletonList length={3} />}>
        <RecoBooks />
      </Suspense>
      <Suspense fallback={<BookSkeleton />}>
        <AllBooks />
      </Suspense>
    </div>
  );
}
