import React from "react";
import Header from "../../Header/Navbar";
import Footer from "../../Footer/Footer";
import EidBanner from "./EidBanner";
import EidGallery from "./EidGallery";
import EidGrid from "./EidGrid";
import Title from "../../Title/Title";
import ProductGrid from "../Home/ProductGrid";

const EidCollection = () => {
  return (
    <div>
      <Header />
      <EidBanner />
      <EidGallery />
      <EidGrid />
      <Title title="Other Products" />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default EidCollection;
