"use client"
import { scrollToTop } from "@/lib/utils";
import { GoPlus } from "react-icons/go";

const PlayerCardPlaceholder = () => {
  const hanldeClick = () => {
    scrollToTop()
  }
  return (
    <div className="w-full rounded-xl border border-dashed border-orange-500 flex items-center justify-center group cursor-pointer min-h-[315px]" onClick={() => hanldeClick()}>
      <div className="flex flex-col items-center group-hover:opacity-70">
        <div className=" w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
          <GoPlus size={30} className="text-orange-500" />
        </div>
        <div className="text-sm font-semibold mt-2 text-orange-500">Add a player</div>
      </div>
    </div>
  );
};
export default PlayerCardPlaceholder;
