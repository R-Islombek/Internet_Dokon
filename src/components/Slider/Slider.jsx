import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import './Slider.css';

const Slider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: t("slider.title1"),
      text: t("slider.text1"),
      author: "John Doe"
    },
    {
      id: 2,
      title: t("slider.title2"),
      text: t("slider.text2"),
      author: "Jane Smith"
    },
    {
      id: 3,
      title: t("slider.title3"),
      text: t("slider.text3"),
      author: "Mike Johnson"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='slider'>
      <div className='container'>
        <div className='slider__container'>
          <div className='slider__content'>
            <div className='slider__quote'>❝</div>
            
            <div className='slider__slides'>
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slider__slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <h3 className='slider__title'>{slide.title}</h3>
                         <div className='slider__stars'>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className='slider__star'>⭐</span>
                    ))}
                  </div>
                  
                  <p className='slider__text'>{slide.text}</p>
                  
                  <span className='slider__author'>- {slide.author}</span>
                </div>
              ))}
            </div>

            <div className='slider__navigation'>
              <button className='slider__btn slider__btn--prev' onClick={prevSlide}>
                ‹
              </button>
              
              <div className='slider__dots'>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`slider__dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              <button className='slider__btn slider__btn--next' onClick={nextSlide}>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider