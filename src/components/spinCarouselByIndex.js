import Link from 'next/link';
import Image from 'next/image';

export default function CarouselByIndex({ index }) {
    if (index == 0) {
        return (

            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid 3xl:h-full'>
                <Link href='https://www.ennovateubc.org/' target="_blank">
                    <div className="flex flex-col items-center">
                        <Image
                            src='/projectlogos/ennovate.png'
                            alt='Ennovate Logo'
                            width={1744}
                            height={378}
                            className="pt-12 xl:pt-16 px-12 xl:px-28 3xl:px-32"
                        />
                        <h3 className="text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg leading-snug 3xl:px-28 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-5 3xl:leading-7">Ennovate is an entrepreneurship education program that teaches high school students entrepreneurial skills through in-person, interactive workshops. The project empowers high school students by providing product development, marketing, finance, corporate social responsibility, and presentation skills. Ennovate guides students through the process of creating and running mini-social enterprises. We are running two, four-month program cycles that each end with a Final Competition where participating teams present their small businesses and products to our industry professional judges. Historically, we have been able to deliver our program to over 20 participating schools and directly impact over 1,000 students. In addition to our core program, Ennovate runs Mentorship and Career Fundamental initiatives, which has equipped over 250 youth with the confidence and skills to take on university applications, career planning, and applying to jobs.</h3>
                    </div>
                </Link>
            </div>

        );
    }
    if (index == 1) {
        return (
            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid 3xl:h-full'>
                <Link href='https://www.enspireubc.ca/' target="_blank">
                    <div className="flex flex-col items-center">
                        <Image
                            src='/projectlogos/enspire.png'
                            alt='Enspire Logo'
                            width={1080}
                            height={400}
                            className="pt-10 px-20 3xl:px-40"
                        />
                        <h3 className="text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg leading-snug 3xl:px-28 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-5 3xl:leading-7">Enspire introduces elementary students to the world of social entrepreneurship, by breaking down the complexities of business to be digestible for all. The participants develop their critical thinking, innovation and teamwork skills in a unique hands-on learning environment. Enspire endeavours to spark creativity, inspire passion, and foster awareness for global issues. Over six months, Enspire teaches business fundamentals through monthly workshops. After each workshop, students apply their learning through monthly projects called Learning Challenges to simulate entrepreneurial decision-making. The year ends with a culminating event called Enspire Day, where we bring our Vancouver classes to UBC to interact with one another and real entrepreneurs to build their understanding of social entrepreneurship. In addition to our core program, Enspire Diverse Learners delivers tailored, standalone workshops to high school students with diverse learning needs, such as learning disabilities.</h3>
                    </div>
                </Link>
            </div>
        );
    }
    if (index == 2) {
        return (

            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid 3xl:h-full'>
                <Link href='https://terraubc.ca/' target="_blank">
                    <div className="flex flex-col items-center">
                        <Image
                            src='/projectlogos/terra.png'
                            alt='Terra Logo'
                            width={978}
                            height={150}
                            className="pt-8 px-8 3xl:px-28"
                        />
                        <h3 className="text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg leading-snug 3xl:px-28 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-5 3xl:leading-7">Terra is a project committed to tackling the growing environmental impacts of food waste. Globally, standard food waste disposal practices contribute to widespread pollution of greenhouse gas emissions. Terra works with campus and community partners (e.g., local farms and community gardens) to divert food waste from landfills to be transformed into a valuable compost product, supporting healthier soils and a more circular food system. By promoting sustainable waste management and soil regeneration, Terra is helping build a future where food waste becomes a resource rather than a burden.</h3>
                    </div>
                </Link>
            </div>

        );
    }
    if (index == 3) {
        return (

            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid 3xl:h-full'>
                <Link href='https://rekindleubc.netlify.app/' target="_blank">
                    <div className="flex flex-col items-center">
                    <Image
                            src='/projectlogos/rekindle.png'
                            alt='Rekindle Logo'
                            width={1080}
                            height={400}
                            className="pt-8 px-20 3xl:px-40"
                        />
                        <h3 className="text-xs sm:text-sm md:text-sm xl:text-base 2xl:text-lg leading-snug 3xl:px-28 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-5 3xl:leading-7">Enactus UBC&apos;s newest project was born from a mission to address Vancouver&apos;s 1.75M tonne wood waste issue. At Rekindle, we upcycle wood waste into beautifully crafted day-to-day products, giving discarded materials a second life. By embracing the circular economy, we reduce environmental impact and create sustainable, functional pieces that make a difference and inspire circularity. Every product is an investment in a world where waste is repurposed, resources are valued, and sustainability is the standard. Join us as Rekindle expands our product portfolio, improves our product quality, and explores other avenues to mitigate the harms of wood waste.</h3>
                    </div>
                </Link>
            </div>

        );
    }

}