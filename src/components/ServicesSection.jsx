import { Bus, Car, Truck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Bus,
      title: "Bus Services",
      description: "Budget-friendly connectivity with extensive networks reaching even remote towns."
    },
    {
      icon: Car,
      title: "Car Services", 
      description: "Premium car rental services with professional drivers for business, travel, and personal needs."
    },
    {
      icon: Truck,
      title: "Tempo Traveller Services",
      description: "Comfortable and reliable Tempo Traveller rentals for group trips, office outings, and family tours."
    }
  ];

  const stats = [
    { number: "500+", label: "Holiday Package" },
    { number: "100", label: "Luxury Hotel" },
    { number: "7", label: "Premium Airlines" },
    { number: "2000+", label: "Happy Customer" }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-purple-600 font-semibold text-sm lg:text-base tracking-wide uppercase">SERVICES</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Our top value categories for you
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-md">
                <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Travel Point Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Tourism Poster */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-200 via-yellow-200 to-blue-200 rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg"
                  alt="Tourism Poster"
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <span className="text-purple-600 font-semibold text-sm lg:text-base tracking-wide uppercase">TRAVEL POINT</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 lg:mb-6">
                We helping you find your dream location
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                From serene hill stations to vibrant cities, we make it easy for you to explore, experience, and enjoy every corner of India with reliable travel services tailored to your needs.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1 lg:mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;