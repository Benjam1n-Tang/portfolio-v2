"use client";
import { Icon } from "@iconify/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { socials } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-6 lg:px-10 py-10 flex justify-between items-center font-poppins lg:flex-row flex-col-reverse gap-6">
      <p  className="tracking-wide lg:text-left text-center">
        © 2025 <span className="font-medium">Benjamin Tang</span>. All Rights
        Reserved.
      </p>

      <div className="flex item-center lg:gap-6 gap-8">
        <Tooltip>
          <TooltipTrigger>
            <Link href={socials.linkedin} target="_blank" rel="noreferrer">
              <Icon icon="ri:linkedin-box-fill" width="28" height="28" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Connect on LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Link href={socials.github} target="_blank" rel="noreferrer">
              <Icon icon="ri:github-fill" width="28" height="28" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Check my Github</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Link href={socials.twitter} target="_blank" rel="noreferrer">
              <Icon icon="ri:twitter-x-line" width="28" height="28" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Follow my Twitter</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Link href={socials.instagram} target="_blank" rel="noreferrer">
              <Icon icon="ri:instagram-line" width="28" height="28" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Follow my Instagram</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
