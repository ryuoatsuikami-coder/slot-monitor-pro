import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-2 gap-4 px-6">
      <StatsCard title="TOTAL GAMES" value="71" />
      <StatsCard title="HOT SLOTS" value="12" color="#3AE374" />
      <StatsCard title="COLD SLOTS" value="35" color="#FF5E57" />
      <StatsCard title="AVG RTP" value="96.4%" />
    </section>
  );
}