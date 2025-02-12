"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Camera, Share2, Zap, Palette } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: Camera, title: "Instant Prints", description: "High-quality photos in seconds" },
  { icon: Share2, title: "Social Media Sharing", description: "Share memories instantly" },
  { icon: Zap, title: "Touchscreen Interaction", description: "User-friendly interface" },
  { icon: Palette, title: "Custom Branding", description: "Personalize your booth experience" },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-navy text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-navy opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

