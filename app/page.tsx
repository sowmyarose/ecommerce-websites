import Link from "next/link";

const pages = [
  { name: "Bakery", path: "/bakery" },
  { name: "Clothing", path: "/clothing" },
];

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center gap-2">
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
