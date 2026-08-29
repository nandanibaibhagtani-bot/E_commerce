import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 text-center px-2">
        Sign up and get 20% off to your first order. {' '}
        <Link to="/signup" className="underline cursor-pointer font-medium">Sign Up Now</Link>
      </div>
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Hamburger & Logo */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-2xl focus:outline-none"
          >
            ☰
          </button>
          <Link to="/" className="text-2xl sm:text-3xl font-black tracking-tighter text-black">SHOP.CO</Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-black">Shop</Link>
          <Link to="/products" className="hover:text-black">On Sale</Link>
          <Link to="/products" className="hover:text-black">New Arrivals</Link>
          <Link to="/products" className="hover:text-black">Brands</Link>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="w-full bg-[#F0F0F0] rounded-full px-4 py-2.5 text-sm focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl">
          <Link to="/products">🛒</Link>
          <Link to="/signup">👤</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium hover:text-black">Shop</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium hover:text-black">On Sale</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium hover:text-black">New Arrivals</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium hover:text-black">Brands</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium hover:text-black">Sign Up</Link>
        </div>
      )}
    </header>
  );
}