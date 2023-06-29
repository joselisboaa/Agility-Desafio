import { Header, Navbar } from "@/components";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_ACL_GOOGLE_API_KEY;

interface IHomeLayout {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayout) {
  return (
    <div>
      <Header username="José" />
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
