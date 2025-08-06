import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Zap, BarChart3, Menu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#FFF9F3] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 2px 2px, #FC5810 1px, transparent 1px)", backgroundSize: "50px 50px"}}></div>
      </div>
      
      <div className="relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 gap-20">
              
              {/* Left Column - Company Info */}
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="/orange.svg" 
                    alt="Logo" 
                    className="h-10 w-auto brightness-0 invert"
                  />
                  <div className="text-xl font-bold text-[#FFF9F3] mt-2" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
                    دار الابتكار والتقنية
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#FC5810] mb-4">Transforming Saudi Business Through Technology</h3>
                  <p className="text-[#D9D9D9] leading-relaxed max-w-md">
                    Your trusted partner for comprehensive IT solutions that drive growth, ensure security, and unlock innovation across the Kingdom.
                  </p>
                </div>

                <div className="space-y-2 text-[#D9D9D9]">
                  <p>King Abdullah Financial District, Riyadh, Saudi Arabia</p>
                  <p>info@dit-sa.com • +966 11 123 4567</p>
                  <p>24/7 Support Available</p>
                </div>

                <button className="bg-gradient-to-r from-[#FC5810] to-[#E63D1F] text-[#FFF9F3] px-6 py-3 rounded-full font-semibold hover:from-[#E63D1F] hover:to-[#FC5810] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Get Free Consultation <ArrowRight size={18} />
                </button>
              </div>

              {/* Right Column - Links */}
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-bold text-[#FC5810] mb-4 flex items-center gap-2">
                    <Zap size={18} />
                    Our Solutions
                  </h4>
                  <ul className="space-y-3 text-[#D9D9D9]">
                    <li><Link to="/services/it-solutions" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <Zap size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>IT Solutions & Management</span>
                    </Link></li>
                    <li><Link to="/services/business-apps" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <Users size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Business Apps Solutions</span>
                    </Link></li>
                    <li><Link to="/services/software-development" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <Zap size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Software Development</span>
                    </Link></li>
                    <li><Link to="/services/cybersecurity" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <Award size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Cybersecurity Solutions</span>
                    </Link></li>
                    <li><Link to="/services/cloud-devops" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <BarChart3 size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Cloud & DevOps</span>
                    </Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#FC5810] mb-4 flex items-center gap-2">
                    <Menu size={18} />
                    Quick Links
                  </h4>
                  <ul className="space-y-3 text-[#D9D9D9] mb-6">
                    <li><a href="/#home" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Home</span>
                    </a></li>
                    <li><a href="/#about" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>About Us</span>
                    </a></li>
                    <li><a href="/#portfolio" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Our Work</span>
                    </a></li>
                    <li><a href="/#contact" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Contact</span>
                    </a></li>
                  </ul>
                  
                  <div>
                    <h5 className="text-[#FC5810] font-semibold mb-3">Follow Us</h5>
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9]/10 flex items-center justify-center hover:bg-[#FC5810] transition-all duration-300 group" title="LinkedIn">
                        <Users size={14} className="text-[#D9D9D9] group-hover:text-white transition-colors duration-300" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9]/10 flex items-center justify-center hover:bg-[#FC5810] transition-all duration-300 group" title="Twitter">
                        <Star size={14} className="text-[#D9D9D9] group-hover:text-white transition-colors duration-300" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9]/10 flex items-center justify-center hover:bg-[#FC5810] transition-all duration-300 group" title="Instagram">
                        <Award size={14} className="text-[#D9D9D9] group-hover:text-white transition-colors duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Optimized Layout */}
        <div className="lg:hidden">
          <div className="px-6 py-8">
            {/* Logo & Company Name */}
            <div className="flex flex-col items-center mb-6">
              <img 
                src="/orange.svg" 
                alt="Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <div className="text-lg font-bold text-[#FFF9F3] mt-2" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
                دار الابتكار والتقنية
              </div>
            </div>

            {/* Two Column Links for Mobile */}
            <div className="grid grid-cols-2 gap-6 mb-6 items-start">
              {/* Left Column - Solutions */}
              <div className="text-center">
                <h4 className="text-[#FC5810] font-bold mb-3 flex items-center justify-center gap-2">
                  <Zap size={16} className="flex-shrink-0" />
                  <span>Solutions</span>
                </h4>
                <ul className="space-y-2 text-[#D9D9D9] text-sm">
                  <li><Link to="/services/it-solutions" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <Zap size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                    <span>IT Solutions</span>
                  </Link></li>
                  <li><Link to="/services/business-apps" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <Users size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                    <span>Business Apps</span>
                  </Link></li>
                  <li><Link to="/services/software-development" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <Zap size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                    <span>Development</span>
                  </Link></li>
                  <li><Link to="/services/cybersecurity" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <Award size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                    <span>Cybersecurity</span>
                  </Link></li>
                  <li><Link to="/services/cloud-devops" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <BarChart3 size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                    <span>Cloud & DevOps</span>
                  </Link></li>
                </ul>
              </div>

              {/* Right Column - Navigation */}
              <div className="text-center">
                <h4 className="text-[#FC5810] font-bold mb-3 flex items-center justify-center gap-2">
                  <Menu size={16} className="flex-shrink-0" />
                  <span>Links</span>
                </h4>
                <ul className="space-y-2 text-[#D9D9D9] text-sm">
                  <li><a href="/#home" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                    <span>Home</span>
                  </a></li>
                  <li><a href="/#about" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                    <span>About</span>
                  </a></li>
                  <li><a href="/#portfolio" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                    <span>Portfolio</span>
                  </a></li>
                  <li><a href="/#contact" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                    <span>Contact</span>
                  </a></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center text-[#D9D9D9] text-sm mb-4">
              <p>Riyadh • info@dit-sa.com • +966 11 123 4567</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9]/10 flex items-center justify-center hover:bg-[#FC5810] transition-all duration-300 group" title="LinkedIn">
                <Users size={14} className="text-[#D9D9D9] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9]/10 flex items-center justify-center hover:bg-[#FC5810] transition-all duration-300 group" title="Twitter">
                <Star size={14} className="text-[#D9D9D9] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#D9D9D9]/10 flex items-center justify-center hover:bg-[#FC5810] transition-all duration-300 group" title="Instagram">
                <Award size={14} className="text-[#D9D9D9] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D9D9D9]/10 bg-black/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[#D9D9D9] text-xs">
              <p>&copy; 2025 DIT - Dar Al Ibtikar Wa Al Taqnia. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#FC5810] transition-colors duration-300">Privacy</a>
                <a href="#" className="hover:text-[#FC5810] transition-colors duration-300">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;