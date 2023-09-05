import Link from 'next/link';

export default function CarouselByIndex({ index }) {
    if (index == 0) {
        return (
            
            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid'>
                <Link href='/ennovate'>
                <div className="flex flex-col items-center">
                <img src='/projectlogos/ennovate.png' className="pt-12 xl:pt-20 px-8 xl:px-20 3xl:px-24"></img>
                <h3 className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 3xl:px-36 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-6 3xl:leading-9">Ennovate is an intensive, 4 month entrepreneurial education project that focuses on empowering high school students through interactive workshops that help students develop a portfolio of fundamental business skills and a variety of soft skills. Under the support and guidance of the Ennovate team, students participating in the Ennovate program will create a mini social-enterprise that addresses a pressing social or environmental concern, replicating that of a business that would thrive in the real world. At the very end of the program, students will pitch their developed businesses to a panel of industry professionals, showcasing all of their hard work.</h3>
                </div>
                </Link>
            </div>
            
        );
    }
    if (index == 1) {
        return (
            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid'>
                <Link href='/enspire'>
                <div className="flex flex-col items-center">
                <img src='/projectlogos/enspire.png' className="pt-16 px-16 3xl:px-36"></img>
                <h3 className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 3xl:px-36 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-6 3xl:leading-9">Enspire endeavors to spark creativity, inspire passion and foster global awareness amongst Grade 6-7 students by introducing them to the world of social entrepreneurship. Over the span of six months, Enspire teaches business fundamentals through interactive Digital Workshops, each culminating in monthly Learning Challenges that students can submit for the chance to win prizes. By the end of the program, all students showcase and celebrate their work at Enspire Day, our annual flagship event. </h3>
                </div>
                </Link>
            </div>
        );
    }
    if (index == 2) {
        return (
            
            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid'>
                <Link href='/seeder'>
                <div className="flex flex-col items-center">
                <img src='/projectlogos/seeder.png' className="pt-20 px-20 3xl:px-36"></img>
                <h3 className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 3xl:px-36 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-6 3xl:leading-9">Seeder is an initiative that is dedicated to mitigating and diverting food waste in the Lower Mainland while tackling food insecurity. We facilitate the donation of excess food from organizations and food retailers to UBC distribution sites, where the food is given to students facing food insecurity. This year, we plan on further tackling the issue of food waste by expanding outside of UBC and helping food-insecure residents in the Lower Mainland. We are also planning innovative ways to use upcycled organics to empower organizations in the environmental sector and inspire students to create change in their communities.</h3>
                </div>
                </Link>
            </div>
            
        );
    }
    if (index == 3) {
        return (
            <div className='bg-offwhite w-11/12 lg:w-6/12 rounded-2xl flex flex-col items-center border-dark border-4 h-full 2xl:h-0.8 shadow-solid'>
            <Link href='/building-bridges'>
            <div className="flex flex-col items-center">
                <img src='/projectlogos/buildingbridges.png' className="pt-12 w-96 px-20"></img>
                {/* <h1 className="text-8xl font-bold pt-20 px-20">Building Bridges</h1> */}
                <h3 className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 3xl:px-36 text-dark font-bold pt-8 pb-16 px-8 xl:px-16 xl:leading-6 3xl:leading-9">Founded in 2022 and launched in 2023, Building Bridges aims to bridge the knowledge gap in today’s academic curriculum about Indigenous history and mobilize non-Indigenous youth to take action through social entrepreneurship. Through interactive workshops, modules and a final conference, we educate on topics such as the history of settler colonialism, Indigenous history, and Indigenous rights. Currently, we are preparing to formally launch our program in high schools this upcoming September.</h3>
                </div>
                </Link>
            </div> 
        );
    }
    
}