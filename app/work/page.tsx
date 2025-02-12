"use client"

import { useState } from "react"
import Image from "next/image"

const caseStudies = [
  {
    title: "Elegant Wedding at The Grand Hotel",
    description: "A luxurious wedding celebration featuring our gold-themed mirror booth.",
    image: "/images/previouswork/elegantweddingatgrandhotel.jpg",
    testimonial: "Luxe Mirror Booth made our special day even more magical. Our guests couldn't stop talking about it!",
    client: "Sarah & James",
  },
  {
    title: "Annual Corporate Gala",
    description: "A sophisticated corporate event with a custom-branded mirror booth experience.",
    image: "/images/previouswork/annualeventgala.jpg",
    testimonial: "The mirror booth was a hit! It perfectly aligned with our brand and provided great entertainment.",
    client: "TechCorp Inc.",
  },
  {
    title: "Celebrity Birthday Bash",
    description: "A star-studded event featuring our VIP mirror booth package.",
    image: "/images/previouswork/birthdaybash.png",
    testimonial: "Luxe Mirror Booth brought the glamour to my party. The photos were absolutely stunning!",
    client: "A-List Celebrity",
  },
]

export default function PreviousWork() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)

  return (
    <div className="bg-ivory min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-navy text-center mb-12">Our Previous Work</h1>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-[400px] w-full">
                <Image
                  src={caseStudies[activeCaseStudy].image || "/placeholder.svg"}
                  alt={caseStudies[activeCaseStudy].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">{caseStudies[activeCaseStudy].title}</h2>
              <p className="text-lg text-navy mb-6">{caseStudies[activeCaseStudy].description}</p>
              <blockquote className="italic text-lg text-navy mb-4">
                "{caseStudies[activeCaseStudy].testimonial}"
              </blockquote>
              <p className="text-navy font-bold">- {caseStudies[activeCaseStudy].client}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${index === activeCaseStudy ? "bg-gold" : "bg-navy opacity-50"}`}
                onClick={() => setActiveCaseStudy(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-navy text-ivory">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-8">Ready to Create Your Own Success Story?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Let Luxe Mirror Booth bring the magic to your next event. Whether it's a wedding, corporate gathering, or a
            star-studded party, we're here to make it unforgettable.
          </p>
          <button className="bg-gold text-navy px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
            Book Your Experience
          </button>
        </div>
      </section>
    </div>
  )
}

