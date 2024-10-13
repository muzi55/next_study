import Link from "next/link";

export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  feed: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href="/parallel"> parallel</Link>
        <Link href="/parallel/setting"> parallel</Link>
      </div>
      {children}
      {sidebar}
      {feed}
    </div>
  );
}
