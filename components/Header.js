import Link from "next/link";
import ThemeSwitch from "./DarkModeToggle";
import { BiSolidBasketball } from "react-icons/bi";

export default function Header() {
  return (
    <header className="fixed top-0 h-20 w-screen flex flex-row items-center justify-between px-5 bg-slate-100 text-neutral-800 dark:bg-neutral-800 dark:text-orange-500 shadow-md shadow-neutral-200 dark:shadow-slate-500/20">
      <Link href="/" className="flex flex-row items-center">
        <BiSolidBasketball size={40} className=" text-orange-500" />
        <span className="ml-3 font-semibold text-3xl">Only stats</span>
      </Link>
      <div className="flex flex-row items-center">
        <Link href="/dashboard" className="mr-3 hover:opacity-55">
          Dashboard
        </Link>
        <Link href="/about" className="mr-6 hover:opacity-55">
          About
        </Link>

        <ThemeSwitch />
      </div>
    </header>
  );
}
