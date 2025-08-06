import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F3]/95 backdrop-blur-sm border-b border-[#D9D9D9]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex flex-col items-center">
            <img 
              src="/orange.svg" 
              alt="Logo" 
              className="h-8 w-auto"
            />
            <div className="text-sm font-bold text-black mt-1 text-center" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
              دار الابتكار والتقنية
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="/#home" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                <span>Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="/#about" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                <span>About</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="/#services" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                <span>Solutions</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
              </a>
              <Link to="/blogs" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                <span>Blogs</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link to="/contact" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                <span>Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-[#FC5810] text-[#FFF9F3] px-6 py-2 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-[#FC5810] transition-colors duration-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFF9F3] border-t border-[#D9D9D9]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#home" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/#about" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/#services" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Solutions</a>
            <Link to="/blogs" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
            <Link to="/contact" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <button className="w-full mt-4 bg-[#FC5810] text-[#FFF9F3] px-6 py-2 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;