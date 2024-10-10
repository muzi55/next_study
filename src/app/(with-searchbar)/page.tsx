import style from "./page.module.css";
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
