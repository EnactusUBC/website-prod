

export default function CarouselByIndex({ index }) {
    if (index == 0) {
        return (
            <div className='bg-hero bg-cover w-screen min-h-screen bg-bottom flex flex-col items-center justify-center'>
                <div className='bg-enactusblue/80 bg-cover w-screen min-h-screen absolute'></div>
                <img src='/indeximages/enactuslogo.png' className="relative w-2/6 sm:w-auto"></img>
                <h1 className='text-3xl lg:text-5xl xl:text-6xl text-white relative font-bold pb-10 pt-16'>Enactus UBC</h1>
                <h3 className="text-lg lg:text-xl xl:text-2xl text-center text-white relative font-bold pb-10 xl:pb-20">Creating social impact through entrepreneurship</h3>
                <button className='relative bg-enactusyellow text-sm xl:text-xl font-semibold text-white py-1 px-6 xl:py-2 xl:px-14 rounded-3xl border-4 border-enactusyellow hover:bg-transparent invisible'>Join Us</button>
            </div>
        );
    }
    if (index == 1) {
        return (
            <div className='bg-member bg-cover w-screen min-h-screen bg-bottom flex flex-col items-center justify-center'>
                <div className='bg-enactusblue/80 bg-cover w-screen min-h-screen absolute'></div>
                <img src='/indeximages/enactuslogo.png' className="relative w-2/6 sm:w-auto invisible"></img>
                <h1 className='text-3xl lg:text-5xl xl:text-6xl text-white relative font-bold pb-10 pt-16'>Become a Member</h1>
                <h3 className="text-lg lg:text-xl xl:text-2xl text-center text-white relative font-bold pb-10 xl:pb-20">Learn about the Enactus team and hiring</h3>
                <a href='joinus'><button className='relative bg-enactusyellow text-sm xl:text-xl font-semibold text-white py-1 px-6 xl:py-2 xl:px-14 rounded-3xl border-4 border-enactusyellow hover:bg-transparent'>Join Us</button></a>
            </div>
        );
    }
    if (index == 2) {
        return (
            <div className='bg-comp bg-cover w-screen min-h-screen bg-bottom flex flex-col items-center justify-center'>
                <div className='bg-enactusblue/80 bg-cover w-screen min-h-screen absolute'></div>
                <img src='/indeximages/enactuslogo.png' className="relative w-2/6 sm:w-auto invisible"></img>
                <h1 className='text-3xl lg:text-5xl xl:text-6xl text-white relative font-bold pb-10 pt-16'>Competitions</h1>
                <h3 className="text-lg lg:text-xl xl:text-2xl text-center text-white relative font-bold pb-10 xl:pb-20">Annual regional and national expositions</h3>
                <a href='competitions'><button className='relative bg-enactusyellow text-sm xl:text-xl font-semibold text-white py-1 px-6 xl:py-2 xl:px-14 rounded-3xl border-4 border-enactusyellow hover:bg-transparent'>Learn More</button></a>
            </div>
        );
    }
}