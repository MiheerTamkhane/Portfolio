import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meteors from "@/components/Meteors";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "M.Dev",
  description: "Miheer Tamkhane portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen overflow-y-scroll overflow-x-hidden relative ${inter.className}`}
      >
        <div className="w-full h-full fixed z-40">
          {/* <Meteors className="" /> */}
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
