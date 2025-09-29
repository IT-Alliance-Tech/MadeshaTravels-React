import React from 'react'
import HeroSection from '../components/HeroSection'
import EnquirySection from '../components/enquirySection'
import ServicesSection from '../components/servicesSection'
import DiscoverSection from '../components/discoverSection'
import GallerySection from '../components/gallerySection'
import TestimonialsSection from '../components/testimonialsSection'


const Home = () => {
  return (
    <div><HeroSection />
    <EnquirySection />
      <ServicesSection />
      <DiscoverSection />
      <GallerySection />
      <TestimonialsSection />
     
      </div>
  )
}

export default Home