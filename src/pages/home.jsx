import HeroSection from '../components/HeroSection'
import EnquiryForm from "../components/EnquirySection"
import ServicesSection from '../components/ServicesSection'
import DestinationSection from '../components/DiscoverSection'
import GallerySection from '../components/GallerySection'
import Testimonials from '../components/TestimonialsSection'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <EnquiryForm />
      <ServicesSection />
      <DestinationSection />
      <GallerySection />
      <Testimonials />
    </div>
  )
}

export default Home