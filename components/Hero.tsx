import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section
        id="home"
        className="relative bg-gray-100 w-full h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] flex items-center justify-center overflow-hidden"
      >
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/Images/CarouselImages/chimney 3.jpeg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority={true}
            className="z-0"
          />
        </div>
      </section>
  )
}

export default Hero