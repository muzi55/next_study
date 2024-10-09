import ClientComponent from "@/app/components/ClientComponent";

export default function Search({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  console.log("searchParams", searchParams);
  return <div>search 페이지 [{searchParams.q}]</div>;
}
