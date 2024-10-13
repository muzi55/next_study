"use client";
import { useRouter } from "next/navigation";
import React, { startTransition, useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  router;
  useEffect(() => {
    console.error(error.message);
  }, []);

  const handleReload = () => window.location.reload();
  const handleRouterRefresh = () => {
    // 하나의 콜백 함수를 인자로 받으며,
    // ui를 변경시키는 작업을 일괄적으로 실행 하게 됨
    // router.refresh 와 reset이 한몸처럼 작동 하는 것처럼 됨
    startTransition(() => {
      router.refresh(); // 현재 페이지의 필요한 서버 컴포넌트를 다시 불러옴 (비동기 실행)
      reset(); // 에러 상태를 초기화 하고, 컴포넌트를 다시 렌더링함
    });
  };
  return (
    <div>
      <h3>검색 과정의 오류가 발생했다.</h3>
      <button onClick={() => reset()}>리셋</button>
      <button onClick={handleReload}>페이지 리셋</button>
      <button onClick={handleRouterRefresh}>라우터 리셋</button>
    </div>
  );
}
