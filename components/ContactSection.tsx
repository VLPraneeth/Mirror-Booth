import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactSection() {
  const [mapZoomed, setMapZoomed] = useState(false)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center mb-4">
                <MapPin className="text-gold mr-2" />
                <p>123 Magic Mirror St, Photo City, PC 12345</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="text-gold mr-2" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-gold mr-2" />
                <p>info@magicmirrorphotobooth.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gold hover:text-white transition-colors duration-300">
                  <Facebook />
                </a>
                <a href="#" className="text-gold hover:text-white transition-colors duration-300">
                  <Instagram />
                </a>
                <a href="#" className="text-gold hover:text-white transition-colors duration-300">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div
              className={`relative h-96 rounded-lg overflow-hidden transition-all duration-500 ${
                mapZoomed ? "scale-110" : "scale-100"
              }`}
              onMouseEnter={() => setMapZoomed(true)}
              onMouseLeave={() => setMapZoomed(false)}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621436761410!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

