import SearchInput from "@/components/SearchInput";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-between px-24">
      <section className=" w-screen flex items-center justify-center h-full">
        <div className="w-1/2 ">
          <div>Compare up to 5 players</div>
          <SearchInput />
        </div>
      </section>
    </main>
  );
}
