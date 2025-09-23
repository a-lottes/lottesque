import Image from "next/image";
import Container from "@/components/container";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaSpotify,
  FaSoundcloud,
  FaYoutube,
  FaAmazon,
  FaApple,
  FaTiktok,
} from "react-icons/fa6";
import SocialIcon from "@/components/icon";
//method call 
const Footer = () => {
  return (
    <div className="relative bg-footer-dark bg-cover bg-no-repeat">
      <div className="absolute z-10 inset-0 bg-footer-2 bg-cover bg-no-repeat"></div>
      <Container className="pt-section text-white relative z-20">
        <header>
          <h3 className="text-2xl text-center sm:text-start mx-auto sm:mx-0 font-bold mb-12 max-w-[250px]">
            Follow Me On Instagram
          </h3>
        </header>
        <div className="flex gap-16 md:gap-20 lg:gap-28 mb-20 flex-wrap">
          <div className="basis-[250px] mx-auto sm:mx-0 ">
            <div className="grid gap-4 grid-cols-3 ">
              <Image
                src={"/img/home/g1.jpg"}
                width={70}
                height={70}
                className="object-cover h-[70px]"
                alt="music"
                unoptimized
              />
              <Image
                src={"/img/home/g2.jpg"}
                width={70}
                height={70}
                className="object-cover h-[70px]"
                alt="music"
                unoptimized
              />
              <Image
                src={"/img/home/g4.jpg"}
                width={70}
                height={70}
                className="object-cover h-[70px]"
                alt="music"
                unoptimized
              />
              <Image
                src={"/img/home/g5.jpg"}
                width={70}
                height={70}
                className="object-cover h-[70px]"
                alt="music"
                unoptimized
              />
              <Image
                src={"/img/home/g6.jpg"}
                width={70}
                height={70}
                className="object-cover h-[70px]"
                alt="music"
                unoptimized
              />
              <Image
                src={"/img/home/g8.jpg"}
                width={70}
                height={70}
                className="object-cover h-[70px]"
                alt="music"
                unoptimized
              />
            </div>
          </div>
          <div className="sm:flex-1 mx-auto sm:mx-0 lg:justify-around gap-10 flex">
            <div className="flex flex-col gap-2">
              <div>Lottesque Music</div>

              <div className="flex pt-4 gap-10">
                <Link href="https://open.spotify.com/intl-de/artist/5e37HmlSrLs3zJmpOqrgLX?si=o-Ap9CSARNyFRWzLC-MzRQ">
                  <SocialIcon
                    className={"hover:text-lime"}
                    Icon={FaSpotify}
                  />
                </Link>
                <Link href="https://soundcloud.com/lottesque">
                  <SocialIcon className={"hover:text-lime"} Icon={FaSoundcloud} />
                </Link>

                <Link href="https://www.youtube.com/@lottesque_official">
                  <SocialIcon className={"hover:text-lime"} Icon={FaYoutube} />
                </Link>

                <Link href="https://www.instagram.com/lottesque_official/">
                  <SocialIcon
                    className={"hover:text-lime"}
                    Icon={FaInstagram}
                  />
                </Link>
                <Link href="https://music.amazon.com/artists/B0FJS7CJ1F?ref=AM4APC_AR_P_en_US_B0FJS7CJ1F_vZccEv1">
                  <SocialIcon
                    className={"hover:text-lime"}
                    Icon={FaAmazon}
                  />
                </Link>
                <Link href="https://music.apple.com/de/artist/lottesque/1828202551">
                  <SocialIcon
                    className={"hover:text-lime"}
                    Icon={FaApple}
                  />
                </Link>
                <Link href="https://www.tiktok.com/@lottesque_official">
                  <SocialIcon
                    className={"hover:text-lime"}
                    Icon={FaTiktok}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <FooterLink href="/"> Home </FooterLink>
              <FooterLink href="/"> Contact </FooterLink>
              <FooterLink href="/"> Imprint </FooterLink>
            </div>
          </div>
        </div>
        <div className="py-5 border-t flex-col md:flex-row font-bold text-center md:text-start gap-2 border-cyan flex justify-center md:justify-between">
          <div>© 2025 Lottesque Music</div>
        </div>
      </Container>
    </div>
  );
};

// Footer Item Link Component
const FooterLink = ({ children, href = "/", ...props }) => {
  return (
    <Link
      {...props}
      className="text-white hover:text-lime transition-all ease-linear duration-300"
      href={href}
    >
      {children}
    </Link>
  );
};

export default Footer;
