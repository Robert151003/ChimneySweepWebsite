import React from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <section className='flex flex-col flex-1 gap-10 text-black'>

        {/* Image Section */}
        <div className='flex-between gap-5 bg-orange-400 py-6 px-10'>
          <p className=' w-full h-full text-white font-extrabold text-center '>Essex & Suffolk Sweeps Ltd are one of the top Chimney Sweeps in London and Essex.</p>
          <Button asChild className='bg-dark-2'>
            <Link href="/contacts">HIRE US NOW</Link>
          </Button>
        </div>

        {/* Information Section */}
        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
          
          <div className='flex h-full flex-col max-md:px-5 max-md:py-8 lg:p-11 text-center items-center gap-4'>
            <h1 className='text-xl font-extrabold lg:text-3xl'>About Us</h1>
            <p className='text-lg font-small lg:font-medium w-[50%]'>
              Essex & Suffolk Sweeps are experienced chimney sweeps based in London and Essex but cover all surrounding areas from Woodbridge in Suffolk right through to Kent. We do not contract any work out and all chimney sweeping undertaken will be carried out by a certified and fully insured member of the Guild of Master Chimney Sweeps. By choosing Essex & Suffolk Sweeps as your chimney sweeps, you can be sure that you will receive a professional, dependable and friendly service.
            </p>
          </div>

          <div className='flex h-full flex-col max-md:px-5 max-md:py-8 lg:p-11 text-center items-center gap-4'>
            <h1 className='text-xl font-extrabold lg:text-3xl'>Why Keep Your Chimney Clean?</h1>
            <p className='text-lg font-small lg:font-medium w-[50%]'>
              Regular chimney sweeping is essential for a safe and efficient fire. Without proper ventilation through the chimney, fires can leak deadly carbon monoxide into your home, putting lives at serious risk. Not only that, but clogged and dirty chimneys are liable to catch fire. Over time creosote-a highly flammable substance-builds up in your chimney. A chimney fire can spread to your roof and home so is best to avoid. You should aim to have your chimney swept and inspected once a year, usually in spring or summer. Give us a call today to arrange a fast, friendly and efficient chimney sweep or service!
            </p>
          </div>

          <div className='flex h-full flex-col max-md:px-5 max-md:py-8 lg:p-11 text-center items-center gap-4'>
            <h1 className='text-xl font-extrabold lg:text-3xl'>Testimonials</h1>
            <p className='text-lg font-small lg:font-medium w-[50%]'>
              “We have a very old stove on our dutch sailing barge, which was in need of more than a little TLC. Dave turned up promptly, did a sterling restoration job (all in the same day) and we were able to light the fire the same evening! Many thanks for a tidy, professional job and see you again at service time.” Hilary Hunter
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;