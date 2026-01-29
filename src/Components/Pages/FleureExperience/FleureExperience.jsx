import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import "./FleureExperience.css";

import hero from "../../../Images/hero2.jpg";

// Lifestyle imagery (existing assets)
import lifestyle1 from "../../../Images/new/pic4.jpg";
import lifestyle2 from "../../../Images/new/pic9.jpg";
import lifestyle3 from "../../../Images/new/pic12.jpg";
import lifestyle4 from "../../../Images/new/pic16.jpg";

const FleureExperience = () => {
  return (
    <div className="fleure-experience-page">
      <Header />

      <main>
        {/* Page Intro */}
        <section
          className="fe-hero"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="fe-hero-overlay" />
          <div className="fe-hero-content">
            <p className="fe-eyebrow">A destination in bloom</p>
            <h1 className="fe-title">The Fleure Experience</h1>
            <p className="fe-lede">
              Fleure is the UK’s first café and florist destination, created to
              offer more than a place to visit. Inspired by global café culture
              and thoughtfully designed interiors, Fleure brings together
              artisanal florals and specialty coffee in one immersive space.
            </p>
          </div>
        </section>

        {/* The Concept */}
        <section className="fe-section">
          <div className="fe-section-inner">
            <h2 className="fe-heading">
              More Than a Café. More Than a Florist.
            </h2>
            <div className="fe-copy">
              <p>
                At Fleure, flowers and coffee exist side by side — each crafted
                with the same attention to detail. From bespoke floral
                arrangements to carefully brewed coffee, every element is
                curated to feel elevated, calm, and intentional.
              </p>
              <p>
                Designed to transport you, Fleure is a space where everyday
                rituals feel refined and unhurried.
              </p>
            </div>
          </div>
        </section>

        {/* Global Influence */}
        <section className="fe-section fe-section--alt">
          <div className="fe-section-inner">
            <h2 className="fe-heading">Inspired Beyond Borders</h2>
            <div className="fe-copy">
              <p>
                Shaped by international travel and global café cultures, Fleure
                draws inspiration from destinations where experience,
                atmosphere, and craftsmanship are central. The result is a
                concept created with a vision beyond the UK, designed to stand
                confidently on a global stage.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Focus / Lifestyle */}
        <section className="fe-gallery" aria-label="Fleure lifestyle gallery">
          <div className="fe-gallery-inner">
            <div className="fe-gallery-grid">
              <figure className="fe-tile fe-tile--wide">
                <img src={lifestyle1} alt="Fleure atmosphere" loading="lazy" />
              </figure>
              <figure className="fe-tile">
                <img src={lifestyle2} alt="Café moment" loading="lazy" />
              </figure>
              <figure className="fe-tile">
                <img src={lifestyle3} alt="Florals in detail" loading="lazy" />
              </figure>
              <figure className="fe-tile fe-tile--tall">
                <img
                  src={lifestyle4}
                  alt="Lifestyle at Fleure"
                  loading="lazy"
                />
              </figure>
            </div>

            <div className="fe-gallery-caption">
              <p>
                Quiet light. Thoughtful design. A space that invites you to slow
                down.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Line */}
        <section className="fe-closing">
          <div className="fe-section-inner">
            <p className="fe-closing-line">
              Fleure is where atmosphere, detail, and design come together —
              creating moments worth staying for.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FleureExperience;
