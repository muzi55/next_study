export default function Search({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  console.log("props", searchParams);
  return <div>search</div>;
}
