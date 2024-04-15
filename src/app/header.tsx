import Link from "next/link";

export default function Header() {
  return (
    <div
      className="h-10 flex gap-4 items-center px-4 bg-black text-white
        border-b border-orange-400 shadow shadow-purple-200"
    >
      <span>NextJS</span>
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/todos" className="hover:underline">
        To do list
      </Link>
    </div>
  );
}
