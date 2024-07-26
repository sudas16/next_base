import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row bg-lime-400 gap-x-3 p-4 items-center">
      <h1 className="text-xl font-bold">Navbar</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
