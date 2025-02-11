import Link from "next/link";

const pages = [{ name: "Bakery", path: "/bakery" }];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {pages.map((page) => (
        <Link
          key={page.name}
          href={page.path}
          className="bg-blue-200 p-4 rounded-md"
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
}
