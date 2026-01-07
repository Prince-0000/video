import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <Link
        href="/books"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 transition"
      >
        Go to Books Blog 📚
      </Link>
      <Link
        href="/camera"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 transition"
      >
        Go to Camera Blog 📚
      </Link>
      <Link
        href="/gadget"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 transition"
      >
        Go to Gadget Blog 📚
      </Link>
      <Link
        href="/gift"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 transition"
      >
        Go to Gift Blog 📚
      </Link>
      <Link
        href="/sport"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 transition"
      >
        Go to Sport Blog 📚
      </Link>
    </div>
  );
}
