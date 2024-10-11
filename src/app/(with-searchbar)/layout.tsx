import SearchBar from "@/components/searchbar";
import { ReactNode, Suspense } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {new Date().toLocaleString()}
      <Suspense fallback={<div>Loading ...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
