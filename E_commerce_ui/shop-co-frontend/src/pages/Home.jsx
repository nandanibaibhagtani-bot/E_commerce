import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F2F0F1] pt-10 pb-0 lg:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          
          {/* Text Content - Mobile par pehle aayega */}
          <div className="order-1 lg:order-1 w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black mb-6 leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600 mb-8 text-sm sm:text-base">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link to="/products" className="block sm:inline-block text-center bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition shadow-md">
              Shop Now
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 mb-10 border-t border-gray-300 pt-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">200+</h3>
                <p className="text-gray-500 text-xs sm:text-sm">International Brands</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">2,000+</h3>
                <p className="text-gray-500 text-xs sm:text-sm">High-Quality Products</p>
              </div>
              <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold">30,000+</h3>
                <p className="text-gray-500 text-xs sm:text-sm">Happy Customers</p>
              </div>
            </div>
          </div>
          
          {/* Image Section - Mobile par text ke baad aayegi */}
          <div className="order-2 lg:order-2 w-full relative flex justify-center items-end">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0_iVNRHAlSdrBjJ-loPOiF4RmsyOAG3_5hNu9D17JQ&s=10" 
              alt="Models" 
              className="w-full max-h-[400px] sm:max-h-[480px] lg:max-h-[550px] object-cover object-top mix-blend-multiply"
            />
          </div>

        </div>
      </section>

      {/* Brands Bar */}
      <section className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-white font-serif tracking-widest text-lg sm:text-2xl opacity-90">
          <span>VERSACE</span>
          <span>ZARA</span>
          <span>GUCCI</span>
          <span>PRADA</span>
          <span>Calvin Klein</span>
        </div>
      </section>
    </div>
  );
}