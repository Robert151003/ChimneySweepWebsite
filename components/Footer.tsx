import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-grey-1 text-white p-6 md:p-8">
      {/* Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Location Section */}
        <div>
          <h3 className="text-lg font-bold">Our Location</h3>
          <p className="text-grey-2 text-sm">
            8 Windsor Avenue <br />
            Chafford Hundred <br />
            RM16 2UB
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold">Contact Us:</h3>
          <p className="text-grey-2 text-sm">
            <Link href="tel:+447545976100" className="hover:underline">
              07545976100
            </Link>
            <br />
            <Link href="mailto:david.odonnell0101@gmail.com" className="hover:underline">
              David.odonnell0101@gmail.com
            </Link>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-6">
          <Link
            href="https://www.facebook.com/EsSweeps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </Link>
          {/*<Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </Link>*/}
          <Link
            href="https://www.instagram.com/info.essweeps?igsh=eGtpbTliZzR5aWF4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-8 text-center text-sm text-grey-2">
        © 2025 Essex & Suffolk Sweeps
      </div>
    </footer>
  );
};

export default Footer;
