const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg",
      alt: "Madesha Bus with Team",
      className: "col-span-2 row-span-2"
    },
    {
      src: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg",
      alt: "Luxury Bus Interior",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
      alt: "Cultural Experience",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
      alt: "Premium Bus Interior",
      className: "col-span-2 row-span-1"
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-purple-600 font-semibold text-sm lg:text-base tracking-wide uppercase">OUR GALLERY</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Discover the Beauty<br />We've Seen
          </h2>
        </div>

        {/* Gallery Grid - Mobile: Single Column, Desktop: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:contents">
            {/* Large image - spans 2x2 */}
            <div className="md:col-span-2 md:row-span-2 relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg h-full">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Top right image */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Middle right image */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Bottom spanning image */}
            <div className="md:col-span-2 relative group">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;