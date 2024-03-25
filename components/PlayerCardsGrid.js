"use client";
import { useEffect, useState } from "react";
import useSelectedPlayers from "@/hooks/useSelectedPlayers";
import PlayerCard from "./PlayerCard";
import Image from "next/image";
import PlayerCardPlaceholder from "./PlayerCardPlaceholder";
import { scrollToTop } from "@/lib/utils";

const PlayerCardsGrid = () => {
  const { selectedPlayers } = useSelectedPlayers();
  const [missingPlayer, setMissingPlayer] = useState([]);
  useEffect(() => {
    const arrayToFill = []
    for(let i = 0; i < (6-selectedPlayers.length); i++) {
      arrayToFill.push(i)
    }
    setMissingPlayer(arrayToFill);
  }, [selectedPlayers]);
  return (
    <div className="w-full bg-slate-200 dark:bg-neutral-900 px-24 py-12">
      {selectedPlayers?.length ? (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {selectedPlayers.map((p) => {
            return <PlayerCard key={p.id} playerData={p} />;
          })}
          {
            missingPlayer.map(m=><PlayerCardPlaceholder key={'missing-'+m} />)
          }
        </div>
      ) : (
        <div className="w-full flex flex-row items-center py-12">
          <Image
            src="/mj-cry.png"
            alt="His highness, not happy about your missing selections"
            width={192}
            height={256}
            className=" w-48 object-contain relative drop"
          />
          <h2 className=" text-4xl" onClick={() => scrollToTop()}>
            There&apos;s no data, <span className="text-orange-500 cursor-pointer">start selecting some players</span> to see some
            magic.
          </h2>
        </div>
      )}
    </div>
  );
};
export default PlayerCardsGrid;
