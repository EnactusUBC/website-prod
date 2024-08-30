import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'react-feather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Sam from '../images/asam.png';
import Dian from '../images/ddian.png';
import Chang from '../images/tchang.png';

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
                <h1 className="text-white text-xs md:text-xl lg:text-3xl font-semibold">The link below has everything you need :)</h1>
            </div>
        </div>

        {/* Check back soon area + Follow @enactus UBC */}
        <article>
            <div className="flex flex-col items-center justify-items-center mt-2 lg:mt-8 gap-2">
                <h1 className="text-black text-md lg:text-2xl font-bold"></h1>
                <img src="/assets/enactus_inwork.gif" alt="Enactus UBC working gif" className="w-24 object-cover -translate-y-3" />
                <a href="https://linktr.ee/enactusUBC/" target="_blank">
                    <button class="button bg-transparent border-enactus-yellow text-enactus-yellow border-2 cursor-pointer transition duration-300 ease-in-out rounded-3xl hover:bg-enactus-yellow hover:text-white hover:border-white font-light" style={{ padding: "30px 80px", fontSize: "20px" }}>
                        Hiring Links
                    </button>
                </a>
                {/* <h1 className="text-black text-xs lg:text-lg  font-regular">Follow <a className="underline" href="https://www.instagram.com/enactusubc/">@enactusubc</a> to be the first to know about the latest hiring opportunities!</h1> */}
            </div>
        </article>

        {/* Enactus Quote + Photo Carousel */}
        <div className="flex flex-col items-center justify-items-center mt-20 gap-2">
            <div className="flex flex-col md:flex-row mt-5 w-full h-auto items-center justify-center">
                {/* Carousel */}
                <div className="md:mr-4 lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] flex overflow-hidden relative transition-transform ease-out duration-500 mt-20">  {/* Added mt-8 to move the carousel down */}
                    <div
                        style={{ transform: `translateX(-${current * 100}%)` }}
                        className="rounded-md flex transition-transform ease-out duration-500"
                    >
                        {carouselImages.map((s, index) => (
                            <img
                                key={index}
                                src={s}
                                className="rounded-md border-rh-400 lg:w-[500px] w-[400px] h-[400px] md:w-[400px] md:h-[400px] lg:h-[500px] object-cover"
                                alt="Carousel Image"
                            />
                        ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button
                            onClick={prev}
                            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Quotes next to Carousel */}
                <div className='flex flex-col items-center md:items-start md:w-1/2 p-6'>
                    <h2 className='text-3xl xl:text-5xl font-bold my-8 xl:my-16'>Why Enactus?</h2>
                    <p className='text-base xl:text-xl 3xl:text-2xl text-center md:text-left'>
                        Joining Enactus is more than just becoming a member of a student organization, it&apos;s stepping into a community of driven, socially-conscious leaders who are passionate about making a difference within our community. At Enactus, you&apos;ll have the opportunity to connect and collaborate with like-minded individuals who share your desire to create positive social change.
                        <br /><br />
                        Whether you&rsquo;re participating in the annual Enactus National Competition or educating 6th and 7th graders about social entrepreneurship, you&apos;ll have the chance to inspire and empower the next generation while making a meaningful impact. These experiences not only allow you to give back to the community but also help you forge valuable connections and become an integral part of the Enactus family.
                    </p>
                </div>
            </div>
        </div>

        {/* Testamonials */}
        <section className="py-12 bg-white sm:py-16 lg:py-20"> {/* Changed bg-gray-50 to bg-white */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Enactus Testimonials</h2>
                    </div>

                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #FFC220, #29476D)' }}></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">Enactus has been foundational in establishing my social networks at UBC while providing me opportunities to work on projects to give back to the community.</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <Image className="flex-shrink-0 object-cover rounded-full" src={Sam} alt="Amanda Sam" width={65} height={65} />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj">Amanda Sam</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">VP Internal 2023/24</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">If you&rsquo;re looking for the place to make real, tangible impact in your communities while joining a vibrant community of amazingly talented people - you've come to the perfect place.</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <Image className="flex-shrink-0 object-cover rounded-full" src={Dian} alt="Daniel Dian" width={65} height={65} />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj">Daniel Dian</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Co-President 2023/24</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">After spending 3 years in Enactus I can safely say that it is one of the highlights in my university experience.</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <Image className="flex-shrink-0 object-cover rounded-full" src={Chang} alt="Tiffany Chang" width={65} height={65} />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj">Tiffany Chang</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">VP Internal 2024/25</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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