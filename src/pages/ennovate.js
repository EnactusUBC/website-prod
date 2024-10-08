import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

{/* All need to change */}
import bannerPath from "../images/ennovate/ennovate-banner.png"
import logoPath from "../images/ENNOVATE-W.png"
import squarePhoto from "../images/ennovate/ennovate-square.png"
import longPhoto from "../images/ennovate/ennovate-L.JPG"
import PD1 from "../images/ennovate/Arisha.jpg"
import PD2 from "../images/ennovate/Khushi.png"

{/* Don't need to change */}
import ig from "../images/IGLogo.png"
import mail from "../images/EmailLogo.png"

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header />

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
          <p class="z-20">ENNOVATE</p> {/* CHANGE */}
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
        <div id="about-us-text" className="p-16 lg:p-8 m-8 lg:max-w-[55%]">
          <p class="my-7 text-xl lg:text-2xl font-bold">About Us</p>
          <p class="my-7 text-xl lg:text-2xl font-light"> {/* CHANGE */}
          Ennovate is Enactus UBC’s largest project that aims to empower over 500 youth annually across the Lower Mainland, giving them a hands-on experience in social entrepreneurship. Each year, countless schools come together to receive a series of workshops from our Project Associates teaching them fundamental business skills such as marketing, accounting, and presentation skills. 
</p>
        </div>
        <div style={{ position: "relative", marginLeft: "" }}>
          <Image src={squarePhoto} class="md:w-80 md:h-80 m-8 sm:m-16" alt="Square photo" width={250} height={250} style={{ borderRadius: "25px", position: "relative", zIndex: 1 }} />
        </div>
      </div>

      {/* FLEXIBLE TEXT */} {/* CHANGE */}
      <div id="flexible" class="text-center" style={{padding: "6% 3% 4% 3%"}}>
        <p class="lg:my-7 my-3 p-4 text-xl lg:text-4xl font-bold">
Ennovate directly impacted 1000 students, generated over $8000 in student-led businesses, and impacted over 2000 members in our community.
</p>
        <p class="lg:my-7 my-3 p-4 text-l lg:text-xl font-light" style={{padding: "3px 70px"}}>Ennovate is proud to have created a long-lasting impact in our local communities, sparking entrepreneurial action in students, and generating awareness for our most pressing issues. Our students are given the opportunity to create tangible change in an issue they care most about.</p>
      </div>

      {/* FLEXIBLE LONG PHOTO */} {/* CHANGE */}
      <div id="big-photo">
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
      <div class="flex justify-center items-center m-12">
        <a href="https://www.ennovateubc.org" target="_blank"><button class="button bg-transparent text-white border-2 border-white cursor-pointer transition duration-300 ease-in-out rounded-3xl hover:bg-white hover:text-sky-400 font-light" style={{ padding: "25px 80px", fontSize: "20px" }}>
          Website
        </button>
        </a>
      </div>

      {/* PD PHOTOS */} {/* CHANGE */}
      <div id="PD-photos" class="flex justify-center">
      <div class="flex flex-col items-center m-4">
          <div class="w-32 h-32 lg:w-52 lg:h-52">
            <Image src={PD2} alt="Square photo" width={"auto"} height={"auto"} style={{borderRadius: "50%"}}/>
          </div>
          <p class="text-l mt-4 lg:text-xl font-bold text-white">Project Director</p>
          <a href="mailto:dhandkhushi07@gmail.com"><p class="font-light text-sm lg:text-base text-white">Khushi Dhand</p></a>
        </div>
        <div class="flex flex-col items-center m-4">
          <div class="w-32 h-32 lg:w-52 lg:h-52">
            <Image src={PD1} alt="Square photo" width={"auto"} height={"auto"} style={{borderRadius: "50%"}}/>
          </div>
          <p class="text-l mt-4 lg:text-xl font-bold text-white">Project Director</p>
          <a href="mailto:arisha.ahmed03@gmail.com"><p class="font-light text-sm lg:text-base text-white">Arisha Ahmed</p></a>
        </div>
      </div>

      {/* SOCIAL MEDIA LINKS */} {/* CHANGE */}
      <div id="socials" class="flex justify-center space-x-4 lg:space-x-12 pt-8 pb-28">
        <a href="https://www.instagram.com/ennovateubc/" target="_blank" rel="noopener noreferrer">
          <Image class="hover:opacity-60 transition duration-300" src={ig} alt="instagram Enactus project" width={25} height={25} />
        </a>
        <a href="mailto:ennovateubc@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image class="hover:opacity-60 transition duration-300" src={mail} alt="email Enactus project" width={25} height={25} />
        </a>
        {/* <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <Image class="hover:opacity-60 transition duration-300" src={linkedin} alt="linkedin Enactus Project" width={25} height={25} />
        </a> */}
      </div>


      {/* GRADIENT */} {/* CHANGE */}
      <div style={{ position: "relative"}}>
  <div
    style={{
      backgroundImage: "linear-gradient(#ffffff, #4D9ED9)",
      paddingBottom: "2000px",
      position: "absolute",
      zIndex: "-1",
      bottom: "0px",
      left: "0px",
      right: "0px",
    }}
  ></div>
</div>
    <Footer />
    </main>
  );
}
