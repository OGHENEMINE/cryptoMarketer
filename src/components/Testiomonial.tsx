import React, { useEffect } from "react";

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Client Testimonials
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-lg mx-auto">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {/* Testimonial Cards */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-800 text-lg mb-4">
                      "CryptoConsult helped us navigate the complexities of the
                      crypto market and provided invaluable insights that led to
                      a significant increase in our portfolio's value. Highly
                      recommend their services!"
                    </p>
                    <p className="text-gray-600">
                      - John Doe, CEO of CryptoStartup
                    </p>
                  </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
