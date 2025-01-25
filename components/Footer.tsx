import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-grey-1 text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Our Location</h3>
            <p className='text-grey-2'>8 Windsor Avenue <br />
               Chafford Hundred <br />
               RM16 2UB</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">
              Contact Us: 
            </h3>
            <p className='text-grey-2'>
              07709568280 <br />
              robert.forsythe@gmail.com
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          
        </div>
        <div className='container mx-auto flex-col md:flex-row justify-between items-center flex space-x-4 mt-8 md:mt-4 md:mb-4'>
          © 2025 Essex & Suffolk Sweeps
        </div>
      </footer>
  )
}

export default Footer