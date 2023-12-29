import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RissAgung | Website",
  description: "RissAgung Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`w-screen max-w-full flex flex-col items-center dark:bg-primary bg-secondary duration-700 overflow-x-hidden ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
