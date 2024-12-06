import Image from 'next/image';
import React from 'react';

const images = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full"> {/* Use grid layout */}
      <div className="flex justify-center items-center">
        <Image 
          src="/images/sweep.jpg" 
          alt="Sweep" 
          width={200} 
          height={200} 
        />
      </div>
      <div className="flex justify-center items-center">
        <Image 
          src="/images/guild.jpg" 
          alt="Guild" 
          width={200} 
          height={200} 
        />
      </div>
    </div>
  );
}

export default images;