import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import "./Menu.css";

const coffeeItems = [
  { item: "espresso", regular: "3.5" },
  { item: "cortado", regular: "3.9" },
  { item: "flat white", regular: "3.9" },
  { item: "americano", regular: "3.5", large: "4.1" },
  { item: "mocha", regular: "4.2", large: "4.8" },
  { item: "macchiato", regular: "4.4", large: "5.0" },
  { item: "latte", regular: "3.9", large: "4.5" },
  { item: "cappuchino", regular: "3.9", large: "4.5" },
];

const latteItems = [
  { item: "chai latte", regular: "4.5", large: "5.1" },
  { item: "dirty chai latte", regular: "4.6", large: "5.2" },
  { item: "spanish latte", regular: "5.2", large: "5.8" },
  { item: "brown sugar latte", regular: "5.6", large: "6.2" },
  { item: "pistachio latte", regular: "5.6", large: "6.2" },
  { item: "caramelised banana latte", regular: "5.6", large: "6.2" },
];

const hotChocolateItems = [
  { item: "belgian hot chocolate", regular: "3.9", large: "4.5" },
  { item: "white chocolate", regular: "3.9", large: "4.5" },
  { item: "terry's orange", regular: "4.8", large: "5.5" },
  { item: "kinder bueno", regular: "4.8", large: "5.5" },
  { item: "bounty", regular: "4.8", large: "5.5" },
];

const icedDrinks = [
  { item: "iced coffee", price: "4.9" },
  { item: "iced mocha", price: "5.3" },
  { item: "iced frappuccino", price: "5.7" },
  { item: "iced chai latte", price: "5.9" },
  { item: "iced spanish latte", price: "5.9" },
  { item: "iced brown sugar latte", price: "6.2" },
  { item: "iced pistachio latte", price: "6.2" },
  { item: "iced caramelised banana latte", price: "6.3" },
  { item: "iced tiramisu latte", price: "6.3" },
];

const teas = [
  { item: "english tea", regular: "3.2", large: "3.8" },
  { item: "green tea", regular: "3.2", large: "3.8" },
  { item: "mint tea", regular: "3.2", large: "3.8" },
  { item: "karak tea", regular: "3.2", large: "3.8" },
];

const matchaClassic = [
  { item: "white chocolate", price: "5.5" },
  { item: "strawberry", price: "5.5" },
  { item: "vanilla", price: "5.5" },
  { item: "blueberry", price: "5.5" },
  { item: "mango", price: "5.5" },
];

const matchaSpecial = [
  { item: "strawberry & white chocolate", price: "5.8" },
  { item: "blueberry & white chocolate", price: "5.8" },
  { item: "banana bread", price: "5.8" },
];

const extraItems = [
  { item: "syrups", price: "0.3" },
  { item: "whipped cream", price: "0.5" },
  { item: "cold foam", price: "0.6" },
  { item: "bottled water", price: "2.0" },
];

const milkOptions = ["whole", "skimmed", "oat, almond", "no extra charge"];

const syrupOptions = [
  "caramel hazelnut",
  "vanilla, salted caramel",
  "white chocolate",
  "+0.3",
];

const matchaPowders = [
  "organic, red velvet",
  "vanilla & honey",
  "no extra charge",
];

const bottomSections = [
  {
    title: "cookies",
    items: [
      { item: "chocolate chip", price: "3.5" },
      { item: "matcha, raspberry & coconut gf", price: "3.8" },
      { item: "pistachio & white chocolate", price: "3.8" },
      { item: "strawberry & cream", price: "3.8" },
    ],
  },
  {
    title: "muffins",
    items: [
      { item: "blueberry", price: "4.5" },
      { item: "strawberry", price: "4.5" },
      { item: "chocolate & vanilla", price: "4.5" },
      { item: "triple chocolate", price: "4.5" },
    ],
  },
  {
    title: "loaf cake",
    items: [
      { item: "lemon drizzle", price: "5.3" },
      { item: "banana bread gf ve", price: "4.5" },
      { item: "carrot cake", price: "4.5" },
      { item: "matcha, almond & raspberry gf", price: "5.3" },
    ],
  },
  {
    title: "traybakes",
    items: [
      { item: "classic brownie", price: "4.0" },
      { item: "millionaire shortbread", price: "4.0" },
      { item: "salted caramel brownie", price: "4.5" },
      { item: "raspberry & white chocolate blondie", price: "4.5" },
    ],
  },
  {
    title: "pastries",
    items: [
      { item: "pain au chocolat", price: "3.0" },
      { item: "butter croissant", price: "3.8" },
      { item: "cinnamon bun", price: "4.0" },
      { item: "chocolate croissant", price: "4.3" },
      { item: "almond croissant", price: "4.3" },
      { item: "banoffee pie", price: "4.5" },
    ],
  },
  {
    title: "trompe-l'oeil",
    items: [
      { item: "illusion dessert inspired by real fruits", price: "10.0" },
    ],
  },
];

const TriplePriceSection = ({ title, items }) => (
  <section className="menu-block">
    <h2 className="menu-block-title">{title}</h2>
    <div className="menu-price-grid" role="table" aria-label={title}>
      <div className="menu-price-row menu-price-row--head" role="row">
        <div
          className="menu-price-cell menu-price-cell--item"
          role="columnheader"
        />
        <div className="menu-price-cell" role="columnheader">
          regular
        </div>
        <div className="menu-price-cell" role="columnheader">
          large
        </div>
      </div>

      {items.map((entry) => (
        <div className="menu-price-row" role="row" key={entry.item}>
          <div className="menu-price-cell menu-price-cell--item" role="cell">
            {entry.item}
          </div>
          <div className="menu-price-cell" role="cell">
            {entry.regular || ""}
          </div>
          <div className="menu-price-cell" role="cell">
            {entry.large || ""}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SinglePriceSection = ({ title, items, note }) => (
  <section className="menu-block menu-block--single">
    <div className="menu-block-head">
      <h2 className="menu-block-title">{title}</h2>
      {note ? <span>{note}</span> : null}
    </div>
    <div className="menu-single-list" role="table" aria-label={title}>
      {items.map((entry) => (
        <div className="menu-single-row" role="row" key={entry.item}>
          <div className="menu-single-item" role="cell">
            {entry.item}
          </div>
          <div className="menu-single-price" role="cell">
            {entry.price}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const OptionList = ({ title, items }) => (
  <section className="menu-extra-group">
    <h3>{title}</h3>
    <ul>
      {items.map((entry) => (
        <li key={entry}>{entry}</li>
      ))}
    </ul>
  </section>
);

const Menu = () => {
  return (
    <div className="menu-page">
      <Header />

      <main className="menu-main">
        <div className="menu-page-heading">
          <h1>menu</h1>
        </div>

        <section className="menu-sheet-wrap">
          <article className="menu-sheet">
            <div className="menu-top-grid">
              <div className="menu-column">
                <TriplePriceSection title="coffee" items={coffeeItems} />
                <TriplePriceSection
                  title="hot chocolate"
                  items={hotChocolateItems}
                />
                <TriplePriceSection title="teas" items={teas} />
              </div>

              <div className="menu-column">
                <TriplePriceSection title="latte" items={latteItems} />
                <SinglePriceSection
                  title="iced drinks"
                  items={icedDrinks}
                  note="12oz"
                />

                <section className="menu-block menu-block--matcha">
                  <div className="menu-block-head">
                    <h2 className="menu-block-title">matcha</h2>
                    <span>12oz</span>
                  </div>

                  <div className="menu-matcha-grid">
                    <div
                      className="menu-single-list"
                      role="table"
                      aria-label="matcha classic"
                    >
                      {matchaClassic.map((entry) => (
                        <div
                          className="menu-single-row"
                          role="row"
                          key={entry.item}
                        >
                          <div className="menu-single-item" role="cell">
                            {entry.item}
                          </div>
                          <div className="menu-single-price" role="cell">
                            {entry.price}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="menu-matcha-meta">12oz</div>
                      <div
                        className="menu-single-list"
                        role="table"
                        aria-label="matcha special"
                      >
                        {matchaSpecial.map((entry) => (
                          <div
                            className="menu-single-row"
                            role="row"
                            key={entry.item}
                          >
                            <div className="menu-single-item" role="cell">
                              {entry.item}
                            </div>
                            <div className="menu-single-price" role="cell">
                              {entry.price}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <section className="menu-extras">
              <SinglePriceSection title="extras" items={extraItems} />
              <OptionList title="milk options" items={milkOptions} />
              <OptionList title="syrups" items={syrupOptions} />
              <OptionList title="matcha powder" items={matchaPowders} />
            </section>

            <section className="menu-callout-card">
              <div className="menu-callout-title">
                <span>le chocolat de FLEURÉ</span>
                <strong>15.00</strong>
              </div>
              <p>
                A rich, spoon-thick Parisian hot chocolate inspired by historic
                cafes of Paris, served with fresh strawberries and a bowl of
                lightly whipped cream. Designed to share for two.
              </p>
            </section>

            <section className="menu-bottom-grid">
              {bottomSections.map((section) => (
                <section className="menu-bottom-block" key={section.title}>
                  <h2 className="menu-block-title">{section.title}</h2>
                  <div
                    className="menu-single-list"
                    role="table"
                    aria-label={section.title}
                  >
                    {section.items.map((entry) => (
                      <div
                        className="menu-single-row"
                        role="row"
                        key={entry.item}
                      >
                        <div className="menu-single-item" role="cell">
                          {entry.item}
                        </div>
                        <div className="menu-single-price" role="cell">
                          {entry.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </section>

            <footer className="menu-sheet-footer">
              <div className="menu-brand">FLEURÉ</div>
            </footer>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
