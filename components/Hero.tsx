"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const Hero = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { left, top, width, height } = heroRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }
      const x = (clientX - left) / width
      const y = (clientY - top) / height
      setMousePosition({ x, y })
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const glowX = useTransform(mouseX, [0, 1], ["-20%", "120%"])
  const glowY = useTransform(mouseY, [0, 1], ["-20%", "120%"])

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
        hidden: {},
      }}
    >
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h1
          className="text-6xl md:text-8xl font-playfair font-bold text-navy mb-6 relative"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          Luxe Mirror Booth
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/40 mix-blend-overlay"
            style={{
              left: glowX,
              top: glowY,
              backgroundSize: "200% 200%",
            }}
          />
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-navy mb-8 max-w-2xl"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
          }}
        >
          Elevate your events with our premium mirror photo booth experiences. Capture memories in style and
          sophistication.
        </motion.p>
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
          }}
        >
          <motion.button
            className="bg-gold text-navy px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              x: useTransform(mouseX, [0, 1], [-10, 10]),
              y: useTransform(mouseY, [0, 1], [-10, 10]),
            }}
          >
            Book Now
          </motion.button>
          <motion.div
            className="absolute inset-0 bg-gold/20 rounded-full filter blur-md"
            style={{
              scale: useTransform(mouseX, [0, 1], [1, 1.2]),
              x: useTransform(mouseX, [0, 1], [-20, 20]),
              y: useTransform(mouseY, [0, 1], [-20, 20]),
            }}
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
        }}
      >
        <Image
          src="/images/luxury-background.jpg"
          alt="Luxury background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </motion.section>
  )
}

export default Hero

