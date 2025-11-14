import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import Back0 from "../Hero/images/back.png";
import Back1 from "../Hero/images/back1.png";
import Back2 from "../Hero/images/back2.png";

const slides = [
  { image: Back0 },
  { image: Back1 },
  { image: Back2 }
];

const Hero = () => {
  const { t } = useTranslation();
  const titles = t("hero.titles", { returnObjects: true });     
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="hero">
      <div className="container">
        {slides.map((slide, index) => (
          <div
            className={`hero__container ${index === current ? "active" : ""}`}
            key={index}
          >
            {index === current && (
              <>
                <div className="hero__left-box">
                  <h1>{titles[current]}</h1>
                  <button>{t("hero.button")}</button>
                </div>
                <div className="hero__image">
                  <img src={slide.image} alt={`slide-${index}`} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
