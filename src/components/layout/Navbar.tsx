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
import { resumeLink, navLinks } from "@/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setActive(hash);
    }
  }, []);

  const handleResumeDownload = () => {
    window.open(`${resumeLink}`, "_blank");
    setIsOpen(false);
  };

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="header">
      <nav className="navbar">
        <Link className="nav_logo" href={"/"}>
          BEN.TANG
        </Link>
        {isDesktop ? (
          <>
            <div className="h-12 justify-center items-center lg:flex hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav_link ${
                    active === link.href
                      ? "underline underline-offset-5 decoration-2"
                      : ""
                  }`}
                  onClick={() => setActive(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button
              onClick={handleResumeDownload}
              className="hidden lg:flex rounded-none"
            >
              Resume
            </Button>{" "}
          </>
        ) : (
          <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>
              <MenuIcon className="hamburger" size={32} />
            </DrawerTrigger>
            <DrawerContent className="bg-primary border-none outline-none focus:outline-none rounded-l-sm overflow-y-auto overflow-x-hidden">
              <DrawerClose className="navbar w-full justify-end">
                <X className="hamburger h-12 text-secondary" size={36} />
              </DrawerClose>
              <DrawerTitle className="hidden">Hamburger Navbar</DrawerTitle>
              <DrawerDescription className="hidden">
                A Navbar for smaller screens
              </DrawerDescription>
              <div className="flex flex-col uppercase tracking-wider font-poppins text-primary-foreground px-6 py-2 gap-6 text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`border-b-1 border-neutral-300 py-4 ${
                      active === link.href ? "" : ""
                    }`}
                    onClick={() => {
                      setActive(link.href);
                      setIsOpen(false);
                    }}
                  >
                    {""}
                    {link.name}
                    {""}
                  </Link>
                ))}
              </div>
              <div className="px-6 pt-10">
                <Button
                  variant="secondary"
                  onClick={handleResumeDownload}
                  className="w-full rounded-none"
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
