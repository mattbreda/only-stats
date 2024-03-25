"use client";
import { searchPlayerByID, searchPlayerByString } from "@/lib/getData";
import React, { useEffect, useRef, useState } from "react";
import useSelectedPlayers from "@/hooks/useSelectedPlayers";
import Loader from "./Loader";
/* const fakeApi = () => console.log('Api is called') */

export default function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [loadingPlayers, setIsLoadingPlayers] = useState(false);
  const [timer, setTimer] = useState(null);
  const [playersResult, setPlayerResult] = useState([]);
  const inputArea = useRef(null);

  const {
    selectedPlayers,
    togglePlayer,
    loadingPlayerData,
    toggleIsLoadingPlayerData,
  } = useSelectedPlayers();
  const inputChanged = (e) => {
    setInputValue(e.target.value);

    clearTimeout(timer);
    if (inputValue.length > 1) {
      console.log("start fetch");
      const newTimer = setTimeout(async () => {
        setIsLoadingPlayers(true);
        const players = await searchPlayerByString(inputValue);
        setIsLoadingPlayers(false);

        if (players?.length) {
          setPlayerResult(players);
        }
      }, 500);
      setTimer(newTimer);
    } else {
      setPlayerResult([]);
    }
  };

  const handlePlayerClick = async (p) => {
    setInputValue("");
    setPlayerResult([]);
    toggleIsLoadingPlayerData();
    const exdendedData = await searchPlayerByID(p.id);
    toggleIsLoadingPlayerData();
    togglePlayer({ ...p, stats: { ...exdendedData[0] } });
  };
  const handleOutsideClick = (e) => {
    if (inputArea.current && !inputArea.current.contains(e.target)) {
      setPlayerResult([]);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return (
    <div className="relative w-full " id="player-input">
      <input
        value={inputValue}
        type="text"
        onChange={inputChanged}
        className={`${
          selectedPlayers.length >= 6 ? "pointer-events-none opacity-50" : ""
        } relative w-full p-4 border border-slate-400 rounded-3xl z-20 h-16 focus:outline-orange-500`}
        placeholder="Star typing a player's name or surname"
      />
      {loadingPlayers || loadingPlayerData ? (
        <div className=" absolute w-full flex items-center justify-center pt-10 z-40">
          <Loader />
        </div>
      ) : null}
      {playersResult && playersResult.length ? (
        <div
          ref={inputArea}
          className="absolute top-0 w-full max-h-56 overflow-y-auto bg-neutral-800 dark:bg-slate-100 text-slate-100 dark:text-neutral-900 rounded-3xl pt-16 z-10"
        >
          {playersResult.map((p) => (
            <div
              key={p.id}
              className={`h-10 border-b border-b-neutral-200 flex flex-row items-center justify-between w-full hover:bg-neutral-700 hover:text-orange-500 px-5 ${
                selectedPlayers.some((e) => e.id === p.id)
                  ? "bg-orange-500 text-slate-100"
                  : ""
              } ${loadingPlayerData ? "pointer-events-none" : null}`}
              onClick={() => handlePlayerClick(p)}
            >
              <div className="flex flex-row items-center">
                {p.first_name}
                <div
                  className={`${
                    selectedPlayers.some((e) => e.id === p.id)
                      ? " text-slate-100"
                      : " text-orange-500"
                  } pl-1.5 font-semibold`}
                >
                  {p.last_name}
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="pl-1.5  text-xs">
                  Position:
                  <span className="font-semibold pl-1">{p.position}</span>
                </div>
                <div className="pl-1.5  text-xs">
                  Team:
                  <span className="font-semibold pl-1">
                    {p.team.abbreviation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
