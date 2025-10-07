import type { Metadata } from "next";
import { Electrolize, Inter, Red_Hat_Display, JetBrains_Mono } from "next/font/google";
import "../globals.css"
import Navbar from "@/components/layout/Navbar";

const electrolize = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const redhatdisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${electrolize.variable} ${inter.variable} ${redhatdisplay.variable} ${mono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
