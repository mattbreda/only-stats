import PlayerCardsGrid from "@/components/PlayerCardsGrid";
import SearchInput from "@/components/SearchInput";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <section className=" w-screen flex items-center justify-center min-h-[70vh] bg-slate-100 dark:bg-neutral-800">
        <div className="w-1/2 ">
          <div>Compare up to 5 players</div>
          <SearchInput />
        </div>
      </section>
      <PlayerCardsGrid />
    </main>
  );
}
