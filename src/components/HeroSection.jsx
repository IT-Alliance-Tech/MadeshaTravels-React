import { Plane, Users } from 'lucide-react';
import { useState } from 'react';

// Images
import hillImg from "../../public/hero1.png";
import gatewayImg from "../../public/hero2.png";
import tajmahalImg from "../../public/nature1.png";
import mapImg from "../../public/map2.png";

// Icons
import suitcaseIcon from "../assets/icons/icon.png";
import arrowIcon from "../assets/icons/object.png";
import userIcon from "../assets/icons/add-user 1.png";

const HeroSection = () => {
  return (
    <section id="top-destination" className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <button className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-6 py-3 rounded-xl font-medium hover:bg-purple-200 transition-colors">
              <span>Explore Ultimate India!</span>
              <img src={suitcaseIcon} alt="Suitcase" className="w-5 h-5" />
            </button>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-black">Travel </span>
              <span className="text-purple-600">top</span>
              <br />
              <span className="text-purple-600">destination </span>
              <span className="text-black">of</span>
              <br />
              <span className="text-black">India</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              We always make our customer happy by providing as many choices as possible
            </p>
            
            {/* Decorative arrows */}
            <div className="flex flex-col space-y-1 opacity-40">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-1 ml-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-1 ml-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-1 ml-6">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative w-full max-w-lg mx-auto">
            {/* Background map image */}
            <div className="absolute inset-0 -top-10 -right-10 w-full h-full z-0">
              <img 
                src={mapImg} 
                alt="World Map" 
                className="w-full h-full object-contain opacity-30"
              />
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-3 h-96">
              {/* Left Column */}
              <div className="space-y-3">
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-44">
                  <img src={hillImg} alt="Hill Station" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-44">
                  <img src={tajmahalImg} alt="Nature" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Right Column */}
              <div className="relative">
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-full">
                  <img src={gatewayImg} alt="Gateway of India" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white text-gray-800 px-3 py-2 rounded-xl text-sm font-semibold shadow-lg">
                      Top Places
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Profile Icon */}
            <div className="absolute -bottom-8 right-6 z-20">
              <div className="w-14 h-14 bg-purple-300 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;