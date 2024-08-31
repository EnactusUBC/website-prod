import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Header></Header>
            <main className='flex flex-col w-full overflow-x-hidden bg-[#fbfcfd] text-dark'>
                <div className='bg-about bg-cover w-screen min-h-screen mt-20'>
                    <h2 className='text-4xl xl:text-5xl sm:mt-16 xl:mt-24 3xl:mt-56 mb-12 ml-12 lg:mx-20 xl:ml-32 w-3/5'><span className='text-enactusyellow font-bold'>Enactus UBC</span> <span className='font-bold'>strives to</span> empower communities through entrepreneurship! </h2>
                    <h3 className='text-lg xl:text-4xl xl:mb-80 3xl:mb-96 ml-12 lg:mx-20 xl:ml-32 w-5/6 xl:w-1/2'>We fuel opportunity, drive equality, and embrace social responsibility, creating measurable improvements for our communities. </h3>
                    <div>
                        <h2 className='text-3xl xl:text-5xl font-bold text-white ml-4 sm:ml-20 xl:ml-32 3xl:mx-80 mb-8 xl:mb-16 3xl:mb-24 xl:pt-6 pt-32 sm:pt-48'>Our Core Values</h2>
                        <div className='xl:mx-32 mx-4 sm:mx-20 3xl:mx-80 flex flex-col lg:flex-row justify-between lg:mb-32'>
                            <div className='xl:w-1/4 sm:w-4/5 my-4 lg:mr-4 xl:mr-0'>
                                <div className='flex items-center mb-2 xl:mb-6'>
                                    <h3 className='text-2xl xl:text-4xl text-enactusyellow mr-2'>Curiosity</h3>
                                    <Image
                                        src='/aboutimages/lightbulbyellow.png'
                                        alt='Lightbulb Icon'
                                        width={59}
                                        height={59}
                                    />
                                </div>
                                <p className='text-white text-base xl:text-2xl font-light'>We continuously question our surroundings to see if we can make something better than it was before</p>
                            </div>
                            <div className='xl:w-1/4 sm:w-4/5 my-4 lg:mx-4 xl:mx-0'>
                                <div className='flex items-center mb-2 xl:mb-6'>
                                    <h3 className='text-2xl xl:text-4xl text-enactusyellow mr-2'>Courage</h3>
                                    <Image
                                        src='/aboutimages/mountainsyellow.png'
                                        alt='Mountains Icon'
                                        width={77}
                                        height={53}
                                    />
                                </div>
                                <p className='text-white text-base xl:text-2xl font-light'>We are willing to do something different in order to achieve our goals, and we know that there is no better time to take that risk than now.</p>
                            </div>
                            <div className='xl:w-1/4 sm:w-4/5 my-4 lg:mx-4 xl:mx-0'>
                                <div className='flex items-center mb-2 xl:mb-6'>
                                    <h3 className='text-2xl xl:text-4xl text-enactusyellow mr-2'>Change</h3>
                                    <Image
                                        src='/aboutimages/peopleyellow.png'
                                        alt='People Icon'
                                        width={69}
                                        height={53}
                                    />
                                </div>
                                <p className='text-white text-base xl:text-2xl font-light'>We know that together, we can and will make a difference this year and in future years to come.</p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src='/aboutimages/bottomswoosh.png'
                        alt='Decorative Bottom Swoosh'
                        className='w-full'
                        width={1920}
                        height={138}
                    />
                </div>
                <div className='flex lg:flex-row flex-col items-center mb-4 mx-6'>
                    <Image
                        src='/aboutimages/execteam.jpg'
                        alt='Executive Team'
                        className='lg:w-5/12 md:w-4/6 rounded-lg lg:ml-12 xl:ml-32 md:my-8 my-16 shadow-solid'
                        width={6755}
                        height={4192}
                    />
                    <div className='lg:mx-16 xl:mx-32'>
                        <h2 className='text-3xl xl:text-5xl font-bold my-8 xl:my-16'>Our Story</h2>
                        <p className='text-base xl:text-xl 3xl:text-2xl'>Enactus is a global platform for student-driven community improvement through entrepreneurship. With teams in 33 countries and over 72,000 students, we impact over 13 million lives worldwide. At Enactus UBC, we empower socially responsible business leaders to spark change. Enactus UBC was first established in 2001 as ACE (Advancing Canadian Entrepreneurship).
                            <br /><br />
                            Join our team of over 150 members as we tackle pressing social issues through our projects, and compete at the Enactus Canada Regional and National Expositions. Together, let&apos;s make a difference in the Vancouver community.
                        </p>
                    </div>
                </div>
                <div className='bg-offwhite'>
                    <Image
                        src='/aboutimages/bottomswoosh2.png'
                        alt='Second Decorative Bottom Swoosh'
                        className='w-full'
                        width={1920}
                        height={138}
                    />
                    <div className='flex items-center ml-4 lg:ml-20 xl:ml-32 mt-10'>
                        <Image
                            src='/aboutimages/earth.png'
                            alt='Earth Icon'
                            className='w-20 lg:w-40 xl:w-60 relative hover:rotate-180 transition ease-linear duration-2000'
                            width={405}
                            height={309}
                        />
                        <h2 className='text-3xl lg:text-5xl font-bold text-enactusblue'>What is Enactus?</h2>
                    </div>
                    <p className='bg-enactusblue rounded-xl mx-4 lg:mx-12 xl:mx-24 mb-10 p-8 text-sm xl:text-xl font-light text-white lg:relative lg:-top-10 mt-4 xl:mt-0'>Enactus serves as a global platform for students to drive enduring community improvements through entrepreneurial action. By leveraging their innovative spirit and business acumen, Enactus students bring their projects and enterprises to life within their communities. With a presence in 33 countries, our network encompasses 1,064 university teams and over 72,000 students, collectively impacting over 13 million lives worldwide.
                        <br /><br />
                        At Enactus UBC, we are committed to igniting social transformation and effecting tangible change in our community through the power of entrepreneurship. As socially responsible business leaders, we empower UBC students to make a positive difference. With a team of over 150 passionate members, we continuously expand our projects, amplify our impact, and conquer new frontiers. To showcase our accomplishments, we proudly represent UBC in the prestigious Enactus Canada Regional and National Expositions.
                        <br /><br />
                        This year, Enactus UBC spearheads transformative endeavors in the Vancouver community through five distinctive projects: Ennovate, Enspire, and Seeder. Each project is tailored to address a specific and urgent social challenge that we have identified within our community.
                    </p>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
