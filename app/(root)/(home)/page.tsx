import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
{/*import { Terminal } from "lucide-react"*/}
import { AlertCircle  } from "lucide-react"
import HomeText from "@/components/HomePage/HomeText";
import QuickLinks from "@/components/HomePage/QuickLinks";
import PricingInformation from "@/components/HomePage/PricingInformation";
import Hero from "@/components/Hero";
import LowerHero from "@/components/LowerHero";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Slideshow */}
      <Hero />

      <Alert variant="destructive" className="max-w-4xl flex-grow container mx-auto p-4 mt-4">
        {/*<Terminal className="h-4 w-4" />*/}
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Information!</AlertTitle>
        <AlertDescription>
          ESSweeps will be unavailable from the 13th January to the 13th February
        </AlertDescription>
      </Alert>


      {/* Main Content */}
      <Carousel />
      
      <main className="flex-grow container mx-auto p-4 mt-4">

        <Separator />

        <HomeText />

        <Separator />

        <QuickLinks />

        <Separator />

        <PricingInformation />

        <Separator />
        
      </main>

      <LowerHero />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
