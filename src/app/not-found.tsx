"use client";

import Image from "next/image";
import { errorPageIcon } from "@/assets";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex h-full items-center justify-center gap-8 pb-8">
      <Image src={errorPageIcon} alt="página de erro" className="hidden h-56 w-56 sm:block" />
      <div className="flex w-[20rem] flex-col items-center sm:items-start">
        <div className="mb-4">
          <div className="mb-4 flex items-center justify-center gap-4 sm:justify-start">
            <h1 className="text-[5rem] font-bold leading-[5rem] text-error">404</h1>
            <Image src={errorPageIcon} alt="página de erro" className="h-16 w-16 sm:hidden" />
          </div>
          <h2 className="text-center text-2xl text-error sm:text-left">Página não encontrada</h2>
          <p className="text-center text-error sm:text-left">A página que você está tentando acessar não existe.</p>
        </div>
        <a href="/">
          <Button id="home">Voltar ao início</Button>
        </a>
      </div>
    </div>
  );
}
