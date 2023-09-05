import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

{/* All need to change */}
import bannerPath from "../images/building-bridges/Frame 6.png"
import logoPath from "../images/building-bridges/BB-LOGO-W.png"
import squarePhoto from "../images/building-bridges/bb-square.png"
import longPhoto from "../images/building-bridges/bb-long.jpg"
import PD1 from "../images/building-bridges/eylul.png"
import PD2 from "../images/building-bridges/ghita.png"

{/* Don't need to change */}
import linkedin from "../images/LinkedinLogo.png"
import ig from "../images/IGLogo.png"
import mail from "../images/EmailLogo.png"

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>

      {/* BANNER at the top */}
      <div class="h-96 relative overflow-hidden" id="banner">
        <Image
          src={bannerPath}
          alt="Banner for Enactus project"

          layout="fill"
          objectFit="cover"
          objectPosition="center"
          class="object-cover"
        />
        {/* Container for the white text */}
        <div class="absolute text-5xl bottom-5 left-5 sm:bottom-10 sm:left-10 text-white md:text-7xl font-bold">
          <p class="z-20">BUILDING BRIDGES</p> {/* CHANGE */}
        </div>
        <div class="absolute top-1/2 left-1/4 opacity-10 transform -translate-y-5 sm:-translate-y-1/3 -translate-x-1/2">
          <Image
            src={logoPath}
            alt="White Logo"
            className="mx-auto"
            width={800}
            height={800}
          />

        </div>
        {/* Container for the white logo */}
        <div class="absolute top-6 right-6">
          <Image src={logoPath} alt="White Logo" width={50} height={50} />
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div id="about-us" class="flex flex-col lg:flex-row items-center">
        <div id="about-us-text" className="p-16 lg:p-8 m-8 lg:p-32 lg:p-32 lg:max-w-[55%]">
          <p class="my-7 text-xl lg:text-2xl font-bold">About Us</p>
          <p class="my-7 text-xl lg:text-2xl font-light"> {/* CHANGE */}
          At Building Bridges, we aim to bridge the knowledge gap about Indigenous history through education, in order to mobilize non-Indigenous youth to take action through social entrepreneurship. We hope to foster the creation of proactive and educated youth allies as well as to create platforms to bridge the gap between Indigenous and non-Indigenous individuals. Youth will also develop soft and social entrepreneurial skills through education, research and social engagement.          </p>
        </div>
        <div style={{ position: "relative", marginLeft: "" }}>
          <Image src={squarePhoto} class="md:w-80 md:h-80 m-8 sm:m-16" alt="Square photo" width={250} height={250} style={{ borderRadius: "25px", position: "relative", zIndex: 1 }} />
        </div>
      </div>

      {/* FLEXIBLE TEXT */} {/* CHANGE */}
      <div id="flexible" class="text-center" style={{padding: "6% 3% 4% 3%"}}>
        <p class="lg:my-7 my-3 p-4 text-xl lg:text-4xl font-bold">Building Bridges is a winner of the HSBC Entrepreneurship Project Accelerator. We are growing to be one of the intermediaries of the region while continuing to create a tangible impact amongst students !

</p>
        <p class="lg:my-7 my-3 p-4 text-l lg:text-xl font-light" style={{padding: "3px 70px"}}>Our approach encourages different ways of teaching and interacting with students, as it incorporates transformative education, community engaged learning and bottom up approaches as we hope to take part in decolonizing forms of traditional classroom education.
 
 We offer a 12 weeks program that focuses on students grade 10-11, and is divided in 4 phases : Awareness and Education, Research and Skill development, Project development, and a Final conference.
 </p>
      </div>

      {/* FLEXIBLE LONG PHOTO */} {/* CHANGE */}
      <div id="big-photo ">
        <Image src={longPhoto} alt="Square photo" class="max-w-xs md:max-w-2xl"width={"auto"} height={"auto"} style={{ borderRadius: "25px", margin: "auto"}} />
      </div>

      {/* FLEXIBLE SMALL PHOTO */} {/* CHANGE */}
      {/* <div id="about-us" class="flex flex-col md:flex-row items-center justify-center">
        <div style={{ margin: "25px" }}>
        <Image src={smallPhoto} alt="Square photo" class="w-64 h-64 lg:w-auto lg:h-auto"width={"auto"} height={"auto"} style={{ borderRadius: "25px", maxWidth: "350px" }} />
        </div>
        <div style={{ margin: "25px" }}>
          <Image src={smallPhoto} alt="Square photo" class="w-64 h-64 lg:w-auto lg:h-auto"width={"auto"} height={"auto"} style={{ borderRadius: "25px", maxWidth: "350px" }} />
        </div>
      </div> */}

      {/* WEBSITE LINK */} {/* CHANGE */}
      {/* <div class="flex justify-center items-center m-12">
        <button class="button bg-transparent text-white border-2 border-white cursor-pointer transition duration-300 ease-in-out rounded-3xl hover:bg-white hover:text-sky-400 font-light" style={{ padding: "25px 80px", fontSize: "20px" }}>
          Website
        </button>
      </div> */}

      {/* PD PHOTOS */} {/* CHANGE */}
      <div id="PD-photos" class="flex justify-center m-24">
      <div class="flex flex-col items-center m-4">
          <div class="w-32 h-32 lg:w-52 lg:h-52">
            <Image src={PD1} alt="Square photo" width={"auto"} height={"auto"} style={{borderRadius: "50%"}}/>
          </div>
          <p class="text-l mt-4 lg:text-xl font-bold text-white">Project Director</p>
          <a href="mailto:eylulkara2507@gmail.com"><p class="font-light text-sm lg:text-base text-white">Eylul Kara</p></a>
        </div>
        <div class="flex flex-col items-center m-4">
          <div class="w-32 h-32 lg:w-52 lg:h-52">
            <Image src={PD2} alt="Square photo" width={"auto"} height={"auto"} style={{borderRadius: "50%"}}/>
          </div>
          <p class="text-l mt-4 lg:text-xl font-bold text-white">Project Director</p>
          <a href="mailto:ghita.aqallal@gmail.com"><p class="font-light text-sm lg:text-base text-white">Ghita Aqallal</p></a>
        </div>
      </div>

      {/* SOCIAL MEDIA LINKS */} {/* CHANGE */}
      <div id="socials" class="flex justify-center space-x-4 lg:space-x-12 pt-8 pb-28">
        <a href="https://www.instagram.com/buildingbridgesubc/" target="_blank" rel="noopener noreferrer">
          <Image class="hover:opacity-60 transition duration-300" src={ig} alt="instagram Enactus project" width={25} height={25} />
        </a>
        <a href="mailto:buildingbridgesenactus@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image class="hover:opacity-60 transition duration-300" src={mail} alt="email Enactus project" width={25} height={25} />
        </a>
        <a href="https://www.linkedin.com/in/buildingbridgesenactus/" target="_blank" rel="noopener noreferrer">
          <Image class="hover:opacity-60 transition duration-300" src={linkedin} alt="linkedin Enactus Project" width={25} height={25} />
        </a>
      </div>


      {/* GRADIENT */} {/* CHANGE */}
      <div style={{ position: "relative"}}>
  <div
    style={{
      backgroundImage: "linear-gradient(#ffffff, #db810b)",
      paddingBottom: "1500px",
      position: "absolute",
      zIndex: "-1",
      bottom: "0px",
      left: "0px",
      right: "0px",
    }}
  ></div>
</div>
    </main>
  );
}
