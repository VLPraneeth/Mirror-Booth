"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: "Elegant Events", logo: "/images/partners/elegantevents.jpg" },
  { name: "Luxe Weddings", logo: "/images/partners/wedding.jpg" },
  { name: "Corporate Connections", logo: "/images/partners/corporateevents.jpg" },
  { name: "Gala Planners", logo: "/images/partners/galaplanners.jpg" },
  { name: "Venue Visionaries", logo: "/images/partners/venuevision.jpg" },
  { name: "Celebration Experts", logo: "/images/partners/celebrationexperts.jpg" },
]

export default function Partners() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partner-logo", {
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
    <div className="bg-ivory min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-navy text-center mb-12">Our Trusted Partners</h1>
          <p className="text-lg text-navy text-center mb-12 max-w-3xl mx-auto">
            We collaborate with the finest event planners, venues, and wedding organizers to bring you unparalleled
            photo booth experiences. Our partnerships ensure that every event is executed flawlessly, down to the last
            detail.
          </p>
          <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo flex flex-col items-center">
                <div className="w-80 h-80 relative mb-4">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-playfair font-bold text-navy text-center">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-navy text-ivory">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-8">Become a Partner</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join our network of esteemed partners and elevate your events with Luxe Mirror Booth. We're always looking
            for innovative collaborators who share our passion for creating unforgettable experiences.
          </p>
          <button className="bg-gold text-navy px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
            Contact Us to Partner
          </button>
        </div>
      </section>
    </div>
  )
}

