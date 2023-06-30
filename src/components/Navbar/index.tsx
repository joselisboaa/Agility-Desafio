"use client";
import { blueHomeIcon, blueMapIcon, menuRight } from "@/assets";
import classNames from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(true);
  const toggleNavbar = useCallback(() => {
    setIsNavbarOpen((prevNavbarState) => !prevNavbarState);
  }, []);

  const isNavbarClosed = !isNavbarOpen;

  return (
    <div>
      {isNavbarClosed ? <Image src={menuRight} className="cursor-pointer absolute left-1" alt="expandir/retrair a barra de menu" onClick={toggleNavbar} /> : null}
      <nav className={twMerge(classNames("h-screen hidden max-h-[700px] w-[17.5rem] flex-col pl-4", {
        flex: isNavbarOpen,
      }))}>
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="text-xs uppercase text-secondary-dark">Principal</h3>
          <Image src={menuRight} className="cursor-pointer" alt="hotdog para abrir o menu" onClick={toggleNavbar} />
        </div>
        <div
          className="overflow-y-auto scrollbar scrollbar-track-slate-300 scrollbar-thumb-primary
        scrollbar-thumb-rounded"
        >
          <div className="flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
            <Image src={blueHomeIcon} alt="ir para a página inicial" className="fill-primary" />
            <span className="text-sm capitalize">página inicial</span>
          </div>
          <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
            <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
            <span className="text-sm">Lojas parceiras</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
