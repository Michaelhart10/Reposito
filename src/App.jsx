

import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts"; 
import ProductCard from "./components/ProductCard/ProductCard";
import CategorySection from "./components/CategorySection/CategorySection";
import BrandSection from "./components/BrandSection/BrandSection";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      {/* <ProductCard/>   */}
      <CategorySection/>
      <BrandSection/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;