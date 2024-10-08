import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  DotButton,
  useDotButton,
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './spin-dots-arrows'
import CarouselByIndex from './spinCarouselByIndex'
import Image from 'next/image';

const SpinCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [globalIndex, setGlobalIndex] = useState(0)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const projectNameByIndex = (index) => {
    if (index == 0) {
      return "Ennovate";
    }
    if (index == 1) {
      return "Enspire";
    }
    if (index == 2) {
      return "Terra";
    }
  }

  const spinPrev = () => {
    spinWheelR();
    onPrevButtonClick();
  }
  const spinNext = () => {
    spinWheelL();
    onNextButtonClick();
  }

  const spinWheel = useCallback((index) => {

    if (index === 0) {
      document.getElementById('circle').className = 'spin_circle';
    }
    if (index === 1) {
      document.getElementById('circle').className = 'spin_circle_one';
    }
    if (index === 2) {
      document.getElementById('circle').className = 'spin_circle_two';
    }

    setGlobalIndex(index);

  }, []);

  const spinWheelL = useCallback(() => {

    if (globalIndex === 0) {
      document.getElementById('circle').className = 'spin_circle_one';
    }
    if (globalIndex === 1) {
      document.getElementById('circle').className = 'spin_circle_two';
    }
    if (globalIndex === 2) {
      document.getElementById('circle').className = 'spin_circle_three';
    }

  }, []);

  const spinWheelR = useCallback(() => {
    if (globalIndex === 0) {
      document.getElementById('circle').className = 'spin_circle_three';
    }
    if (globalIndex === 1) {
      document.getElementById('circle').className = 'spin_circle';
    }
    if (globalIndex === 2) {
      document.getElementById('circle').className = 'spin_circle_one';
    }

    if (globalIndex === 0) {
      setGlobalIndex(2);
    } else {
      setGlobalIndex(globalIndex - 1);
    }
  }, []);



  return (
    <>
      <Image
        id="circle"
        src="/indeximages/circle.png"
        alt="Spinning Circle"
        className='spin_circle'
        width={902}
        height={901}
      />

      <div className="spin">
        <div className="spin__viewport" ref={emblaRef}>
          <div className="spin__container">
            {slides.map((index) => (
              <div className="spin__slide" key={index}>
                <div className="pt-16 pb-6 ml-2 sm:ml-28 md:ml-36 xl:ml-44 2xl:ml-80 h-full">
                  <CarouselByIndex index={index}></CarouselByIndex>
                </div>
              </div>
            ))}
          </div>

          <div className="spin__dots">
            <PrevButton onClick={spinPrev} disabled={prevBtnDisabled} />
            {scrollSnaps.map((_, index) => (
              <div key={index} className='flex items-center'>
                <DotButton
                  key={index}
                  onClick={() => { spinWheel(index); onDotButtonClick(index); }}
                  className={'spin__dot'.concat(
                    index === selectedIndex ? ' spin__dot--selected' : ''
                  )}
                />
                <p className='font-bold text-dark ml-4 text-lg 2xl:text-2xl absolute invisible lg:visible lg:static'>{projectNameByIndex(index)}</p>
              </div>
            ))}
            <NextButton onClick={spinNext} disabled={nextBtnDisabled} />
          </div>
        </div>

      </div>


    </>
  )
}

export default SpinCarousel;
