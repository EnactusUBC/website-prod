import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'react-feather';
import Header from '../components/Header';
import Footer from '../components/Footer';

function JoinUsPage() {

    const [current, setCurrent] = React.useState(0);

    const [answers, setAnswers] = useState([
        { question: 'Do I need to be in Sauder to join?', answer: 'Definitely not! Everyone is welcome to join!', isHidden: true },
        { question: 'Why should we join Enactus?', answer: 'Join our welcoming community of likeminded people while making a positive impact on our community!', isHidden: true },
        { question: 'How can I get involved?', answer: 'Check out our hiring package that will be posted around September!.', isHidden: true }
      ]);

    const carouselImages = [
        "/assets/joinUsImg1.png",
        "/assets/joinUsCarousel2.png",
        "/assets/joinUsCarousel3.png"
    ];

    const prev = () => { 
        setCurrent(current === 0 ? carouselImages.length - 1 : current - 1);
    }

    const next = () => {
        setCurrent(current === carouselImages.length - 1 ? 0 : current + 1);
    }
    

    return <main>
        <Header></Header>

        {/* Join Enactus banner */}
        <div className="w-screen h-auto flex justify-center relative -mt-1">
            <img src="/assets/joinUsBG.png" alt="Picture of Enactus Members" className="w-full object-contain"></img>

            <div className="absolute left-1/2 md:-ml-56 -ml-36 lg:-ml-80 top-1/4 flex flex-col items-center justify-items-center">
                <h1 className="text-enactus-yellow text-2xl lg:text-5xl font-bold">Come Join Enactus!</h1>
                <h1 className="text-white text-xs md:text-xl lg:text-3xl font-semibold">We'll be hiring for positions in September, 2023</h1>
            </div>
        </div>
        
        {/* Check back soon area + Follow @enactus UBC */}
        <article>
            <div className="flex flex-col items-center justify-items-center mt-2 lg:mt-8 gap-2">
                <h1 className="text-black text-md lg:text-2xl font-bold">Check back soon for our hiring package!</h1>
                <img src="/assets/enactus_inwork.gif" alt="Enactus UBC working gif" className="w-24 object-cover -translate-y-3" />
                <h1 className="text-black text-xs lg:text-lg  font-regular">Follow <a className="underline" href="https://www.instagram.com/enactusubc/">@enactusubc</a> to be the first to know about the latest  hiring opportunities!</h1>
            </div>
        </article>

        {/* Enactus Quote + Photo Carousel*/}
        <div className="flex flex-col items-center justify-items-center mt-20 gap-2">
            <h1 className="text-enactus-yellow text-sm md:text-2xl lg:text-4xl font-bold ">THE ENACTUS LIFE</h1>

            <div className="flex flex-col md:flex-row mt-5 gap-auto w-9/12 h-auto">
                {/* Carousel */}
                <div className="md:mr-4 lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] flex overflow-hidden m-auto relative transition-transform ease-out duration-500">
                    <div style={{transform : `translateX(-${current * 100}%)` }} className="rounded-md flex transition-transform ease-out duration-500">
                        {carouselImages.map((s) => (
                            console.log(s),
                            <img src={s} className="rounded-md border-rh-400 lg:w-[300px] w-[250px] h-[250px] md:w-[250px] md:h-[250px] lg:h-[300px] object-cover" alt="Carousel Image" />
                        ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white '>
                            <ChevronLeft size={20}/>
                        </button>
                        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white '>
                
                            <ChevronRight size={20}/>
                        </button>
                    </div>
                </div>
                {/* Quotes next to Carousel */}
                <div className="flex-col flex md:w-7/12 mt-5 md:mt-0 md:h-[250px] lg:h-[300px] gap-auto pb-5 justify-center items-center md:items-end">
                    <h2 className='font-regular text-xs lg:text-md md:text-right'>Enactus has been foundational in establishing my social networks at UBC while providing me opportunities to work on projects to give back to the community.</h2>
                    <h2 className='font-medium text-sm lg:text-md md:text-right'>-- Amanda Sam</h2>

                    <h2 className='font-regular text-xs lg:text-md mt-3 md:text-right' > If you're looking for the place to make real, tangible impact in your communities while joining a vibrant community of amazingly talented people - you’ve come to the perfect place</h2>
                    <h2 className='font-medium text-sm lg:text-md md:text-right'>-- Daniel Dian</h2>

                    <h2 className='font-regular text-xs lg:text-md mt-3 md:text-right'> After spending 3 years in Enactus I can safely say that it is one of the highlights in my university experience.</h2>
                    <h2 className='font-medium text-sm lg:text-md md:text-right'>-- Tiffany Chang</h2>
                </div>
            </div>

            
        </div>    

        {/* FAQ */}
        <div className="flex flex-col items-center mb-12">
            <h1 className=' text-enactus-yellow mt-12 text-4xl font-bold'>FAQ</h1>


            {answers.map((item, index) => (
        <div key={index} className={`flex justify-between mt-4 w-9/12 justify-items-center items-center bg-[#29476D] rounded-md ${item.isHidden ? 'h-[50px]' : 'h-[120px]'}`} onClick={() => {
          const newAnswers = [...answers];
          newAnswers[index].isHidden = !newAnswers[index].isHidden;
          setAnswers(newAnswers);
        }}>

          <div className="flex flex-col">
            <h1 className="text-white text-sm lg:text-lg font-semibold ml-5">{item.question}</h1>
            <h1 className={`text-white text-sm lg:text-md font-regular mt-3 ml-5 ${item.isHidden ? 'hidden' : ''}`}>{item.answer}</h1>
          </div>
          <button className='text-white mr-3'>
            <ChevronDown></ChevronDown>
          </button>
        </div>
      ))}
        </div>
        <Footer></Footer>
      
    </main>;


}


export default JoinUsPage;