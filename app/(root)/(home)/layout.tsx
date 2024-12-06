import Footer from '@/components/Footer';
import Images from '@/components/images';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <section className="flex-1 px-6 pt-28">
            {children}
          </section>
          {/* Center Images without offset */}
          <div className="flex justify-center items-center py-4 w-full">
            <Images />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HomeLayout;