import React from 'react'
import HeroSection from '../components/HeroSection'
import EnquiryForm from '../components/enquirySection'
import ServicesSection from '../components/ServicesSection'
import DestinationSection from '../components/discoverSection'
import GallerySection from '../components/gallerySection'
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