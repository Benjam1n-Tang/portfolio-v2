"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { resumeLink } from "@/constants";
import { useMediaQuery } from "@/hooks/use-media-query";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleResumeDownload = () => {
  window.open(
    `${resumeLink}`,
    "_blank"
  );
};

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="header">
      <nav className="navbar">
        <a className="nav_logo" href={"/"}>
          BEN.TANG
        </a>
        {isDesktop ? (
          <>
            <div className="h-12 justify-center items-center lg:flex hidden ">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="nav_link">
                  [ {link.name} ]
                </Link>
              ))}
            </div>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleResumeDownload}
              className="hidden lg:flex font-mono"
            >
              Resume
            </Button>{" "}
          </>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon className="hamburger" size={32} />
            </DrawerTrigger>
            <DrawerContent className="bg-sky-950 border-none outline-none  focus:outline-none rounded-l-sm overflow-y-scroll">
              <DrawerClose className="navbar w-full justify-end">
                <X className="hamburger h-12" size={36} />
              </DrawerClose>
              <DrawerTitle className="hidden">Hamburger Navbar</DrawerTitle>
              <DrawerDescription className="hidden">
                A Navbar for smaller screens
              </DrawerDescription>
              <div className="flex flex-col font-sans text-primary-foreground font-medium px-6 py-2 gap-6 text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="border-b-1 border-neutral-300 py-4"
                  >
                    {" "}
                    {link.name}{" "}
                  </Link>
                ))}
              </div>
              <div className="px-6 pt-10">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleResumeDownload}
                  className="w-full font-sans"
                >
                  Resume
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
