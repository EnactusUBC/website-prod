import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Xsvg = () => {
    return(
        <svg width="60" height="60" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="25.7413" y1="79.3453" x2="79.3455" y2="25.7412" stroke="#E9E9E9" stroke-width="3"/>
        <line x1="28.1781" y1="25.426" x2="81.7822" y2="79.0302" stroke="#E9E9E9" stroke-width="3"/>
        </svg>
    )
}

export default function CompetitionPage() {
    return (
      <main className="overflow-x-hidden">
        <Header />
        <div className="ml-8 lg:ml-24 mt-8 lg:mt-20">
          <h1 className="mb-4 lg:mb-10 mt-10 color-black text-2xl lg:text-4xl font-bold">
            Something you should know is that <br className='hidden 500:block'/> Enactus UBC{" "}
            <span style={{ color: "#FFC220" }}>WINS.</span>
          </h1>
          <div className="flex md:flex-row gap-8 lg:gap-36">
            <p1 className="w-5/6 md:w-4/6 lg:w-3/6 text-MD lg:text-xl block">
              Annually, our team represents UBC by competing in the Enactus Canada
              Regional and National Expositions. These expositions aim to bring
              together student, academic and industry leaders to celebrate the
              achievements of Canada&apos;s future leaders and entrepreneurs. The impact
              that each school creates through entrepreneurial initiatives is
              exhibited through a business presentation format in a variety of
              categories. This year, the Enactus Western Canada Regional Exposition
              was held in Calgary, and the Enactus Canada National Exposition will be held in Toronto.
            </p1>

            {/* <Image className='hidden sm:block w-52 md:w-64 lg:w-96 mr-8 mb-5 object-contain' src="/assets/enactusComp.jpg" alt="Image of Enactus Competition" width={500} height={500} objectFit="cover"></Image> */}
          </div>
        </div>
  
        <div className="mt-10 h-fit w-screen bg-[url('/assets/competitionBG.png')] bg-cover">
          <div className="ml-8 lg:ml-24  mb-14">
            <h1 className="text-enactus-yellow font-bold text-3xl lg:text-4xl pt-12">
              Hall of Fame
            </h1>
          </div>


          <div className="flex justify-items-center items-center flex-col w-full pb-16">
              <h3 className="text-white font-semibold text-xl lg:text-2xl lg:mb-10  lg:self-start ml-8 mr-8 lg:ml-24 ">
                  2024 Nationals
              </h3>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
              Desjardins Youth Empowerment Challenge - National Champion
              </h2>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
              Enactus Brand Champions
              </h2>
              <h2 className="text-white text-sm mt-3 lg:text-2xl font-semibold">
              Top 20 Semi-Finalist Nationally
              </h2>
              <h2 className="text-white text-sm lg:text-2xl font-semibold">
              RBC Future Launch Accelerator - 2nd Place
              </h2>
              <h2 className="text-white text-sm lg:text-2xl font-semibold">
              CWB Indigenous Inclusion Accelerator - 3rd Place
              </h2>
              <h3 className="text-white font-semibold text-xl lg:text-2xl lg:mb-10  lg:self-start ml-8 mr-8 lg:ml-24 ">
                2024 Regionals
              </h3>
              {/* <Image className='w-40 mb-5 mt-3' src="/sponsors/HSBC.png" alt="HSBC Logo" width={500} height={500} objectFit="cover" /> */}

              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
              Desjardins Youth Empowerment Challenge - 1st Place
              </h2>

              <h2 className="text-white text-sm lg:text-2xl font-semibold">
                TD Entrepreneurship Challenge - 3rd Place
              </h2>

              <h2 className="text-white text-sm lg:text-2xl font-semibold">
                Canadian Tire Environmental Sustainability Challenge - 3rd Place
              </h2>


              <h3 className="mt-8 text-white font-semibold text-xl lg:text-2xl ml-8 mr-8 lg:ml-24 lg:mb-10  lg:self-start">
                2023 Nationals
              </h3>
              {/* <Image className='w-40 mb-5 mt-3' src="/sponsors/HSBC.png" alt="HSBC Logo" width={500} height={500} objectFit="cover" /> */}

              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
              HSBC Entrepreneurship Project Accelerator - 1st Place
              </h2>

              <h2 className="text-white text-sm mt-3 lg:text-2xl font-semibold">
                Top 20 Semi-Finalist Nationally
              </h2>
              

              <h3 className="mt-8 text-white font-semibold text-xl lg:text-2xl ml-8 mr-8 lg:ml-24 lg:mb-10  lg:self-start">
                2023 Regionals
              </h3>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                Scotiabank Climate Action Challenge - 1st Place
              </h2>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                TD Entrepreneurship Challenge - 1st Place
              </h2>

              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                Shaw Project Accelerator Challenge - 1st Place
              </h2>
              <h2 className="text-white text-sm mt-3 lg:text-2xl font-semibold">
                Top 5 Semi-Finalist Nationally
              </h2>
              <h2 className="text-white text-sm lg:text-2xl font-semibold">
                CWB Financial Education Challenge - 2nd Place
              </h2>

              {/* <h3 className="mt-8 text-white font-semibold text-xl lg:text-2xl ml-8 mr-8 lg:ml-24 lg:mb-10  lg:self-start">
                2022 Nationals
              </h3> */}

              <h3 className="mt-8 text-white font-semibold text-xl lg:text-2xl ml-8 mr-8 lg:ml-24 lg:mb-10  lg:self-start">
                2022 Regionals
              </h3>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                CWB Financial Education Challenge - 1st Place
              </h2>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                Scotiabank Climate Change Challenge - 1st Place
              </h2>
              <h2 className="text-white mt-3 text-sm lg:text-2xl font-semibold">
                TD Entrepreneurship Challenge - 2nd Place
              </h2>

              <h3 className="mt-8 text-white font-semibold text-xl lg:text-2xl ml-8 mr-8 lg:ml-24 lg:mb-10  lg:self-start">
                2021 Regionals
              </h3>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                Scotiabank Climate Change Challenge - 1st Place
              </h2>
              <h2 className="text-white mt-3 text-sm lg:text-2xl font-semibold">
                TD Entrepreneurship Challenge - 2nd Place
              </h2>

              <h3 className="mt-8 text-white font-semibold text-xl lg:text-2xl ml-8 mr-8 lg:ml-24 lg:mb-10  lg:self-start">
                2020 Regionals
              </h3>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                CWB Financial Education Challenge - 1st Place
              </h2>
              <h2 className="text-enactus-yellow mt-3 text-sm lg:text-2xl font-semibold">
                Scotiabank Youth Empowerment Challenge - 1st Place
              </h2>
              <h2 className="text-white mt-3 text-sm lg:text-2xl font-semibold">
                Scotiabank Climate Change Challenge - 2nd Place
              </h2>
              <h2 className="text-white text-sm lg:text-2xl font-semibold">
                TD Entrepreneurship Challenge - 2nd Place
              </h2>



          </div>
  
          
        </div>
        <Footer />
      </main>
    );
  }