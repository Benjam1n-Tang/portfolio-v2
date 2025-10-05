import type { Metadata } from "next";
import { Electrolize, DM_Sans, JetBrains_Mono, Figtree } from "next/font/google";
import "../globals.css"
import Navbar from "@/components/layout/Navbar";

const electrolize = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: "400",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Benjamin Tang — Portfolio",
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
        className={`${electrolize.variable, sans.variable, mono.variable, figtree.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
