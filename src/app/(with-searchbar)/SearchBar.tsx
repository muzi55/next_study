"use client";
import React, { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input onChange={onChange} value={search} type="text" />
      <button>검색</button>
    </div>
  );
}
