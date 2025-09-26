"use client";

import { navigationLinks } from "@/utils/constants";
import Link from "next/link";
import {
  FaYoutube,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa6";
import SocialIcon from "@/components/icon";
import useScroll from "@/hooks/useScroll";
import { twMerge } from "tailwind-merge";
import MobileMenu from "@/components/mobile-menu";
//method call
const Header = () => {
  // Custom hooks for get scroll position
  const scrollPosition = useScroll();
  const isScroll = scrollPosition.y > 50;
  const mystyle = {
      marginRight: "20px",
      right: "0px",
      position: "absolute"
    };

  return (
    <nav
      className={twMerge(
        "flex z-50 py-5 px-10 lg:px-20  fixed w-full top-0 items-center",
        isScroll ? "bg-bg-dark  bg backdrop-blur-[12px]" : "bg-transparent"
      )}
    >
      <Link className="text-xl md:text-2xl leading-snug font-bold" href="/">
        LOTTESQUE
      </Link>
      <ul className="hidden lg:flex items-center font-medium gap-8 lg:gap-12 uppercase">
        {navigationLinks.map((link) => (
          <li
            className="duration-300 ease-linear transition-all hover:text-lime"
            key={link.id}
          >
            <a href={link.route}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div style={mystyle}>
        <div className=" hidden lg:flex items-center gap-5">
          <Link href="https://open.spotify.com/intl-de/artist/5e37HmlSrLs3zJmpOqrgLX?si=hWETZueTTEK1dJa66XbLVg">
            <SocialIcon
              className={
                "hover:text-lime duration-300 ease-linear transition-all"
              }
              Icon={FaSpotify}
            />
          </Link>
          <Link href="https://www.youtube.com/@lottesque_official">
            <SocialIcon
              className={
                "hover:text-lime duration-300 ease-linear transition-all"
              }
              Icon={FaYoutube}
            />
          </Link>
          <Link href="https://www.instagram.com/lottesque_official/">
            <SocialIcon
              className={
                "hover:text-lime duration-300 ease-linear transition-all"
              }
              Icon={FaInstagram}
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
export default Header;
