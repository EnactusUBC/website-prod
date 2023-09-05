import React, { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  

  const onPrevButtonClick = useCallback(() => { 
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="spin__button spin__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="spin__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M520.646 355.66c13.805 13.793 13.805 36.208 0 50.001-13.804 13.785-36.238 13.785-50.034 0L266 201.22 61.391 405.66c-13.805 13.785-36.239 13.785-50.044 0-13.796-13.793-13.796-36.208 0-50.002 22.947-22.928 206.507-206.395 229.454-229.332a35.065 35.065 0 0 1 25.126-10.326c9.2 0 18.26 3.393 25.2 10.326 45.901 45.865 206.564 206.404 229.52 229.332Z"
        />
      </svg>
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="spin__button spin__button--next"
      type="button"
      {...restProps}
    >
      <svg className="spin__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M11.354 176.34c-13.805-13.793-13.805-36.208 0-50.001 13.804-13.785 36.238-13.785 50.034 0L266 330.78l204.61-204.442c13.805-13.785 36.239-13.785 50.044 0 13.796 13.793 13.796 36.208 0 50.002a5994246.277 5994246.277 0 0 0-229.454 229.332 35.065 35.065 0 0 1-25.126 10.326c-9.2 0-18.26-3.393-25.2-10.326C194.973 359.808 34.31 199.269 11.354 176.34Z"
        />
      </svg>
      {children}
    </button>
  )
}

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

export const DotButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
