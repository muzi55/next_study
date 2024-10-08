export default function Book({
  params,
}: {
  params: {
    id?: string | string[];
  };
}) {
  return <div>book/ [{params.id}]</div>;
}
