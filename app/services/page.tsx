"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    title: "Classic Mirror Booth",
    description: "Our signature mirror photo booth with customizable frames and filters.",
    image: "/images/5.jpg",
  },
  {
    title: "GIF Booth",
    description: "Create fun, animated GIFs that can be shared instantly on social media.",
    image: "/images/7.jpg",
  },
  {
    title: "360 Video Booth",
    description: "Capture stunning 360-degree videos for a truly immersive experience.",
    image: "/images/360-video-booth.jpg",
  },
  {
    title: "Green Screen Booth",
    description: "Transport your guests to any location with our green screen technology.",
    image: "/images/services/greenscreenbooth.png",
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="bg-ivory min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-navy text-center mb-12">Our Services</h1>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-[400px] w-full">
                <Image
                  src={services[activeService].image || "/placeholder.svg"}
                  alt={services[activeService].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">{services[activeService].title}</h2>
              <p className="text-lg text-navy mb-6">{services[activeService].description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-navy px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:bg-opacity-90"
              >
                Book Now
              </motion.button>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            {services.map((service, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 rounded-full ${
                  index === activeService ? "bg-gold text-navy" : "bg-navy text-ivory"
                }`}
                onClick={() => setActiveService(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-navy text-ivory">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-8">Customization Options</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            At Luxe Mirror Booth, we believe in tailoring our services to match your event perfectly. From custom
            backdrops to personalized props, we offer a wide range of options to make your photo booth experience truly
            unique.
          </p>
          <ul className="text-lg mb-8 max-w-3xl mx-auto list-disc list-inside">
            <li>Customized photo frames</li>
            <li>Branded overlays</li>
            <li>Themed prop sets</li>
            <li>Personalized backdrops</li>
            <li>Custom animations for GIF booths</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-navy px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:bg-opacity-90"
          >
            Explore Customization Options
          </motion.button>
        </div>
      </section>
    </div>
  )
}

