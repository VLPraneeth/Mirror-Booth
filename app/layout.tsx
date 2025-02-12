import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react" // Import React

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata = {
  title: "Luxe Mirror Booth - Premium Photo Booth Rentals",
  description:
    "Experience luxury photo booth rentals for weddings, corporate events, and more. Capture memories in style with Luxe Mirror Booth.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-ivory text-navy`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

