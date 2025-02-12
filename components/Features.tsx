"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Camera, Share2, Zap, Palette } from "lucide-react"

const features = [
  { icon: Camera, title: "Instant Prints", description: "High-quality photos in seconds" },
  { icon: Share2, title: "Social Media Sharing", description: "Share memories instantly" },
  { icon: Zap, title: "Touchscreen Interaction", description: "User-friendly interface" },
  { icon: Palette, title: "Custom Branding", description: "Personalize your booth experience" },
]

const FeatureCard = ({ icon: Icon, title, description }) => {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Icon className="w-12 h-12 text-gold mb-4" />
      <h3 className="text-xl font-playfair font-bold text-navy mb-2">{title}</h3>
      <p className="text-navy opacity-80">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-playfair font-bold text-navy text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          Why Choose Luxe Mirror Booth?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

