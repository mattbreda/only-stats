"use client";
import useSelectedPlayers from "@/hooks/useSelectedPlayers";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const dataMapping = [
  {
    key: "min",
    label: "Mins",
    expl: "Minutes per game (average)",
  },
  {
    key: "pts",
    label: "Pts",
    expl: "Points per game (average)",
  },
  {
    key: "ast",
    label: "Ast",
    expl: "Assists per game (average)",
  },
  {
    key: "reb",
    label: "Reb",
    expl: "Rebounds per game (average)",
  },
  {
    key: "stl",
    label: "Stl",
    expl: "Steals per game (average)",
  },
  {
    key: "blk",
    label: "Blk",
    expl: "Blocks per game (average)",
  },
  {
    key: "fg_pct",
    label: "FG%",
    expl: "Field Goal Percentage",
  },
  {
    key: "fg3_pct",
    label: "FG3%",
    expl: "3-Points Field Goal Percentage",
  },
];

const PlayerCard = ({ playerData }) => {
  const [info, setInfo] = useState(null);
  const { togglePlayer } = useSelectedPlayers();

  const handleHover = (expl) => {
    setInfo(expl);
  };
  const handleDelete = () => {
    togglePlayer(playerData);
  }
  return (
    <div className="w-full bg-white dark:bg-neutral-800 dark:text-orange-500 rounded-xl border border-orange-500/50 shadow-md flex flex-col p-5 relative min-h-[315px]">
      <button className="absolute top-2.5 right-2.5" onClick={()=>handleDelete()}>
        <IoIosCloseCircle />
      </button>
      <div>
        {playerData.first_name} {playerData.last_name}
      </div>
      <div>
        {playerData.team.abbreviation} |{" "}
        <span className="text-xs">Position:</span> {playerData.position}
      </div>
      <div>
        {playerData.height} | {playerData.weight}lb
      </div>
      <div className="w-full border-t-orange-500 border-t my-2 text-sm pt-1">
        Averages
      </div>
      <div className="flex flex-col text-sm">
        {dataMapping.map((d) => (
          <div
            key={d.key}
            className="relative"
            onMouseEnter={() => handleHover(d)}
            onMouseLeave={() => handleHover(null)}
          >
            <span className="relative">
              {d.label}{" "}
              {info && info.key === d.key ? (
                <div className="absolute left-10 -top-7 whitespace-nowrap bg-orange-500 rounded-xl shadow-md px-3 py-1.5 text-xs">
                  {info.expl}
                </div>
              ) : null}
            </span>
            : <span className="font-semibold">{playerData.stats[d.key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PlayerCard;
