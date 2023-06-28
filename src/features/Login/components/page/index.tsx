import { Logo } from "@/components/Logo";
import Image from "next/image";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { eyeShow, manWalkingByTrucks } from "@/assets";

export const LoginPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col items-center h-full justify-around sm:px-[5.5rem] w-full">
        <div className="w-full px-[2rem] sm:px-0">
          <Logo />
        </div>
        <div className="flex flex-col items-center w-full px-[2rem] sm:px-0">
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <h2 className="text-[2rem]">Login</h2>
              <p className="text-tertiary-dark">Informe os dados abaixo para acessar a nossa plataforma.</p>
            </div>
            <form className="w-full">
              <fieldset className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <TextField id="login-input" labelText="Login" type="text" styles={"w-full"}/>
                  <TextField id="password-input" labelText="Senha" type="password" icon={eyeShow}/>
                </div>
                <Button id="login-btn" type="submit">Acessar</Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="w-fit h-fit hidden sm:block">
        <Image className="object-cover h-screen" src={manWalkingByTrucks} alt="Homem andando ao lado de caminhões"/>
      </div>
    </div>
  );
};
