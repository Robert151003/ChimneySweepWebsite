import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <Carousel/>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
