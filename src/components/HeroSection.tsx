import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center"></div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Art of music
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
        Discover the rhythm of your soul on our music website. Immerse yourself
        in a world of melodies, where every beat tells a story. From latest
        releases to timeless classics, explore a diverse collection of tracks
        spanning genres. Join our community and let the music move you.
      </p>
      <div className="mt-4">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Link href={"/services"}>Explore Services</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
