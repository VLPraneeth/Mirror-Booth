"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or Supabase
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", eventType: "", date: "" })
  }

  return (
    <section className="py-20 bg-navy text-ivory">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12">Book Your Event</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-ivory text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-ivory text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block text-sm font-medium mb-1">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-ivory text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="concert">Concert</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-ivory text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gold text-navy py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
          >
            Book Now
          </motion.button>
        </form>
      </div>
    </section>
  )
}

