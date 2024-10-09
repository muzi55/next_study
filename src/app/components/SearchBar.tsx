"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input onChange={onChange} value={search} type="text" />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
