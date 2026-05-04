import React, { useState, useEffect, useCallback } from "react";
import "./EidGallery.css";

import eid1 from "../../../Images/Eid/Eid-1.jpeg";
import eid2 from "../../../Images/Eid/Eid-2.jpeg";
import eid3 from "../../../Images/Eid/Eid-3.jpeg";
import eid4 from "../../../Images/Eid/Eid-4.jpeg";
import eid5 from "../../../Images/Eid/Eid-5.jpeg";
import eid6 from "../../../Images/Eid/Eid-6.jpeg";
import eid7 from "../../../Images/Eid/Eid-7.jpeg";
import eid8 from "../../../Images/Eid/Eid-8.jpeg";

const images = [
  { src: eid1, alt: "Eid Collection – 1" },
  { src: eid2, alt: "Eid Collection – 2" },
  { src: eid8, alt: "Eid Collection – 8" },
  { src: eid6, alt: "Eid Collection – 6" },
  { src: eid7, alt: "Eid Collection – 7" },
  { src: eid5, alt: "Eid Collection – 5" },
];

const INTERVAL = 2500;

const EidGallery = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="eid-gallery">
      <p className="eid-gallery__heading">The Collection</p>

      <div className="eid-carousel">
        <div
          className="eid-carousel__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="eid-carousel__slide" key={i}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="eid-carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`eid-carousel__dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default EidGallery;
