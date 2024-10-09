import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import AllBooks from "@/components/AllBooks";
import RecoBooks from "@/components/RecoBooks";

export default async function Home() {
  return (
    <div className={style.container}>
      <RecoBooks />

      <AllBooks />
    </div>
  );
}
