import Image from "next/image";
import { Logo } from "../Logo";
import { arrowDown, menuRight, notification } from "@/assets";
import { Button } from "../Button";

interface IHeaderProps {
  username: string;
}

export const Header: React.FC<IHeaderProps> = ({ username }) => {
  return (
    <header className="flex items-center">
      <div className="px-8 py-6">
        <Logo />
      </div>
      <div className="flex w-full flex-row justify-between pr-10">
        <div className="flex items-center">
          <Image src={menuRight} alt="hotdog para abrir o menu" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="border-r border-input-border pr-4">
            <Image src={notification} alt="notificações" />
          </div>
          <div className="flex items-center gap-4">
            <Button id="user-btn" type="button" styles={"lg:h-[50px] lg:w-[50px] rounded-full"}>
              {username.slice(0, 2)}
            </Button>
            <span className="capitalize">{username}</span>
            <Image src={arrowDown} alt="informações do usuário" />
          </div>
        </div>
      </div>
    </header>
  );
};
