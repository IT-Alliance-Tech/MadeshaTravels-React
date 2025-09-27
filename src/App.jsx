import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DiscoverSection from './components/DiscoverSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DiscoverSection />
      <GallerySection />
      <TestimonialsSection />
      <EnquirySection />
      <Footer />
    </div>
  );
}

export default App;