import React from "react";
import "./EidGrid.css";
import eid2 from "../../../Images/Eid/Eid-2.jpeg";
import eid4 from "../../../Images/Eid/Eid-4.jpeg";
import eid6 from "../../../Images/Eid/Eid-6.jpeg";
import eid8 from "../../../Images/Eid/Eid-8.jpeg";
import eid1 from "../../../Images/Eid/Eid-1.jpeg";

/* ─── Placeholder image slot ──────────────────────────────────────────────── */
const PlaceholderImage = ({ label }) => (
  <div className="eid-placeholder-wrap">
    <span className="eid-placeholder-label">{label}</span>
  </div>
);

/* ─── Size row list ───────────────────────────────────────────────────────── */
const SizeList = ({ sizes }) => (
  <ul className="eid-sizes">
    {sizes.map(({ name, price }) => (
      <li key={name}>
        <span>{name}</span>
        <span className="eid-size-price">£{price}</span>
      </li>
    ))}
  </ul>
);

/* ─── Data ────────────────────────────────────────────────────────────────── */
const centrepieceVariants = [
  {
    colour: "Blush",
    subtitle: "Eid Luxe Centrepiece — Blush",
    image: eid2,
    sizeNote: "Pictured in Grande",
    sizes: [
      { name: "Classic", price: "90" },
      { name: "Grande", price: "150" },
    ],
  },
  {
    colour: "Bleu",
    subtitle: "Eid Luxe Centrepiece — Bleu",
    image: eid1,
    sizeNote: "Pictured in Grande",
    sizes: [
      { name: "Classic", price: "100" },
      { name: "Grande", price: "150" },
    ],
  },
];

const bouquetVariants = [
  {
    colour: "Blush Garden",
    subtitle: "Eid Garden Bouquet — Blush",
    image: eid6,
    sizes: [
      { name: "Petite", price: "45" },
      { name: "Grande", price: "150" },
    ],
    sizeNote: "Pictured in Petite & Grande",
  },
  {
    colour: "Bleu Garden",
    subtitle: "Eid Garden Bouquet — Bleu",
    image: eid8,
    sizes: [
      { name: "Petite", price: "45" },
      { name: "Classic", price: "90" },
    ],
    sizeNote: "Pictured in Petite & Classic",
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */
const EidGrid = () => {
  return (
    <div className="eid-grid-page">
      {/* ── Eid Luxe Centrepiece ───────────────────────────────────────── */}
      <div className="eid-product-section">
        <div className="eid-product-header">
          <h3 className="eid-product-name">Eid Luxe Centrepiece</h3>
          <p className="eid-options-label">Options: Blush · Bleu</p>
          <p className="eid-product-desc">
            A refined floral centrepiece designed for your Eid table. Crafted in
            a low, elegant bowl, this arrangement features a soft,
            garden-inspired composition in carefully curated colourways — from
            delicate blush tones to fresh powder blues.
          </p>
          <p className="eid-product-desc">
            Perfect for hosting, gifting, or elevating your space this Eid. Each
            piece is designed to sit beautifully at the heart of any setting.
          </p>
        </div>

        <div className="eid-variants-grid">
          {centrepieceVariants.map((v) => (
            <div className="eid-variant-card" key={v.colour}>
              <div className="eid-placeholder-wrap">
                <img src={v.image} alt={v.subtitle} />
                {v.sizeNote && <span className="eid-image-tag">{v.sizeNote}</span>}
              </div>
              <div className="eid-variant-info">
                <p className="eid-variant-colour">{v.colour}</p>
                <p className="eid-variant-subtitle">{v.subtitle}</p>
                {v.sizes && <SizeList sizes={v.sizes} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="eid-divider" />

      {/* ── Eid Garden Bouquet ─────────────────────────────────────────── */}
      <div className="eid-product-section">
        <div className="eid-product-header">
          <h3 className="eid-product-name">Eid Garden Bouquet</h3>
          <p className="eid-options-label">
            Options: Blush Garden · Bleu Garden
          </p>
          <p className="eid-product-desc">
            A garden-inspired bouquet celebrating the season in two curated
            colourways. Available in three sizes to suit every occasion —
            whether intimate or grand.
          </p>
        </div>

        <div className="eid-variants-grid">
          {bouquetVariants.map((v) => (
            <div className="eid-variant-card" key={v.colour}>
              <div className="eid-placeholder-wrap">
                <img src={v.image} alt={v.subtitle} />
              </div>
              <div className="eid-variant-info">
                <p className="eid-variant-colour">{v.colour}</p>
                <p className="eid-variant-subtitle">{v.sizeNote}</p>
                <SizeList sizes={v.sizes} />
              </div>
            </div>
          ))}
        </div>

        {/* All sizes reference */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <p className="eid-product-desc" style={{ marginBottom: "6px" }}>
            Available sizes across both colourways:
          </p>
          <ul
            className="eid-sizes"
            style={{ maxWidth: "300px", margin: "0 auto" }}
          >
            <li>
              <span>Petite</span>
              <span className="eid-size-price">£45</span>
            </li>
            <li>
              <span>Classic</span>
              <span className="eid-size-price">£90</span>
            </li>
            <li>
              <span>Grande</span>
              <span className="eid-size-price">£150</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="eid-divider" />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <div className="eid-cta">
        <p>
          To place an order or enquire about the Eid Collection, please get in
          touch.
        </p>
        <a href="/#/about">Contact Us</a>
      </div>
    </div>
  );
};

export default EidGrid;
