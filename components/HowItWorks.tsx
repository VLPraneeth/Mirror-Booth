"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { title: "Book Your Booth", description: "Choose your date and package" },
  { title: "Customize Your Experience", description: "Select themes, props, and backdrops" },
  { title: "Capture & Share Instantly", description: "Take photos and share them on social media" },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        x: (index) => (index % 2 === 0 ? -50 : 50),
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-navy text-ivory">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card mb-6 p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "bg-gold text-navy" : "bg-navy-light"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-lg">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <div className="relative h-96 w-full">
              <Image
                src={`/images/step-${activeStep + 1}.jpg`}
                alt={steps[activeStep].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

