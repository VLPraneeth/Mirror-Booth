"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    quote: "Luxe Mirror Booth made our wedding unforgettable. Our guests couldn't stop talking about it!",
    author: "Sarah & James",
    event: "Wedding",
  },
  {
    quote: "The perfect addition to our corporate gala. Professional, sleek, and so much fun!",
    author: "Emily Thompson",
    event: "Corporate Event",
  },
  {
    quote: "Absolutely stunning photos and an incredible experience. Highly recommend!",
    author: "Michael Chen",
    event: "Birthday Celebration",
  },
]

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="py-20 bg-navy text-ivory">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-playfair font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl italic mb-4">{testimonials[currentTestimonial].quote}</p>
              <p className="text-gold font-semibold">{testimonials[currentTestimonial].author}</p>
              <p className="text-sm opacity-75">{testimonials[currentTestimonial].event}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

