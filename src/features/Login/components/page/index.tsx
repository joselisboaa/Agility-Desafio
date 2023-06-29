"use client";
import { Logo } from "@/components/Logo";
import Image from "next/image";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { eyeShow, manWalkingByTrucks } from "@/assets";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";

export interface ILoginProps {
  login: string;
  password: string;
}

export const LoginPage = () => {
  const router = useRouter();

  const sendHttpRequest = useFetch<ILoginProps[]>({
    endpoint: "accounts",
    method: "GET",
    errorMessage: "Erro ao tentar logar"
  });

  const {
    register,
    handleSubmit,
  } = useForm<ILoginProps>();

  const handleLoginAttempt = async (data: ILoginProps) => {
    try {
      const users = await sendHttpRequest();
      const { login } = data;
      const { password } = data;
      
      if (login === users[0].login && password === users[0].password) {
        localStorage.setItem("logged_user_name", users[0].login);
        router.push("home");
        return alert("logado com sucesso!");
      }     
      alert("Suas credenciais estão incorretas");
    } catch (error) {
      alert("Erro de conexão");
    }
  } 

  const onSubmit: SubmitHandler<ILoginProps> = (data) => {
    handleLoginAttempt(data);
  }

  return (
    <div className="flex h-screen w-fit">
      <div className="flex flex-col items-center h-full justify-around sm:px-[5.5rem] w-fit">
        <div className="w-full px-[2rem] sm:px-0 sm:w-[24.25rem]">
          <Logo />
        </div>
        <div className="flex flex-col items-center w-full px-[2rem] sm:px-0 sm:w-[24.25rem]">
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <h2 className="text-[2rem]">Login</h2>
              <p className="text-tertiary-dark">Informe os dados abaixo para acessar a nossa plataforma.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <fieldset className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-4 w-full sm:w-[3.5rem]">
                  <TextField id="login-input" labelText="Login" type="text" styles={"w-full"} name="login" register={register}/>
                  <TextField id="password-input" labelText="Senha" type="password" icon={eyeShow} name="password" register={register}/>
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
