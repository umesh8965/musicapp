'use client'

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'


function UpcomingWebinar() {

  const webinars = [
      {
      title: "Mastering Music Production Techniques",
      description: "Join industry experts in this series of webinars as they explore advanced music production techniques, from sound design to mixing and mastering. Elevate your music production skills and create professional-quality tracks that stand out in the industry.",
      link: "https://chat.openai.com/c/60710211-05e1-4d33-9a78-f1fb85a316cc"
      },
      {
      title: "Unlocking Songwriting Secrets",
      description: "Discover the art of songwriting in these engaging webinars led by seasoned songwriters. Explore lyric writing, melody composition, and song structure as you learn to craft compelling songs that resonate with audiences worldwide.",
      link: "https://chat.openai.com/c/60710211-05e1-4d33-9a78-f1fb85a316cc#"
      },
      {
      title: "Exploring World Music Traditions",
      description: "Immerse yourself in the diverse sounds of global music traditions with our webinar series. From African rhythms to Asian melodies, journey across continents and explore the rich cultural heritage that inspires music creation.",
      link: "https://chat.openai.com/c/60710211-05e1-4d33-9a78-f1fb85a316cc#"
      },
      {
      title: "Mastering Music Theory Essentials",
      description: "Dive deep into the fundamentals of music theory with our webinar series. Learn about scales, chords, harmony, and more as you gain a solid foundation that will enhance your understanding and appreciation of music.",
      link: "https://chat.openai.com/c/60710211-05e1-4d33-9a78-f1fb85a316cc#"
      },
      {
      title: "Creating Captivating Music Videos",
      description: "Join us for a series of webinars focused on music video production techniques. From concept development to post-production editing, learn how to create visually stunning music videos that complement your music and captivate audiences.",
      link: "https://chat.openai.com/c/60710211-05e1-4d33-9a78-f1fb85a316cc#"
      },
      {
      title: "Navigating the Music Business Landscape",
      description: "Gain insights into the music business landscape with our webinar series featuring industry experts. Learn about music licensing, royalties, marketing strategies, and more as you navigate the complexities of the music industry.",
      link: "https://chat.openai.com/c/60710211-05e1-4d33-9a78-f1fb85a316cc#"
      }
     
  ];


  return (
    <div className="p-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
      </div>

      <div className="mt-10">
        <HoverEffect  items={webinars.map(e =>({
             title:e.title,
             description: e.description,
            link: '/'
        }
        ))}></HoverEffect>
      </div>

      <div className="mt-10 text-center">
        <Link href={"/"}
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All webinars
        </Link>
      </div>
    </div>
  </div>
  )
}

export default UpcomingWebinar
