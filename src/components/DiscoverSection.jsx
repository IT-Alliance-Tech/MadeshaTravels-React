import { MapPin, Calendar, CalendarDays } from 'lucide-react';

const DiscoverSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Smart Destinations",
      description: "Discover locations curated just for you with our intelligent suggestions.",
      color: "bg-red-500"
    },
    {
      icon: Calendar,
      title: "Schedule your trip",
      description: "It has roots in a piece of classical.",
      color: "bg-yellow-500"
    },
    {
      icon: CalendarDays,
      title: "Easy Planner",
      description: "Schedule your trips with a simple calendar that fits your lifestyle.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="discover" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <span className="text-purple-600 font-semibold text-sm lg:text-base tracking-wide uppercase">KEY FEATURES</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4 lg:mb-6">
                We offer best services
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 lg:mb-12">
                From seamless bookings and comfortable stays to safe travel and personalized guidance, we ensure every part of your journey is handled with care and excellence.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 lg:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"
                  alt="Beautiful Beach Destination"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300 rounded-full opacity-70"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;