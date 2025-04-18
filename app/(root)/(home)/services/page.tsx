import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import ContactCards from "@/components/ContactPage/ContactCards";



const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <section id="about" className="my-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
            <Separator />
          </section>
          <section>
            <div className="text-center text-grey-3">
              <p className="m-4">
                Essex &amp; Suffolk sweeps are based in the South Essex area but cover all surrounding 
                areas from woodbridge in Suffolk right through to Kent areas.  We do not contract 
                any work out and all works undertaken will be carried out by certified and insured,
                Member of the Guild of Master Chimney Sweeps.  By choosing Essex &amp; Suffolk Sweeps to 
                service your chimney, you can be sure that you will receive a professional, dependable, 
                and friendly service.
              </p>
            </div>
            <Separator />
          </section>
          
          <section id="ChimneySweepServices" className="">
            <h3 className="text-xl font-bold mb-4 text-center pt-4">Chimney Sweep Services</h3>
            <div className="text-center text-grey-3">
              <p className="m-4">
                Chimney Sweeping should be carried out regularly to remove 
                the build-up of soot, creosote and other debris which are 
                deposited from the fuel you are burning on your stove or in 
                your fires. It is this build-up which could potentially cause 
                a chimney fire.
              </p>
              <p className="m-4">
                How often your chimney should be swept is dependent on what 
                fuel you are burning. You can give us a call and we will come 
                and do an on-site assessment to tell you if you need your chimney 
                sweeping, and how often is recommended to keep your solid fuel 
                burning system working as well as it can.
              </p>
              <div className="flex justify-center">
                
                <div className="max-w-xl text-center">
                  <p className="text-xl font-bold text-black pb-2">
                    Services Include:
                  </p>
                  <ul className="text-left list-disc pl-5 pb-4">
                    <li>Chimney &amp; flue blockages clearing</li>
                    <li>Chimney and flues, sweep and vacuumed</li>
                    <li>CCTV camera inspection</li>
                    <li>Certificate, recognised by all leading insurance companies</li>
                    <li>Damaged chimney pot/stack replacement</li>
                    <li>Flue smoke tests</li>
                    <li>Wood and multi-fuel stove cleaning &amp; repairs</li>
                    <li>Solid fuel cookers repairs</li>
                    <li>Burner installation (Hetas Certified)</li>
                    <li>Carbon Monoxide alarms supplied and fitted</li>
                    <li>Historic / Thatched Property Approved Sweep</li>
                  </ul>
                </div>
              </div>

            </div>
            <Separator />
          </section>

          <section id="ChimneyServingandRepairs" className="">
            <h3 className="text-xl font-bold mb-4 text-center pt-4">Chimney Serving and Repairs</h3>
            <div className="text-center text-grey-3">
              <p className="m-4">
                We can tailor our chimney servicing and chimney repair packages to suite your 
                individual requirements. All our work is completed to the highest standard and 
                we will always ensure your home is left neat and tidy.
              </p>
              <div className="flex justify-center">
                <div className="max-w-xl text-center">
                  <ul className="text-left list-disc pl-5 pb-4">
                    <li>Open fires, AGAs, Wood Burning stoves swept</li>
                    <li>Internal safety inspections using CCTV if required</li>
                    <li>Bird nests and blockages resolved</li>
                    <li>Smoke Draw Test with every sweep</li>
                    <li>Tips and recommendations on maintenance and safety</li>
                    <li>Survey of flue, stack and chimney pot</li>
                    <li>Parts supplied and fitted</li>
                    <li>Firebricks and fire-backs</li>
                    <li>Chimney stacks inspection</li>
                    <li>Stack repointing, reflaunching and rebuilding</li>
                    <li>Flexible and rigid chimney liners installed, replaced or removed</li>
                    <li>Pots, cowls, caps, bird-guards and gull strips installed or replaced</li>
                    <li>Advice on wood quality</li>
                  </ul>
                </div>
              </div>
            </div>
            <Separator />
          </section>

          <section id="WoodBurnerServicing&Repairs" className="">
            <h3 className="text-xl font-bold mb-4 text-center pt-4 pb-2">Wood Burner Servicing &amp; Repairs</h3>
            <div className="text-center text-grey-3">
              <div className="flex justify-center">
              <ul className="text-left list-disc pl-5 pb-4">
                <li>Pre-fabricated rigid and flexible twin wall flues installed</li>
                <li>All makes and models of stoves supplied, fitted &amp; commissioned</li>
                <li>Regular or one-off stove servicing</li>
                <li>Gasket rope repairs</li>
                <li>Stove glass replacement</li>
                <li>Solid fuel stoves cleaned</li>
                <li>Smoke, Integrity and Soundness Tests</li>
                <li>Landlord Safety Checks</li>
                <li>Replacement parts supplied and fitted</li>
                <li>Stove repairs</li>
              </ul>

              </div>
            </div>
            <Separator />
          </section>

          <section id="WeddingSweeps" className="">
            <h3 className="text-xl font-bold mb-4 text-center pt-4 pb-2">Wedding Sweeps</h3>
            <div className="text-center text-grey-3 mb-4">
              <p className="flex justify-center">
                Legend has it that having a chimney sweep at your wedding brings 
                good luck, a tradition dating back to pagan times as a symbol of 
                fertility. This belief was reinforced over 200 years ago when a 
                London sweep saved King George III by stopping a runaway team of horses.
              </p>
              <p className="flex justify-center">
                The sweep was later invited to the wedding of the King&apos;s daughter, 
                leading to a royal decree declaring all chimney sweeps as bearers 
                of good fortune and deserving of respect.
              </p>
              <p className="flex justify-center">
                To this day, a chimney sweep at a wedding is seen as a prestigious 
                sign of luck, with the sweep traditionally shaking hands with the 
                groom and giving the bride a lucky kiss. In fact, Prince Philip left 
                Kensington Palace on his wedding day to clasp hands with a passing sweep.
              </p>

            </div>
            <Separator />
          </section>

          <section id="BirdsNestRemoving" className="">
            <h3 className="text-xl font-bold mb-4 text-center pt-4 pb-2">Birds Nest Removing</h3>
            <div className="text-center text-grey-3 mb-4">
              <p>
                Ensuring your home’s safety and efficiency, we specialize in the safe and thorough removal of bird nests from open fires, inglenooks, and stoves. These nests can block airflow, pose a fire hazard, and lead to costly repairs if not addressed. Our experienced team removes nests with care and precision, ensuring your system is clear and safe for use. 
              </p>
              <p>
                With a focus on safety, we also inspect for any potential damage and provide you with recommendations to prevent future nesting. Don’t let a blocked chimney or flue cause you trouble—let us help keep your home safe and your fires burning smoothly.
              </p>
            </div>
            <Separator />
          </section>

          <section id="CowlFittings" className="">
            <h3 className="text-xl font-bold mb-4 text-center pt-4 pb-2">Cowl Fittings</h3>
            <div className="text-center text-grey-3 mb-4">
              <p className="">
              We provide professional supply and fitting of various types of cowls to enhance 
              the safety and efficiency of your chimney:
              </p>
              <div className="flex justify-center">
                <ul className="text-left list-disc m-4">
                  <li>Solid Fuel Cowls:
                    Designed to prevent birds, rain, and debris from entering your 
                    chimney, ensuring your system stays clean and free from blockages.</li>
                  <li>Gas Cowls: 
                    Specifically tailored for gas appliances, these cowls help 
                    protect your flue from the elements, ensuring optimal performance and safety.</li>
                  <li>
                    Oil Cowls: 
                    Perfect for oil-fired appliances, these cowls prevent water 
                    ingress and keep your chimney working efficiently, extending its lifespan.</li>
                </ul>
              </div>
              <p className="">
              Each cowl is installed with care, offering peace of mind and helping to maintain 
              the safety and longevity of your heating system.
              </p>
            </div> 
            <Separator />
          </section>
          
          <section id="DisusedChimneyCaps" className="">
            <h3 className="text-xl font-bold mb-4 text-center pt-4 pb-2">Disused Chimney Caps</h3>
            <div className="text-center text-grey-3 mb-4">
              <p>For disused chimneys, proper sealing is essential to prevent potential issues. 
                When not in use, a chimney that isn&apos;t sealed correctly can lead to several problems:</p>
              <div className="flex justify-center">
              <ul className="text-left list-disc m-4">
                <li>Prevents birds, rain, and weather elements from entering the chimney, which can 
                  otherwise cause blockages or damage.</li>
                <li>Avoids moisture buildup in the chimney breast, which can lead to dampness and 
                  further damage to your property.</li>
                <li>Prevents birds from nesting or falling into the chimney, which could pose a 
                  safety risk and lead to costly repairs.</li>
                <li>Stops heat loss through an unsealed chimney, improving your home&apos;s energy efficiency.</li>
              </ul>
              </div>
              <p>We provide expert sealing solutions to ensure your disused chimney is properly closed 
                off, protecting your home from moisture, wildlife, and unnecessary heat loss.</p>
            </div>
            <Separator />
          </section>

        </section>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-center m-4">Get in Touch</h3>
          <ContactCards />
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
