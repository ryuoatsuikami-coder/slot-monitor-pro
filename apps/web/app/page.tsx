import Header from "../components/layout/Header";
import ProviderTabs from "../components/dashboard/ProviderTabs";
import FilterTabs from "../components/dashboard/FilterTabs";
import StatsGrid from "../components/dashboard/StatsGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09110F] text-white">
      <Header />

      <ProviderTabs />

      <FilterTabs />

      <StatsGrid />

      <div className="h-20"></div>
    </main>
  );
}