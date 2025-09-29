import Footer from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ContactUs from './pages/contactUs';
import ServiceDetails from './pages/serviceDetails';
import Faq from './pages/faq';
import WhyUs from './pages/whyUs';
import PartnerSection from './pages/partner';
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ marginTop: "35px" }} className="mt-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path='/serviceDetails' element={<ServiceDetails />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/whyUs' element={<WhyUs />} />
          <Route path='/partner' element={<PartnerSection />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;