import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import ContactCards from "@/components/ContactPage/ContactCards";

const ContactsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section id="home" className="bg-gray-100">
        
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <section id="about" className="my-8">
          {/* Centered "Contact Us" Heading */}
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        </section>

        <Separator />

        {/* Map Section */}
        <h3 className="text-2xl font-bold mb-4 text-center m-4">Find us Here</h3>
        <div className="flex justify-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1754525652354!2d0.32569127687822963!3d51.491647711853574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b70a919518c3%3A0x1fd5027adb7c7d99!2s8%20Windsor%20Ave%2C%20Grays%20RM16%202UB!5e0!3m2!1sen!2suk!4v1737811150456!5m2!1sen!2suk" 
            width="600" 
            height="450" 
            loading="lazy" 
          ></iframe>
        </div>
      </main>

      <Separator />

      <div>
        <h3 className="text-2xl font-bold mb-4 text-center m-4">Or, Get in Touch</h3>
        <ContactCards />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactsPage;
