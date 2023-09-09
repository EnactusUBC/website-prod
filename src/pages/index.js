import * as React from "react";
import { useState } from 'react';
import EmblaCarousel from '../components/herocarousel';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import SpinCarousel from "@/components/spincarousel";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const HEROSLIDES = [0, 1, 2];
  const SPINSLIDES = [0, 1, 2, 3];
  const OPTIONS = { axis: 'y', loop: true, watchDrag: false }
  // NAVBAR FUNCTION have transparent navbar on load, but change when scroll
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 100) { // replace 100 w desired/nav bar height
      setNav(true);
    } else {
      setNav(false);
    }
  }

  React.useEffect( () => {
    window.addEventListener('scroll', changeBackground);
  }, [])
  // NAVBAR FUNCTION


  return (
    <>
    <Head>
      <title>Enactus UBC</title>
    </Head>
    {/* for transparent nav bar
    <nav className={nav ? bg-enactusblue : bg-transparent}></nav> */}
    <Header></Header>
    <main className='flex flex-col w-full overflow-x-hidden bg-offwhite'>
      <section>
      <EmblaCarousel slides={HEROSLIDES}/>
      </section>

      <section className="bg-offwhite">
        <img src='/indeximages/linetop.png' className="pt-8 w-full"></img>
        <h3 className="text-3xl md:text-5xl font-bold text-midgrey ml-6 lg:ml-24 mt-8 "><span className="text-enactusyellow">En</span >trepreneurial • <span className="text-enactusyellow">Act</span>ion • <span className="text-enactusyellow">Us</span></h3>
        <div className="mt-16 mb-28 flex flex-col items-center lg:justify-evenly lg:items-stretch lg:flex-row">
          <Link href='/about'><div className="cursor-pointer shadow-all rounded-xl flex flex-col justify-start items-center py-8 w-72 sm:w-80 xl:w-0.25 xl:px-16 hover:scale-110 transition ease-in-out min-h-full mx-4 my-10">
            <img src="/indeximages/mountainico.png" className="w-24 mb-4"></img>
            <h4 className="text-enactusblue font-bold text-lg lg:text-4xl mb-6">Mission</h4>
            <p className='text-sm lg:text-xl text-center px-6'>To make measurable improvements in the community through the use of entrepreneurship while helping UBC students become socially responsible business leaders.</p>
          </div></Link>
          <Link href='/about'><div className="cursor-pointer shadow-all rounded-xl flex flex-col justify-start items-center py-8 w-72 sm:w-80 xl:w-0.25 xl:px-16 hover:scale-110 transition ease-in-out min-h-full lg:min-h-md mx-4 my-10">
            <img src="/indeximages/lightico.png" className="w-12 mb-4"></img>
            <h4 className="text-enactusblue font-bold text-lg lg:text-4xl mb-6">Vision</h4>
            <p className='text-sm lg:text-xl text-center px-6'>To improve the community through increased opportunity, economic equality and social responsibility.</p>
          </div></Link>
          <Link href='/about'><div className="cursor-pointer shadow-all rounded-xl flex flex-col justify-start items-center py-8 w-72 sm:w-80 xl:w-0.25 xl:px-16 hover:scale-110 transition ease-in-out min-h-full lg:min-h-md mx-4 my-10">
            <img src="/indeximages/paperico.png" className="w-20 mb-4"></img>
            <h4 className="text-enactusblue font-bold text-lg lg:text-4xl mb-6">Values</h4>
            <p className='text-sm lg:text-xl text-center px-6'>Curiosity. <br></br>Courage. <br></br>Change.</p>
          </div></Link>
          
        </div>
        <img src='/indeximages/linebottom.png' className="pt-8 mb-8 w-full"></img>
        
      </section>
      <section className="bg-offwhite flex justify-center">
        <div className="bg-impact bg-cover w-11/12 mt-20 mb-28 flex flex-col items-center md:items-end rounded-2xl">
          <div className="text-white font-bold flex items-center md:items-end mt-8 mr-1 lg:mr-8 flex-col md:flex-row"><h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-8xl pr-3">10,000+ INDIVIDUALS</h1><h5 className="pb-2 text-sm xl:text-lg">reached by our projects</h5></div>
          <div className="text-white font-bold flex items-center md:items-end mt-8 mr-1 lg:mr-8 flex-col md:flex-row"><h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-8xl pr-4">15,000+ HOURS</h1><h5 className="pb-2 text-sm xl:text-lg">spent volunteering this year</h5></div>
          <div className="text-white font-bold flex items-center md:items-end my-8 mr-1 lg:mr-8 flex-col md:flex-row"><h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-8xl pr-4">150+ MEMBERS</h1><h5 className="pb-2 text-sm xl:text-lg">in our chapter</h5></div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-offwhite to-enactusblue">
        <h1 className="text-enactusblue text-5xl lg:text-7xl 2xl:text-8xl font-bold text-right relative 2xl:top-36 lg:top-16 right-4 2xl:right-24">PROJECTS</h1>
        <SpinCarousel slides={SPINSLIDES} options={OPTIONS}></SpinCarousel>
        {/* <div className="flex flex-col justify-between xl:h-288 relative left-3/4 bottom-96 xl:bottom-65vh invisible lg:visible">
          <p className="xl:text-2xl font-semibold text-dark h-9">Ennovate</p>
          <p className="xl:text-2xl font-semibold text-dark h-9">Enspire</p>
          <p className="xl:text-2xl font-semibold text-dark h-9">Seeder</p>
          <p className="xl:text-2xl font-semibold text-dark h-9">Building Bridges</p>
        </div> */}
      {/* Embeded Instagram */}
      {/* <div className="flex justify-center">
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-f05af5d8-d183-40ce-94ad-d984f9c468f3"></div>
      </div> */}

      </section>
    </main>
    <Footer/>
    </>
  )
}

