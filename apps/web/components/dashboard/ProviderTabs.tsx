const providers = [
  "ALL GAMES",
  "JILI",
  "PG SOFT",
  "PRAGMATIC",
  "FA CHAI",
];

export default function ProviderTabs() {
  return (
    <div className="flex gap-3 overflow-x-auto px-6 py-5">
      {providers.map((provider, index) => (
        <button
          key={provider}
          className={`rounded-2xl border px-6 py-3 whitespace-nowrap font-semibold transition ${
            index === 0
              ? "bg-yellow-400 text-black border-yellow-400"
              : "border-[#24332D] bg-[#111B18] text-white hover:border-yellow-400"
          }`}
        >
          {provider}
        </button>
      ))}
    </div>
  );
}