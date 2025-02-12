"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useTransform, useScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const images = [
  { src: "/images/1.jpg", alt: "Wedding Photo Booth" },
  { src: "/images/8.jpg", alt: "Corporate Event Photo Booth" },
  { src: "/images/9.jpg", alt: "Concert Photo Booth" },
  { src: "/images/3.jpg", alt: "Birthday Party Photo Booth" },
  { src: "/images/4.jpg", alt: "Graduation Photo Booth" },
  { src: "/images/7.jpg", alt: "Holiday Party Photo Booth" },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const galleryRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const yRange = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section ref={galleryRef} className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-playfair font-bold text-navy text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          Our Gallery
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 cursor-pointer overflow-hidden rounded-lg shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              onClick={() => setSelectedImage(image.src)}
              style={{ y: yRange }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl h-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected gallery image"
              layout="responsive"
              width={1600}
              height={900}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery

