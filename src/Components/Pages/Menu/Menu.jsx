import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import "./Menu.css";

const hotDrinks = [
  { item: "Espresso", r: "2.50", l: "-" },
  { item: "Flat White", r: "4.20", l: "-" },
  { item: "Americano", r: "3.50", l: "4.40" },
  { item: "Latte", r: "4.40", l: "5.00" },
  { item: "Cappuccino", r: "4.40", l: "5.00" },
  { item: "Spanish Latte", r: "5.20", l: "5.80" },
  { item: "Brown Sugar Latte", r: "5.20", l: "5.80" },
  { item: "Pistachio & White Choc Latte", r: "5.60", l: "6.20" },
  { item: "Chai Latte", r: "4.90", l: "5.50" },
  { item: "Caramelised Banana Latte", r: "5.60", l: "6.20" },
  { item: "Macchiato", r: "3.80", l: "4.40" },
  { item: "Cortado", r: "3.50", l: "-" },
  { item: "Mocha", r: "4.80", l: "5.20" },
  { item: "Karak", r: "3.20", l: "4.00" },
  { item: "Luxury Hot Chocolate", r: "4.75", l: "5.50" },
];

const matchaFlavours = [
  { item: "White Choc", price: "5.50" },
  { item: "Strawberry", price: "5.50" },
  { item: "Vanilla", price: "5.50" },
  { item: "Mango", price: "5.50" },
  { item: "Blueberry", price: "5.50" },
  { item: "Strawberry & White Choc", price: "5.75" },
  { item: "Blueberry & White Choc", price: "5.75" },
  { item: "Banana Bread", price: "5.75" },
];

const icedDrinks = [
  { item: "Iced Coffee", price: "2.90" },
  { item: "Iced Spanish Latte", price: "5.90" },
  { item: "Iced Brown Sugar Latte", price: "5.90" },
  { item: "Iced Chai Latte", price: "5.70" },
  { item: "Iced Pistachio & White Choc Latte", price: "6.30" },
  { item: "Iced Caramelised Banana Shake", price: "6.30" },
];

const teas = [
  { item: "English", price: "4.00" },
  { item: "Green Mint", price: "4.00" },
];

const bakedWithLove = [
  {
    category: "Muffins",
    items: [
      { item: "Blueberry", price: "4.50" },
      { item: "Strawberry", price: "4.50" },
      { item: "Chocolate and Vanilla", price: "4.25" },
    ],
  },
  {
    category: "Cookies",
    items: [
      { item: "Chocolate Chip", price: "2.95" },
      { item: "Matcha, Raspberry and Coconut", price: "3.75" },
      { item: "Pistachio and White Chocolate", price: "3.75" },
      { item: "Strawberry and Cream", price: "3.75" },
    ],
  },
  {
    category: "Loaf Cake Slices",
    items: [
      { item: "Carrot Cake", price: "4.50" },
      { item: "Matcha, Almond and Raspberry", price: "5.25" },
      { item: "Banana Bread", price: "4.25" },
    ],
  },
  {
    category: "Croissant",
    items: [
      { item: "Butter Croissant", price: "3.75" },
      { item: "Almond Croissant", price: "4.50" },
      { item: "Pain Au Chocolate", price: "4.25" },
      { item: "Cinnamon Bun", price: "3.99" },
    ],
  },
  {
    category: "Trompe L'oeil",
    items: [{ item: "Trompe L'oeil", price: "9.99" }],
  },
];

const Menu = () => {
  return (
    <div className="menu-page">
      <Header />

      <main className="menu-main">
        <header className="menu-hero">
          <div className="menu-hero-inner">
            <p className="menu-eyebrow">Fleure Café</p>
            <h1 className="menu-title">Menu</h1>
            <p className="menu-subtitle">A simple, curated selection.</p>
          </div>
        </header>

        <section className="menu-section">
          <div className="menu-section-inner">
            <h2 className="menu-heading">Hot Drinks</h2>
            <div className="menu-table" role="table" aria-label="Hot drinks">
              <div className="menu-row menu-row--head" role="row">
                <div className="menu-cell menu-item" role="columnheader">
                  Drink
                </div>
                <div className="menu-cell menu-price" role="columnheader">
                  R
                </div>
                <div className="menu-cell menu-price" role="columnheader">
                  L
                </div>
              </div>

              {hotDrinks.map((row) => (
                <div className="menu-row" role="row" key={row.item}>
                  <div className="menu-cell menu-item" role="cell">
                    {row.item}
                  </div>
                  <div className="menu-cell menu-price" role="cell">
                    {row.r !== "-" ? `£${row.r}` : "-"}
                  </div>
                  <div className="menu-cell menu-price" role="cell">
                    {row.l !== "-" ? `£${row.l}` : "-"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-section menu-section--alt">
          <div className="menu-section-inner">
            <h2 className="menu-heading">Matcha (Hot/Iced)</h2>
            <p className="menu-note">
              Powder options: organic, red velvet, vanilla and honey
            </p>

            <div className="menu-table" role="table" aria-label="Matcha">
              <div className="menu-row menu-row--head" role="row">
                <div className="menu-cell menu-item" role="columnheader">
                  Flavour
                </div>
                <div className="menu-cell menu-price" role="columnheader">
                  Price
                </div>
              </div>

              {matchaFlavours.map((row) => (
                <div className="menu-row" role="row" key={row.item}>
                  <div className="menu-cell menu-item" role="cell">
                    {row.item}
                  </div>
                  <div className="menu-cell menu-price" role="cell">
                    £{row.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-section">
          <div className="menu-section-inner">
            <h2 className="menu-heading">Iced Drinks</h2>

            <div className="menu-table" role="table" aria-label="Iced drinks">
              <div className="menu-row menu-row--head" role="row">
                <div className="menu-cell menu-item" role="columnheader">
                  Drink
                </div>
                <div className="menu-cell menu-price" role="columnheader">
                  Price
                </div>
              </div>

              {icedDrinks.map((row) => (
                <div className="menu-row" role="row" key={row.item}>
                  <div className="menu-cell menu-item" role="cell">
                    {row.item}
                  </div>
                  <div className="menu-cell menu-price" role="cell">
                    £{row.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="menu-two-col">
              <div>
                <h3 className="menu-subhead">Milk options (no extra charge)</h3>
                <ul className="menu-list">
                  <li>Whole</li>
                  <li>Skimmed</li>
                  <li>Oat</li>
                  <li>Almond</li>
                </ul>
              </div>
              <div>
                <h3 className="menu-subhead">Syrups (no extra charge)</h3>
                <ul className="menu-list">
                  <li>Caramel</li>
                  <li>Hazelnut</li>
                  <li>Vanilla</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="menu-section">
          <div className="menu-section-inner">
            <h2 className="menu-heading">Baked with love</h2>

            {bakedWithLove.map((group) => (
              <div className="menu-category" key={group.category}>
                <h3 className="menu-subhead">{group.category}</h3>

                <div
                  className="menu-table menu-table--two-col"
                  role="table"
                  aria-label={`${group.category} items`}
                >
                  {group.items.map((row) => (
                    <div className="menu-row" role="row" key={row.item}>
                      <div className="menu-cell menu-item" role="cell">
                        {row.item}
                      </div>
                      <div className="menu-cell menu-price" role="cell">
                        £{row.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-section menu-section--alt">
          <div className="menu-section-inner">
            <h2 className="menu-heading">Teas</h2>

            <div className="menu-table" role="table" aria-label="Teas">
              <div className="menu-row menu-row--head" role="row">
                <div className="menu-cell menu-item" role="columnheader">
                  Tea
                </div>
                <div className="menu-cell menu-price" role="columnheader">
                  Price
                </div>
              </div>

              {teas.map((row) => (
                <div className="menu-row" role="row" key={row.item}>
                  <div className="menu-cell menu-item" role="cell">
                    {row.item}
                  </div>
                  <div className="menu-cell menu-price" role="cell">
                    £{row.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="menu-callout">
              <h3 className="menu-subhead">Parisian Style Hot Chocolate</h3>
              <p className="menu-note">
                Served with a bowl of whipped cream and strawberries
              </p>
              <p className="menu-callout-price">£15.00</p>
            </div>
          </div>
        </section>

        <section className="menu-footer-note">
          <div className="menu-section-inner">
            <p className="menu-fineprint">
              Prices are shown in GBP (£). Availability may vary.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
