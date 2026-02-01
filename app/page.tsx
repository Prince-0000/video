import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <Link
        href="/nutrition"
        className="rounded-lg bg-yellow-400 text-black px-6 py-3 hover:bg-zinc-800 transition"
      >
        Nutrition for Dummies
      </Link>
    </div>
  );
}
