import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section id="home" className="bg-gray-100">
        
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactsPage;
