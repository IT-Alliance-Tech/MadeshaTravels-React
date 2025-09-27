import { useState } from 'react';

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: 'Hello, I am interested in booking a hotel...'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Enquiry Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">ENQUIRY</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm lg:text-base"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm lg:text-base"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm lg:text-base"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none text-sm lg:text-base"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 lg:py-4 rounded-xl transition-colors duration-200 transform hover:scale-105 text-sm lg:text-base"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right side - Registration CTA */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Enquire Now
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Register now to get
              <br />
              <span className="text-blue-500">started with ease.</span>
            </h2>
            
            <div className="pt-4 lg:pt-8">
              <div className="inline-flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">→</span>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 text-base lg:text-lg">
                    Start your journey with us today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;