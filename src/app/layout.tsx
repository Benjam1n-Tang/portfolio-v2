import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css"
import Navbar from "@/components/layout/Navbar";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Tang",
  description: "A portfolio website for Benjamin Tang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
