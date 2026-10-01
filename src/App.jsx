import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import CategorySection from './components/CategorySection/CategorySection';
import BrandSection from './components/BrandSection/BrandSection';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';

const HomePage = () => (
  <>
    <Hero />
    <FeaturedProducts />
    <CategorySection />
    <BrandSection />
    <CTA />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;