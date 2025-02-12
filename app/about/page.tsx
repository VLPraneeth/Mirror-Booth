import Image from "next/image"

export default function About() {
  return (
    <div className="bg-ivory min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-navy text-center mb-12">About Luxe Mirror Booth</h1>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg text-navy mb-6">
                Luxe Mirror Booth is the epitome of elegance in the world of event photography. We bring a touch of
                sophistication to weddings, corporate gatherings, and high-profile events with our state-of-the-art
                mirror photo booths.
              </p>
              <p className="text-lg text-navy mb-6">
                Our journey began with a vision to transform the traditional photo booth experience into something truly
                extraordinary. Today, we pride ourselves on delivering unforgettable moments that your guests will
                cherish for years to come.
              </p>
              <p className="text-lg text-navy">
                With a commitment to innovation and customer satisfaction, Luxe Mirror Booth continues to set the gold
                standard in luxury event entertainment.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/luxeboothteam.jpg"
                alt="Luxe Mirror Booth Team"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-navy text-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Our Mission</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl mb-6">
              To elevate every event with cutting-edge photo experiences that blend luxury, technology, and creativity.
            </p>
            <p className="text-xl">
              We strive to create lasting memories and bring joy to our clients and their guests through our innovative
              mirror photo booths and exceptional service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

