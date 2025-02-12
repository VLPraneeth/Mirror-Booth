"use client"

import { useEffect } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import * as google from "@googlemaps/google-maps-services-js"

export default function OurOffices() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 12,
      })

      new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.006 },
        map,
        title: "Luxe Mirror Booth HQ",
      })
    })
  }, [])

  return (
    <div className="bg-ivory min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-navy text-center mb-12">Our Offices</h1>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-playfair font-bold text-navy mb-4">Visit Our Showroom</h2>
              <p className="text-lg text-navy mb-6">
                Experience the Luxe Mirror Booth in person at our state-of-the-art showroom. Our team will guide you
                through our various booth options and help you choose the perfect setup for your event.
              </p>
              <address className="text-lg text-navy mb-6 not-italic">
                Sri Ram Nagar
                <br />
                Kondapur, Telangana
                <br />
                India
              </address>
              <p className="text-lg text-navy mb-6">
                <strong>Phone:</strong> (+91)9346158099
                <br />
                <strong>Email:</strong>  vemireddy190@gmail.com
              </p>
            </div>
            <div className="md:w-1/2 h-[400px]" id="map"></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-navy text-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-8">Virtual Showroom Tour</h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Can't visit us in person? Take a virtual tour of our showroom and experience the Luxe Mirror Booth from the
            comfort of your home.
          </p>
          <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/wOM0OOkDXQE" width="1600" height="450" frameborder="0"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

