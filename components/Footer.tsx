import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Image Section */}
      
      
      {/* Contact Section */}
      <section className="flex w-full flex-col justify-between bg-light-3 p-6 pt-10 text-black   z-10">
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <h1>Contact</h1>
            <div>07545 976 100</div>
            <div>info.essweeps@gmail.com</div>
          </div>

          <div>
            <h1>Address</h1>
            <div>8 Windsor Avenue</div>
            <div>Grays</div>
            <div>RM162UB</div>
          </div>

          <div className="flex flex-1 flex-col gap-6">Follow Us</div>
          <div>&#169; 2025 Essex & Suffolk Sweeps</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;



