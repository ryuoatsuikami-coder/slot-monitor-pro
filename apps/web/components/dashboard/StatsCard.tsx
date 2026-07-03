type StatsCardProps = {
  title: string;
  value: string;
  color?: string;
};

export default function StatsCard({
  title,
  value,
  color = "#FFC928",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-[#24332D] bg-[#111B18] p-5 transition hover:border-yellow-400">
      <h3 className="text-sm text-gray-400">{title}</h3>

      <p
        className="mt-3 text-4xl font-bold"
        style={{ color }}
      >
        {value}
      </p>
    </div>
  );
}