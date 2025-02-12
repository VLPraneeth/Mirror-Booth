import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Luxe Mirror Booth</h3>
            <p className="mb-4">Elevating events with luxury photo experiences.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
                <Instagram />
              </a>
              <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-playfair font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-gold transition-colors duration-300">
                  Previous Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-playfair font-bold mb-4">Contact Information</h4>
            <p>VL Praneeth, Hyderabad</p>
            <p>Phone: (+91)9346158099</p>
            <p>Email: vemireddy190@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-ivory/20 text-center">
          <p>&copy; {new Date().getFullYear()} Luxe Mirror Booth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

