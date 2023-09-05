import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

import bbImg from "../images/building-bridges/BB-LOGO-W.png"
import ennovateImg from "../images/ENNOVATE-W.png"
import enspireImg from "../images/enspire/enspireLongLogo.png"
import patchImg from "../images/patch/patch-logo.png"
import seederImg from "../../public/projectlogos/seederwhite.png"

// import seederImg from "../images/seeder/seeder-logo.png"

export default function SponsorsPage() {
  return (
    <main className="w-screen h-screen relative overflow-x-hidden">
      <Header />
      {/* Why Partner with Enactus? Ad */}
      <div className="w-full flex flex-col items-center mt-4">

        <div className="w-11/12 md:h-[300px] h-[400px] flex flex-col md:flex-row rounded-lg md:mt-4 lg:justify-center bg-enactusblue">

          <div className="flex flex-col md:w-5/12 w-full items-center md:items-start md:ml-6 justify-center ">
            <h3 className='text-white mt-3 md:w-9/12 before:text-xl md:text-3xl md:break-before-all font-bold text-center md:text-left md:mb-3'>Why Partner with <span className='text-enactusyellow'>Enactus?</span></h3>
            <p className="text-center w-10/12 text-white font-regular mt-3 md:text-left md:mb-3">By joining forces with Enactus UBC, you not only empower local students to make a positive impact on the community but also tap into a vibrant network of talented young individuals.</p>
          </div>

          <div className="flex flex-col h-full md:w-7/12 lg:w-5/12 justify-center items-center">
            <div className="flex gap-10">

            <Image
              src={seederImg}
              alt="Seeder Logo"
              className="mx-auto -mr-4 md:-mr-2 md:ml-6 w-[100px] h-[100px] md:w-[240px] md:h-[140px] object-contain"
            />

            <Image
              src={bbImg}
              alt="Building Bridges Logo"
              className="mx-auto -mr-4 w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain"
            />
            </div>

            <div className="flex md:-mt-7 items-center justify-center">
              <Image
              src={enspireImg}
              alt="Enspire Logo"
              className="mx-auto -mt-2  w-[140px] h-[90px] md:w-[200px] md:h-[100px] lg:w-[300px] lg:h-[100px]  object-contain"
            />

            <Image
              src={ennovateImg}
              alt="Ennovate Logo"
              className="mx-auto w-[90px] h-[90px] md:w-[160px] md:h-[160px] object-contain"
            />


            </div>
          </div>
        
        </div>
      </div>
      {/* Sponsor Benefits */}
      <div className="w-full flex justify-center mt-8 mb-8">
        <div className="w-11/12 flex h-[300px]">
          <div className="flex-col w-1/3 h-full mr-4">

            <div className="h-2/5 mb-2">
              <h2 className='ml-2 pt-2 font-semibold text-lg md:text-2xl md:mx-4'>Sponsor Benefits</h2>
              <p className="ml-2 mt-2 pb-2 text-xs md:text-lg md:mx-4">Our reach includes...</p>
            </div>
            <div className=' h-3/5 rounded-xl w-auto bg-[#FFD966]'>
              <h2 className='ml-2 pt-2 font-semibold text-lg md:text-2xl md:mx-4'>500+</h2>
              <p className="ml-2  mt-2 pb-2 text-xs md:text-lg md:mx-4">students at Ennovate and Enspire flagship events</p>
            </div>
          </div>

          <div className="flex-col w-1/3 h-full mr-4">

            <div className="h-3/5 mb-2 rounded-xl w-auto bg-[#FFD966]">
              <h2 className='ml-2 pt-2 font-semibold text-lg md:text-2xl md:mx-4'>150 </h2>
              <p className="ml-2 mt-2 pb-2  text-xs md:text-lg md:mx-4">Active student members</p>
            </div>

            <div className='h-2/5 rounded-xl w-auto bg-[#FFD966]'>
              <h2 className='ml-2 pt-2 font-semibold text-lg md:text-2xl'>4,000+</h2>
              <p className="ml-2 mt-2 pb-2  text-xs md:text-lg">followers on various social media</p>
            </div>
          </div>

          <div className="flex-col w-1/3 h-full">
            <div className="h-1/2 pt-2 mb-2 rounded-xl w-auto bg-[#FFD966]">
              <h2 className='ml-2 text-lg font-semibold md:text-2xl md:mx-4'>1,000+</h2>
              <p className="ml-2 mt-2 pb-2  text-xs md:text-lg md:mx-4">Unique visitors at on-campus booth sessions</p>
            </div>

            <div className='h-1/2 rounded-xl w-auto bg-[#FFD966]'>
              <h2 className='ml-2 pt-2 font-semibold text-lg md:text-2xl md:mx-4'>1,200+</h2>
              <p className="ml-2 mt-2 pb-2 text-xs md:text-lg md:mx-4">Ennovate & Enspire student participants</p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className=" text-lg md:text-3xl font-semibold font-[#1E1E1E] mt-8">Interested in becoming a sponsor?</h1>
        <p className="text-sm md:text-lg w-11/12 md:w-7/12 text-center mt-6">Ready to sponsor Enactus UBC and embark on an exciting journey? Simply e-mail us below, and we'll send you a comprehensive sponsorship package to your inbox. Let's make magic happen together!</p>
        <div className="flex">
          <div className='flex flex-col items-center my-12 w-40 md:w-64 mx-0'>
              <img src='/executives/Ryan Lee_VP Finance & External.jpg' className='rounded-full w-24 md:w-40'></img>
              <h6 className='font-bold'>Ryan Lee</h6>
              <p className='text-sm md:text-md'>VP Finance & External</p>
          </div>
          <div className='flex flex-col items-center my-12 w-40 md:w-64 mx-0'>
              <img src='/executives/Hanna Woo_VP Finance & External.jpg' className='rounded-full w-24 md:w-40'></img>
              <h6 className='font-bold'>Hanna Woo</h6>
              <p className='text-sm md:text-md'>VP Finance & External</p>
          </div>
        </div>
        {/* TODO : Get proper email */}
        <a href="mailto:enactusUBC" className="inline-block pt-2 w-[200px] h-[50px] rounded-xl bg-enactusblue text-white text-xl text-center align-middle leading-50px">Contact Us</a>
    </div>

      <div class="border-t border-gray-300 my-16"></div>
      
      <div className="mt-4 mb-4 flex flex-col items-center">
        <h1 className=" text-lg lg:text-2xl font-semibold font-[#1E1E1E]">Enactus UBC is proudly affiliated with</h1>

        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 mt-8 overflow-x-hidden w-9/12">
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/rbc.png" alt="RBC Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/cpa.png" alt="CPA Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/3M.png" alt="3M Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/ArtByKate.png" alt="ArtByKate Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/ubc.png" alt="UBC Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/ASMFood.png" alt="ASMFood Logo" width={200} height={80} />
        <Image className="object-contain h-16 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/CactusClub.jpg" alt="CactusClub Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/ChunFunHow.png" alt="ChunFunHow Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/DavidsTea.png" alt="DavidsTea Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/DavidSuzuki.png" alt="DavidSuzuki Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/Evo.png" alt="Evo Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/groundsForCoffee.png" alt="groundsForCoffee Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/LeagueOfInnovators.png" alt="LeagueOfInnovators Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/Modo.png" alt="Modo Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/NaturesPath.png" alt="NaturesPath Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/OldSpaghettiFactory.png" alt="OldSpaghettiFactory Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/PennyDrops.png" alt="PennyDrops Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/ScotiaBank.png" alt="ScotiaBank Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/SecondHarvest.png" alt="SecondHarvest Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/Sprouts.png" alt="Sprouts Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/Starbucks.png" alt="Starbucks Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/Susgrainable.png" alt="Susgrainable Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/TDBank.png" alt="TDBanks Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/UBCFoodBank.png" alt="UBCFoodBank Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/VeganSupply.png" alt="VeganSupply Logo" width={200} height={80} />
        <Image className="object-contain h-12 lg:h-32 w-16 lg:w-32 md:h-20 md:w-20" src="/sponsors/WalterGage.png" alt="WalterGage Logo" width={200} height={80} />
        </div>
      </div>
      <Footer />
    </main>
  );
}