import QueryProvider from "@/components/QueryProvider"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Client System",
  description: "Client store system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <QueryProvider>
        <body className="bg-white grow h-screen w-screen">{children}</body>
      </QueryProvider>
    </html>
  )
}
