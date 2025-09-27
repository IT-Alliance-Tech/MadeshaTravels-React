import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rahul",
      role: "Photographer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      text: "Thanks to Madesha Tour and Travels, we finally visited Kashmir! The snow in Gulmarg and the hospitality were unforgettable. A truly hassle-free trip."
    },
    {
      name: "Chaya",
      role: "Dancer", 
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      rating: 5,
      text: "We went to Andaman for our anniversary, and the beach resort was amazing. Scuba diving was once-in-a-lifetime! A big thank you to Madesha Tour and Travels for the smooth planning."
    },
    {
      name: "Priya",
      role: "Teacher",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      rating: 5,
      text: "Our family trip to Kerala was perfectly organized. The backwaters, hill stations, and cultural experiences exceeded our expectations. Highly recommend Madesha!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-purple-600 font-semibold text-sm lg:text-base tracking-wide uppercase">TESTIMONIALS</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Trust our clients
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Profile Image */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mx-auto mb-6 lg:mb-8">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Role */}
            <div className="mb-4 lg:mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                <span className="text-purple-600">{testimonials[currentTestimonial].name}</span> / {testimonials[currentTestimonial].role}
              </h3>
            </div>

            {/* Rating */}
            <div className="flex justify-center space-x-1 mb-6 lg:mb-8">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;