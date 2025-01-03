import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Hackathon-2",
  description: "hackathon-2 template 9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} font-helvetica`}>
        <header className="">
          <h1 className={`${greatVibes.className} text-4xl`}></h1> 
        </header>
        
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
