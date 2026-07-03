export default function FilterTabs() {
  const tabs = ["All", "Hot", "Cold"];

  return (
    <div className="flex gap-3 px-6 pb-6">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            index === 0
              ? "bg-yellow-400 text-black"
              : "bg-[#111B18] text-white border border-[#24332D]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}