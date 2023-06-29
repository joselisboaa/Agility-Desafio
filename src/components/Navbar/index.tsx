import { blueHomeIcon, blueMapIcon } from "@/assets";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex h-full max-h-[700px] w-[17.5rem] flex-col pl-4 pr-8">
      <h3 className="mb-4 pl-4 text-xs uppercase text-secondary-dark">Principal</h3>
      <div className="overflow-y-auto">
        <div className="flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueHomeIcon} alt="ir para a página inicial" className="fill-primary" />
          <span className="text-sm capitalize">página inicial</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
        <div className=" flex min-h-[3.75rem] cursor-pointer items-center gap-4 pl-4 hover:bg-gray-color-40">
          <Image src={blueMapIcon} alt="ir para Lojas parceiras" className="fill-primary" />
          <span className="text-sm">Lojas parceiras</span>
        </div>
      </div>
    </nav>
  );
};
