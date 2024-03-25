export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <section className="h-screen w-screen flex flex-col items-center justify-center">
        <h1 className=" text-7xl text-orange-500 font-semibold">Only stats</h1>
        <h2 className=" text-2xl text-neutral-700 dark:text-slate-100 font-semibold mt-5">
          A data visualization tool for current season{" "}
          <span className="text-orange-500">NBA</span> players&apos; stats
        </h2>
        <p className="mt-2.5 ">
          Powered by{" "}
          <a href="https://balldontlie.io/" className="underline">
            balldontlie&apos;s API
          </a>
        </p>
      </section>
    </main>
  );
}
