import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LowerHero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden py-4"
    >
      {/* Hero Images */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12">
        <Image
          src="/Images/guild.jpg"
          alt="Guild Image"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className="z-0 rounded-lg"
          width={150}
          height={150}
        />
        <Image
          src="/Images/sweep.jpg"
          alt="Sweep Image"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className="z-0 rounded-lg"
          width={150}
          height={150}
        />
        <Link href='https://burnright.co.uk/' target='_blank'>
          <Image
            src="/Images/burinright-logo.svg"
            alt="Sweep Image"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority={true}
            className="z-0 rounded-lg"
            width={150}
            height={150}
          />
        </Link>
        <Image
            src="/Images/readytoburn.png"
            alt="Sweep Image"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority={true}
            className="z-0 rounded-lg"
            width={150}
            height={150}
          />
      </div>
    </section>
  );
};

export default LowerHero;
