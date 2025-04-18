import React from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {CowlPictures as CowlImages} from "@/constants";
import Image from 'next/image';

const page = () => {
  return (
    <section className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}

      {/* Cowls */}
      <section className="flex-grow p-4">
        <h2 className='text-2xl font-bold text-black m-4 underline'>Cowls</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CowlImages.map((src, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={src}
                fill
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default page;
