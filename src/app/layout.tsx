import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./devicon.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Ng Yong Kang's Portfolio`,
  description: "Advanced portfolio project with typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className=" bg-background-700 text-mainText h-screen 
      snap-y snap-mandatory overflow-scroll z-0"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
