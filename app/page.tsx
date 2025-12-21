export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <video
        className="w-full max-w-2xl rounded-xl shadow-lg"
        src="/video.mp4"
        controls
        autoPlay
        muted
        loop
      />
    </div>
  );
}
