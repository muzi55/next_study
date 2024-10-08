// Generating Static Params
// book/55
// [id] => '55'

// Catch-all Segments
// book/55/66/77
// [...id] => ['55', '66', '77']

// Optional Catch-all Segments
// book
// [[...id]] => 에러를 뱉지 않음
// book/55/66/77
// [[...id]] => ['55', '66', '77']
export default function Book({
  params,
}: {
  params: {
    id?: string | string[];
  };
}) {
  return <div>book/ [{params.id}]</div>;
}
