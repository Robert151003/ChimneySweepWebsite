import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle  } from "lucide-react"
import QuickLinks from "@/components/QuickLinks";
import HomeText from "@/components/HomeText";
import PricingInformation from "@/components/PricingInformation";



const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section id="home" className="bg-gray-100">
        {/* Optional Hero Content */}
      </section>

      <Alert variant="destructive" className="max-w-4xl flex-grow container mx-auto p-4 mt-4">
        {/*<Terminal className="h-4 w-4" />*/}
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Importatnt Information!</AlertTitle>
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
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
