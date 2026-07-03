export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#24332D] px-6 py-5">
      <div>
        <h1 className="text-3xl font-extrabold tracking-wide text-yellow-400">
          SLOT MONITOR
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Live winning slot tracker
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-400">08:58:43 AM</span>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1A2521] hover:bg-[#24332D] transition">
          🔄
        </button>

        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
    </header>
  );
}