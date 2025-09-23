import "./globals.css";
import { twMerge } from "tailwind-merge";
import "aos/dist/aos.css"; // Import AOS CSS file
// Fonts from google fonts
import {
  dMSans,
  kumbhSans,
  spaceGrotesk,
  pacifico,
  poppins,
} from "@/fonts/fonts";
import AnimationProvider from "./AnimationProvider";
import LayoutProvider from "./LayoutProvider";

// Homepage Metadata
export const metadata = {
  title: "Lottesque Music . New EDM and Dance Music",
  description:
    "Lottesque is the musical project of a passionate music enthusiast who set out to refresh the EDM scene in 2025. Inspired by the search for authentic, exhilarating music, Lottesque decided to take control and learn the fundamentals of music production from the ground up. As Lottesque, an alter ego with a yellow T-shirt and a gorilla mask, the artist wants to convey the message that making music should be a personal and accessible journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          spaceGrotesk.className,
          dMSans.variable,
          kumbhSans.variable,
          pacifico.variable,
          poppins.variable
        )}
      >
        <AnimationProvider>
          <LayoutProvider>
            <div className="layout">
              {children}
            </div>
          </LayoutProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
