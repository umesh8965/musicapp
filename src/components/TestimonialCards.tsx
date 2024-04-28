"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    title: "Essentials of Music Theory",
    name: "Sophia Johnson",
    quote:
      "Taking the Essentials of Music Theory course was a game-changer for me. It provided me with a solid understanding of music fundamentals, from key signatures to chord progressions. Highly recommended for anyone serious about pursuing music!",
  },

  {
    title: "Introduction to Music Production",
    name: "David Martinez",
    quote:
      "Thanks to the Introduction to Music Production course, I was able to kickstart my journey into music production. The hands-on approach and practical tips provided invaluable insights into DAWs, MIDI sequencing, and audio recording. A must for aspiring producers!",
  },

  {
    title: "Exploring World Music Traditions",
    name: "Maria Nguyen",
    quote:
      "Exploring World Music Traditions was an eye-opening experience for me. It introduced me to the rich diversity of musical cultures around the world, from African rhythms to Asian melodies. A captivating journey that broadened my musical horizons!",
  },

  {
    title: "The Art of Songwriting",
    name: "Michael Smith",
    quote:
      "The Art of Songwriting course exceeded my expectations. It provided me with the tools and techniques to craft compelling songs, from lyric writing to melody development. I'm grateful for the invaluable insights that have taken my songwriting skills to the next level!",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.4] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="mt-20 md:mt-0 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Hear From Our Students</h2>
      <p className="mt-5 pt-5 mb-5 pb-5 font-normal text-base md:text-lg text-neutral-300 max-w-[720px] mx-auto text-center">
        Explore what our students have to say about their experiences with our
        courses. From unlocking new musical skills to unleashing creativity,
        discover how our courses have transformed their musical journeys. Read
        on to find inspiration and insights from real learners like you!
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default TestimonialCards;
