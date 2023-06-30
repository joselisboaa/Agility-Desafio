import { Header, Navbar } from "@/components";
import { useFetch } from "@/hooks/useFetch";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_ACL_GOOGLE_API_KEY;

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
        <div className="bg-primary-brand-dark w-full">{children}</div>
      </div>
    </div>
  );
}
