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
      className="h-screen z-0 bg-background-700 text-mainText 
      snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
      scrollbar scrollbar-track-background-400/20 scrollbar-thumb-secondary-500"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
