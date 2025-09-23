"use client";

import Link from "next/link";
import Container from "@/components/container";import {
  FaSpotify,
} from "react-icons/fa6";
import SectionHeading from "@/components/section-heading";
// Mock data for upcoming shows
import { playlists } from "@/data/data";
import Image from "next/image";
import { useLayout } from "@/app/LayoutProvider";
import { twMerge } from "tailwind-merge";
import SocialIcon from "@/components/icon";

//method call
const UpcomingShows = () => {
  const { isRTL } = useLayout();

  return (
    <div id="playlists" className="bg-white text-bg-dark">
      <Container className="py-section">
        <SectionHeading>
          <h2 className="uppercase text-center">playlists</h2>
        </SectionHeading>
        <div className="flex divide-y divide-cyan flex-col">
          {playlists.map((show) => (
            <Link
              key={show.id}
              href={show.link}
              target="_blank"
              className="flex gap-4 flex-col md:flex-row group transition-all relative isolate py-8 items-center justify-between"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
                <h4 className="font-bold transition-all duration-300 ease-linear group-hover:text-lime text-xl text-center md:text-start md:line-clamp-1">
                  {show.title}
                </h4>
              </div>

              <Image
                src={show.image}
                className={twMerge(
                  "absolute  scale-0 group-hover:scale-100 left-1/3  duration-500 transition-all top-5 md:top-[-40px] rotate-0  w-[17rem] h-[17rem] object-cover",
                  isRTL
                    ? "md:right-2/3 group-hover:-rotate-45"
                    : "md:left-2/3 group-hover:rotate-45"
                )}
                width={220}
                height={220}
                alt={show.title}
              unoptimized
              />

              <span className="font-medium uppercase text-lime">
                {show.status}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default UpcomingShows;
