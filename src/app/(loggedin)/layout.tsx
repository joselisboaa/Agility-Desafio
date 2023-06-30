import { Header, Navbar } from "@/components";
import { useFetch } from "@/hooks/useFetch";

interface IHomeLayout {
  children: React.ReactNode;
}

interface IUserAccountProps {
  id: number;
  login: string;
  password: string;
}

export default async function HomeLayout({ children }: IHomeLayout) {
  const sendHttpRequest = useFetch<IUserAccountProps[]>({ method: "GET", endpoint: "accounts" });

  const [userData] = await sendHttpRequest();

  return (
    <div>
      <Header username={userData.login} />
      <div className="flex">
        <Navbar />
        <div className="h-screen w-full bg-primary-brand-dark p-5">{children}</div>
      </div>
    </div>
  );
}
