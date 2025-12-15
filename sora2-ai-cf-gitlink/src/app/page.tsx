import Link from 'next/link'

export default function PlaceholderPage() {
  return (
    <main className="min-h-screen gradient-bg text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl text-center space-y-6 glass-effect p-8 rounded-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">Sora 2 AI</p>
        <h1 className="text-4xl font-semibold">Public GitHub Mirror</h1>
        <p className="text-lg text-white/80">
          This repository intentionally exposes only a lightweight placeholder. The full product experience
          lives at <Link className="underline" href="https://sora-2-ai.com/">sora-2-ai.com</Link>.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="https://sora-2-ai.com/"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/80 transition"
          >
            Visit Official Site
          </Link>
          <Link
            href="https://github.com/JordiLee123"
            className="px-6 py-3 rounded-full border border-white/40 font-medium hover:bg-white/10 transition"
          >
            GitHub Profile
          </Link>
        </div>
      </div>
    </main>
  )
}
