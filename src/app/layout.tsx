import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/nav-bar";
import Chat from "@/components/Chat/chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AEI+KDM Joint Venture",
  description: "AEI+KDM is building Bangladesh's biggest ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 overflow-x-clip">
          <Navbar />
        </header>
        <main className="md:my-2 md:4/5 xl:w-2/3 md:mx-auto flex flex-col min-h-screen">
          {children}
        </main>
        <Chat />
      </body>
    </html>
  );
}
