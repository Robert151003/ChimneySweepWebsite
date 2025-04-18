import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import FuelTypes from "@/components/AboutPage/FuelTypes";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4 text-center">About Essex & Suffolk Sweeps</h2>
          <div className="text-center text-grey-3">
            <p className="m-4">
              Essex & Suffolk Sweeps are based in the South Essex area but cover all surrounding 
              areas from Woodbridge in Suffolk right through to Kent areas. We do not contract 
              any work out and all works undertaken will be carried out by a certified and fully 
              insured member of the Guild of Master Chimney Sweeps. By choosing Essex & Suffolk 
              Sweeps to service your chimney, or for any of the additional Gardening and DIY services 
              we are able to offer, you can be sure that you will receive a professional, dependable 
              and friendly service.
            </p>
            <Separator />
            <p className="m-4">
              Most people are unaware each year in England, approximately 40-50 deaths occur from carbon 
              monoxide poisoning and many more people are admitted to hospital suffering from carbon 
              monoxide poising. In addition to this, the Fire Rescue Services attended around 7,000 
              chimney fires each year. Many of these fires & deaths could potentially be avoided by 
              having your chimneys and flues swept regularly by a qualified chimney sweep.
            </p>
            <Separator />
            <h2 className="text-2xl font-bold text-black m-4 text-center">Areas Covered</h2>
            <div className="m-4">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="text-left list-disc pl-5">
                    <li>Grays</li>
                    <li>Stanford</li>
                    <li>Tilbury</li>
                    <li>Orsett</li>
                    <li>Ockendon</li>
                    <li>Basildon</li>
                    <li>Benfleet</li>
                    <li>Canvey Island</li>
                    <li>Romford</li>
                    <li>Gidea Park</li>
                    <li>Collier Row</li>
                    <li>Upminster</li>
                    <li>Hornchurch</li>
                  </ul>

                  <ul className="text-left list-disc pl-5">
                    <li>Chelmsford</li>
                    <li>Maldon</li>
                    <li>Tiptree</li>
                    <li>Marks Tey</li>
                    <li>Witham</li>
                    <li>Colchester</li>
                    <li>Tillingham</li>
                    <li>Southminster</li>
                    <li>West Mersea</li>
                    <li>Southend</li>
                    <li>Clacton</li>
                    <li>Harwich</li>
                  </ul>
                </div>
              </div>

            </div>
            <Separator />
            <p className="m-4">
              Chimneys should be swept regularly to remove the build-up of soot, creosote and other debris 
              which are deposited from the fuel you are burning on your stove or in your fires. It is this 
              build-up which could potentially cause a chimney fire. How often a chimney sweep should sweep 
              the chimney is dependent on what fuel you are burning.
            </p>
            <FuelTypes />
            <Separator />
            <p className="m-4">
              The majority of insurance companies require chimneys and flues to be swept as part of the 
              insurance terms and conditions. Many insurance companies will also not pay for a claim where 
              intervals between sweeps have been observed and documented by certification. Be assured that 
              once your chimney or flue has been swept you should be issued with a Chimney Safety Certificate 
              which is recognised by all leading insurance companies. As a Guild member sweep you will receive this 
              certificate from Essex & Suffolk Sweeps on completion of works along with a smoke draw test which 
              we perform on all chimneys at no additional charge.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
