"use client";
import { Button } from "../ui/button";
import { MenuIcon, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

const Navbar = () => {
  const navLinks = [
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="header">
      <nav className="navbar">
        <a className="nav_logo">BEN.TANG</a>
        {isDesktop ? (
          <>
            <div className="h-12 justify-center items-center lg:flex hidden">
              {navLinks.map((link) => (
                <a key={link.name} className="nav_link">
                  {link.name}
                </a>
              ))}
            </div>
            <Button variant="secondary" size="lg" className="hidden lg:flex">
              Resume
            </Button>{" "}
          </>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon className="hamburger" size={32} />
            </DrawerTrigger>
            <DrawerContent className="bg-sky-950 border-0 outline-none focus:outline-none rounded-l-sm">
              <DrawerClose className="navbar w-full justify-end">
                <X className="hamburger h-12" size={36}/>
              </DrawerClose>
              <DrawerTitle>Drawer Header</DrawerTitle>
              <DrawerDescription>
                This is a description for the drawer.
              </DrawerDescription>

              {/* Your drawer body content goes here */}
            </DrawerContent>
          </Drawer>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
