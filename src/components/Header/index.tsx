import Image from "next/image";
import { Logo } from "../Logo";
import { arrowDown, notification } from "@/assets";
import { Button } from "../Button";

interface IHeaderProps {
  username: string;
  children?: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ username, children }) => {
  return (
    <header className="flex items-center">
      <div className="px-8 py-6">
        <Logo />
      </div>
      <div className="flex w-full flex-row justify-end pr-10">
        <div className="flex items-center justify-center gap-4">
          <div className="border-r border-input-border pr-4">
            <Image src={notification} alt="notificações" className="cursor-pointer hover:fill-gray-color-40" />
          </div>
          <div className="flex cursor-pointer items-center gap-4 p-2 hover:bg-gray-color-40">
            {children}
            <Button id="user-btn" type="button" styles={"h-[3.125rem] w-[3.125rem] lg:h-[3.125rem] lg:w-[3.125rem] rounded-full capitalize"}>
              {"AD"}
            </Button>
            <span className="capitalize">{username}</span>
            <Image src={arrowDown} alt="informações do usuário" />
          </div>
        </div>
      </div>
    </header>
  );
};
