"use client";
import { CiPlay1 } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import Container from "@/components/container";

const LazyReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

//method call
const Featured = () => {
  const videoUrl =
    "https://youtu.be/kQ3f6NR_5pQ?si=Ay847uT0aKFVwrXF";
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-white text-bg-dark">
      <Container>
        <div className=" py-section flex flex-col lg:flex-row gap-20 lg:items-center px-container">
          <div
            data-aos="fade-up"
            className="flex-1 text-center lg:text-start "
          >
            <h2>
              Party All Night <br className="hidden lg:block" />
              Neon Fever
            </h2>
            <p className="text-cyan  mx-auto lg:mx-0 mt-10 mb-12 max-w-[533px]">
              Big news, everyone! The hype is real! "Party All Night" from my album "Neon Fever" is blowing up on YouTube and trending! Thanks to all of you, the party never stops. Keep streaming and let's keep the energy high!
            </p>
            <Link className="font-medium text-bg-dark hover:text-lime duration-300 transition-all ease-linear" href="https://www.youtube.com/@lottesque_official" target="_blank">
              Official Youtube Channel
            </Link>
          </div>
          <div data-aos="fade-up" className="flex-1 relative isolate">
            {!play && (
              <div className="absolute pointer-events-none inset-0 flex flex-col justify-center items-center pt-10">
                <div className="cursor-pointer w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 text-xl grid place-content-center to-purple-600 mb-[-30px]">
                  <CiPlay1 />
                </div>
                <Image
                  src={"/img/home/WATCH.png"}
                  width={242}
                  height={95}
                  alt=""
                  unoptimized
                />
              </div>
            )}
            <div className="flex justify-center">
              <LazyReactPlayer
                url={videoUrl}
                style={{ maxWidth: "640px" }}
                width="100%"
                height="540px"
                controls
                onPlay={() => {
                  setPlay(true);
                }}
                onPause={() => {
                  setPlay(false);
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Featured;
