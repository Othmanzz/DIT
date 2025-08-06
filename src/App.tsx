import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, Star, Users, Award, Zap, Palette, Code, Megaphone, BarChart3, Quote, Play, Pause } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [serviceTouchStart, setServiceTouchStart] = useState(0);
  const [serviceTouchEnd, setServiceTouchEnd] = useState(0);

  const projects = [
    {
      title: "Corporate Headquarters",
      category: "Integrated Security System",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Smart Manufacturing",
      category: "Access Control & Automation",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Luxury Residential",
      category: "Home Automation & Security",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const services = [
    {
      icon: Zap,
      title: "Smart Surveillance",
      description: "See everything, everywhere. Our intelligent CCTV systems offer crystal-clear imaging and AI-powered analytics for proactive security.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]"
    },
    {
      icon: Users,
      title: "Total Access Control",
      description: "Your space, your rules. From keycards to biometrics, our solutions ensure only the right people get in.",
      bgColor: "bg-[#FC5810]",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FFF9F3]"
    },
    {
      icon: Award,
      title: "Seamless Automation",
      description: "Welcome to convenience. Automatic doors, gates, and barriers for effortless access.",
      bgColor: "bg-[#E63D1F]",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FFF9F3]"
    },
    {
      icon: BarChart3,
      title: "Network Infrastructure",
      description: "Robust cabling and network solutions for seamless connectivity.",
      bgColor: "bg-[#E63D1F]",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FFF9F3]"
    },
    {
      icon: Code,
      title: "Integrated Systems",
      description: "A single, unified command center. We connect your security, access, and automation systems into one intelligent platform.",
      bgColor: "bg-[#D9D9D9]",
      textColor: "text-black",
      iconColor: "text-[#FC5810]"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
    
    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Service carousel touch handlers
  const handleServiceTouchStart = (e: React.TouchEvent) => {
    setServiceTouchStart(e.targetTouches[0].clientX);
    setServiceTouchEnd(0);
  };

  const handleServiceTouchMove = (e: React.TouchEvent) => {
    setServiceTouchEnd(e.targetTouches[0].clientX);
  };

  const handleServiceTouchEnd = () => {
    if (!serviceTouchStart || !serviceTouchEnd) return;
    
    const distance = serviceTouchStart - serviceTouchEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe && currentService < services.length - 1) {
      nextService();
    }
    if (isRightSwipe && currentService > 0) {
      prevService();
    }
    
    // Reset touch values
    setServiceTouchStart(0);
    setServiceTouchEnd(0);
  };
  const nextProject = () => {
    setIsAutoPlay(false);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIsAutoPlay(false);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextService = () => {
    setCurrentService((prev) => Math.min(prev + 1, services.length - 1));
  };

  const prevService = () => {
    setCurrentService((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    let ticking = false;
    let scrollTimeout: number;
    
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 100);
      
      if (!ticking) {
        requestAnimationFrame(() => {
          const elements = document.querySelectorAll('.animate-on-scroll:not(.animate-in)');
          const viewportHeight = window.innerHeight;
          const threshold = viewportHeight * 0.85;
          
          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < threshold) {
              element.classList.add('animate-in');
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F3]/95 backdrop-blur-sm border-b border-[#D9D9D9]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="/orange.svg" 
                alt="Logo" 
                className="h-8 w-auto"
              />
              <div className="text-xl font-bold text-black" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
                دار الابتكار والتقنية
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                  <span>Home</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#about" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                  <span>About</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#services" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                  <span>Solutions</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#portfolio" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                  <span>Installations</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#contact" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                  <span>Contact</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
                </a>
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
              <a href="#home" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Solutions</a>
              <a href="#portfolio" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Installations</a>
              <a href="#contact" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="w-full mt-4 bg-[#FC5810] text-[#FFF9F3] px-6 py-2 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">

        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative md:z-10 z-20">
          {/* Animated DIT Logo for All Devices */}
          <div className="mb-8 pb-4 -mt-16 md:mt-0 flex justify-center animate-in">
            <div className="relative">
              <img 
                src="/orange.svg" 
                alt="DIT Logo" 
                className="h-20 md:h-32 w-auto animate-bounce"
                style={{ animationDuration: '3s' }}
              />
              {/* Orbiting Dots */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="relative w-full h-full">
                  <div className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#FC5810] rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#FC5810] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#FC5810] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#FC5810] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              {/* Pulsing Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-[#FC5810]/20 animate-ping" style={{ animationDuration: '2s' }}></div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-in -mt-4 md:mt-0">
            <span className="inline-block transform hover:rotate-3 transition-transform duration-500">Securing</span>{' '}
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">Your</span>{' '}
            <span className="inline-block transform hover:-rotate-2 transition-transform duration-500">Future.</span><br />
            <span className="text-[#FC5810] relative inline-block">
              <span className="inline-block transform hover:skew-x-6 transition-transform duration-400">Automating</span>{' '}
              <span className="inline-block transform hover:scale-125 transition-transform duration-300">Your</span>{' '}
              <span className="inline-block transform hover:rotate-6 transition-transform duration-500">World.</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent transform scale-x-0 hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 animate-in px-4" style={{ animationDelay: '0.2s' }}>
            We design and deploy state-of-the-art technology solutions, from intelligent surveillance to seamless automation, empowering you to take full control of your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in" style={{ animationDelay: '0.4s' }}>
            <button className="bg-[#FC5810] text-[#FFF9F3] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Design My Solution <ArrowRight size={20} />
            </button>
            <button className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-black hover:text-[#FFF9F3] transition-all duration-300 transform hover:scale-105">
              View Our Systems
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">Our <span className="text-[#FC5810]">Solutions</span></h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We deliver cutting-edge security and automation technology that transforms how you protect and manage your environment.
            </p>
          </div>

          {/* Trending Bento Grid with Modern Effects */}
          <div className="hidden md:grid grid-cols-12 gap-6 animate-on-scroll">
            {/* Large Hero Card - Smart Surveillance */}
            <div className="col-span-6 lg:col-span-6 group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white rounded-[2rem] p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01]">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FC5810]/5 via-transparent to-[#FC5810]/5 animate-pulse"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#FC5810] to-[#E63D1F] rounded-[2rem] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex p-4 bg-[#FC5810]/10 rounded-2xl mb-6 group-hover:bg-[#FC5810]/20 transition-colors duration-500">
                  <Zap size={32} className="text-[#FC5810] group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-[#FC5810] transition-colors duration-500">
                  Smart Surveillance
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  See everything, everywhere. Our intelligent CCTV systems offer crystal-clear imaging and AI-powered analytics for proactive security.
                </p>
                <div className="flex items-center gap-2 text-[#FC5810] group-hover:gap-4 transition-all duration-500">
                  <span className="font-semibold">Explore Solution</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FC5810]/10 rounded-full blur-xl group-hover:bg-[#FC5810]/20 transition-colors duration-500"></div>
            </div>

            {/* Medium Card - Access Control */}
            <div className="col-span-6 lg:col-span-6 group relative bg-gradient-to-br from-[#FC5810] to-[#E63D1F] text-white rounded-[2rem] p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01]">
              {/* Mesh Gradient */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-md animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse animation-delay-1000"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <Users size={32} className="text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Total Access Control
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Your space, your rules. From keycards to biometrics, our solutions ensure only the right people get in.
                </p>
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full group-hover:bg-white/30 transition-all duration-500">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {/* Small Card 1 - Automation */}
            <div className="col-span-6 md:col-span-4 group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E63D1F]/0 to-[#E63D1F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex p-3 bg-[#E63D1F]/10 rounded-xl group-hover:bg-[#E63D1F]/20 transition-colors duration-500">
                  <Award size={24} className="text-[#E63D1F] group-hover:rotate-12 transition-transform duration-500" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E63D1F] transition-colors duration-500">
                  Seamless Automation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Welcome to convenience. Automatic doors, gates, and barriers for effortless access.
                </p>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E63D1F]/5 rounded-full blur-lg group-hover:scale-125 transition-transform duration-300"></div>
            </div>

            {/* Small Card 2 - Network */}
            <div className="col-span-6 md:col-span-4 group relative bg-gradient-to-br from-[#E63D1F] to-[#FC5810] text-white rounded-[2rem] p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
              </div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors duration-500">
                  <BarChart3 size={24} className="text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">
                  Network Infrastructure
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Robust cabling and network solutions for seamless connectivity.
                </p>
              </div>
              
              {/* Glow Ball */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-md group-hover:scale-125 transition-transform duration-300"></div>
            </div>

            {/* Wide Card - Integrated Systems */}
            <div className="col-span-12 md:col-span-4 group relative bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-[2rem] p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(#FC5810 1px, transparent 1px), linear-gradient(90deg, #FC5810 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
              </div>
              
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#FC5810]/0 via-[#FC5810]/20 to-[#FC5810]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Icon and Content */}
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="inline-flex p-4 bg-[#FC5810]/10 rounded-xl group-hover:bg-[#FC5810]/20 transition-colors duration-500 flex-shrink-0">
                  <Code size={28} className="text-[#FC5810] group-hover:rotate-180 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FC5810] transition-colors duration-500">
                    Integrated Systems
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A single, unified command center connecting all your security systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel Layout - 1.5 columns */}
          <div className="md:hidden animate-on-scroll">
            <div className="relative overflow-hidden carousel-container">
              <div 
                className="flex carousel-smooth carousel-touch pl-6 pr-2"
                style={{ transform: `translateX(calc(-${currentService} * (75vw + 1rem)))` }}
                onTouchStart={handleServiceTouchStart}
                onTouchMove={handleServiceTouchMove}
                onTouchEnd={handleServiceTouchEnd}
              >
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className={`w-[75vw] flex-shrink-0 mr-4 ${service.bgColor} ${service.textColor} p-6 min-h-[280px] flex flex-col justify-center rounded-2xl`}>
                      <IconComponent size={36} className={`w-10 h-10 mb-6 ${service.iconColor}`} />
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-base opacity-90 leading-relaxed">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Mobile carousel indicators with swipe hint */}
            <div className="flex flex-col items-center mt-6 gap-3">
              <div className="flex justify-center gap-1">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-0.5 h-0.5 rounded-full transition-all duration-300 ${
                      index === currentService 
                        ? 'bg-[#FC5810] scale-150' 
                        : 'bg-[#D9D9D9] hover:bg-[#E63D1F]'
                    }`}
                  />
                ))}
              </div>
              {/* Swipe hint */}
              <div className="flex items-center gap-2 text-xs text-gray-400 animate-pulse">
                <ChevronLeft size={12} />
                <span>Swipe to explore</span>
                <ChevronRight size={12} />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading organizations across the Middle East trust us to secure their most valuable assets.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500 animate-on-scroll">
            {/* Logo placeholders - replace with actual client logos */}
            <div className="flex items-center justify-center h-16 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#FC5810]/20 transition-all duration-300 group">
              <div className="text-2xl font-bold text-gray-400 group-hover:text-[#FC5810] transition-colors duration-300">LOGO</div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#FC5810]/20 transition-all duration-300 group">
              <div className="text-2xl font-bold text-gray-400 group-hover:text-[#FC5810] transition-colors duration-300">LOGO</div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#FC5810]/20 transition-all duration-300 group">
              <div className="text-2xl font-bold text-gray-400 group-hover:text-[#FC5810] transition-colors duration-300">LOGO</div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#FC5810]/20 transition-all duration-300 group">
              <div className="text-2xl font-bold text-gray-400 group-hover:text-[#FC5810] transition-colors duration-300">LOGO</div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#FC5810]/20 transition-all duration-300 group">
              <div className="text-2xl font-bold text-gray-400 group-hover:text-[#FC5810] transition-colors duration-300">LOGO</div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#FC5810]/20 transition-all duration-300 group">
              <div className="text-2xl font-bold text-gray-400 group-hover:text-[#FC5810] transition-colors duration-300">LOGO</div>
            </div>
          </div>

          {/* Mobile Carousel for logos */}
          <div className="md:hidden mt-8 animate-on-scroll">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
              <div className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                <div className="text-sm font-bold text-gray-400">LOGO</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                <div className="text-sm font-bold text-gray-400">LOGO</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                <div className="text-sm font-bold text-gray-400">LOGO</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                <div className="text-sm font-bold text-gray-400">LOGO</div>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                <div className="text-sm font-bold text-gray-400">LOGO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-[#FFF9F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Creative team at work" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 lg:mb-8">
                We Are the Architects of <span className="text-[#FC5810]">Modern Environments</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 lg:mb-8 leading-relaxed">
                Our mission is to empower our clients with sophisticated, reliable technology that simplifies complexity and provides uncompromising security. We believe technology should work for you, seamlessly and intelligently, creating environments that are safer, more efficient, and ready for the future.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-6 lg:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-[#E63D1F] mb-1 sm:mb-2">15+</div>
                  <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-[#E63D1F] mb-1 sm:mb-2">500+</div>
                  <div className="text-sm sm:text-base text-gray-600">Systems Installed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-[#E63D1F] mb-1 sm:mb-2">100+</div>
                  <div className="text-sm sm:text-base text-gray-600">Secure Buildings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-[#E63D1F] mb-1 sm:mb-2">24/7</div>
                  <div className="text-sm sm:text-base text-gray-600">Support Available</div>
                </div>
              </div>

              <button className="bg-[#FC5810] text-[#FFF9F3] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
                Explore Our Solutions <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Installations */}
      <section id="portfolio" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-4 py-2 rounded-full text-[#FC5810] font-medium text-sm mb-4">
              <Award size={16} />
              <span>Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-[#FC5810] relative">
                Installations
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FC5810] to-[#E63D1F] rounded-full"></div>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Real-world transformations showcasing our cutting-edge security and automation solutions in action.
            </p>
          </div>

          {/* Modern Grid Layout - Desktop */}
          <div className="hidden md:block animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">{project.category}</span>
                    </div>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button className="bg-[#FC5810] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E63D1F] transition-colors duration-200 flex items-center gap-2 shadow-lg">
                        <span>View Details</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FC5810] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Advanced security implementation with state-of-the-art technology and seamless integration.
                    </p>
                    
                    {/* Stats Row */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Completed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>500+ Users</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gray-50 hover:bg-[#FC5810] text-gray-700 hover:text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 group/btn">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-1 -right-1 w-20 h-20 bg-[#FC5810]/5 rounded-full blur-md group-hover:bg-[#FC5810]/15 transition-colors duration-200"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#E63D1F]/5 rounded-full blur-sm group-hover:bg-[#E63D1F]/15 transition-colors duration-200"></div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={prevProject}
                className="p-4 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentProject 
                        ? 'bg-[#FC5810] scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextProject}
                className="p-4 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-200 hover:scale-105"
              >
                <ChevronRight size={20} />
              </button>
              
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-4 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-200 hover:scale-105 ml-4"
              >
                {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Portfolio Carousel */}
          <div className="md:hidden animate-on-scroll">
            <div className="relative overflow-hidden rounded-2xl carousel-container">
              <div 
                className="flex carousel-smooth carousel-touch"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                      <div className="p-6 text-[#FFF9F3] w-full">
                        <div className="text-sm text-[#FC5810] mb-2 font-medium">{project.category}</div>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <button className="text-[#FC5810] hover:text-[#E63D1F] transition-colors duration-300 flex items-center gap-2 font-medium">
                          View Installation <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile carousel indicators with swipe hint */}
            <div className="flex flex-col items-center mt-6 gap-3">
              <div className="flex justify-center gap-1">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-0.5 h-0.5 rounded-full transition-all duration-200 ${
                      index === currentProject 
                        ? 'bg-[#FC5810] scale-125' 
                        : 'bg-[#D9D9D9] hover:bg-[#E63D1F]'
                    }`}
                  />
                ))}
              </div>
              {/* Swipe hint */}
              <div className="flex items-center gap-2 text-xs text-gray-400 animate-pulse">
                <ChevronLeft size={12} />
                <span>Swipe for more</span>
                <ChevronRight size={12} />
              </div>
            </div>
            
            {/* Mobile navigation buttons - centered with play/pause */}
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevProject}
                className="p-2 rounded-full bg-white/90 hover:bg-[#FC5810] hover:text-white text-gray-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-2 rounded-full bg-white/90 hover:bg-[#FC5810] hover:text-white text-gray-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button 
                onClick={nextProject}
                className="p-2 rounded-full bg-white/90 hover:bg-[#FC5810] hover:text-white text-gray-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-[#FFF9F3]">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <Quote size={48} className="sm:w-16 sm:h-16 text-[#D9D9D9] mx-auto mb-6 sm:mb-8" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6 sm:mb-8 text-gray-800 px-4">
            "Their integrated security system gave us complete peace of mind. The installation was seamless and 
            the technology works flawlessly. We finally have total control over our facility."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="flex text-[#FC5810]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <div className="font-semibold text-lg">Ahmed Al-Rashid</div>
            <div className="text-gray-600">Facilities Director, Global Manufacturing Inc.</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-black text-[#FFF9F3]">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
            Ready to upgrade your <span className="text-[#FC5810]">reality?</span>
          </h2>
          <p className="text-lg sm:text-xl opacity-80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Whether you have a detailed plan or just the beginning of an idea, our team is ready to listen. Let's discuss how we can bring security and automation to your project.
          </p>
          <button className="bg-[#FC5810] text-[#FFF9F3] px-8 sm:px-12 py-4 sm:py-6 rounded-full font-semibold text-lg sm:text-xl hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            Design My Solution <ArrowRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </section>

      {/* Optimized Mobile Footer */}
      <footer className="bg-black text-[#FFF9F3] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-24 h-24 border border-[#FC5810]/30 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[#FC5810]/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
              <div className="grid grid-cols-2 gap-20">
                
                {/* Left Column - Company Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/orange.svg" 
                      alt="Logo" 
                      className="h-10 w-auto brightness-0 invert"
                    />
                    <div className="text-xl font-bold text-[#FFF9F3]" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
                      دار الابتكار والتقنية
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#FC5810] mb-4">Securing Tomorrow, Today</h3>
                    <p className="text-[#D9D9D9] leading-relaxed max-w-md">
                      Leading the future of security and automation with intelligent solutions.
                    </p>
                  </div>

                  <div className="space-y-2 text-[#D9D9D9]">
                    <p>Technology Center, Innovation District, Dubai</p>
                    <p>info@dit-solutions.com • 24/7 Support</p>
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
                      <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <Zap size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Smart Surveillance</span>
                      </a></li>
                      <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <Users size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Access Control</span>
                      </a></li>
                      <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <Award size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Smart Automation</span>
                      </a></li>
                      <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <BarChart3 size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Network Infrastructure</span>
                      </a></li>
                      <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <Code size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Integrated Systems</span>
                      </a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#FC5810] mb-4 flex items-center gap-2">
                      <Menu size={18} />
                      Quick Links
                    </h4>
                    <ul className="space-y-3 text-[#D9D9D9] mb-6">
                      <li><a href="#home" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>Home</span>
                      </a></li>
                      <li><a href="#about" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>About Us</span>
                      </a></li>
                      <li><a href="#portfolio" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>Our Work</span>
                      </a></li>
                      <li><a href="#contact" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>Contact</span>
                      </a></li>
                    </ul>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-[#FC5810] mb-3 flex items-center gap-2">
                        <Star size={14} />
                        Connect
                      </h5>
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
              <div className="flex items-center gap-3 mb-6 justify-center">
                <img 
                  src="/orange.svg" 
                  alt="Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
                <div className="text-lg font-bold text-[#FFF9F3]" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
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
                    <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <Zap size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Surveillance</span>
                    </a></li>
                    <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <Users size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Access Control</span>
                    </a></li>
                    <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <Award size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Automation</span>
                    </a></li>
                    <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <BarChart3 size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Network</span>
                    </a></li>
                    <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <Code size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Integration</span>
                    </a></li>
                  </ul>
                </div>

                {/* Right Column - Navigation */}
                <div className="text-center">
                  <h4 className="text-[#FC5810] font-bold mb-3 flex items-center justify-center gap-2">
                    <Menu size={16} className="flex-shrink-0" />
                    <span>Links</span>
                  </h4>
                  <ul className="space-y-2 text-[#D9D9D9] text-sm">
                    <li><a href="#home" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Home</span>
                    </a></li>
                    <li><a href="#about" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>About</span>
                    </a></li>
                    <li><a href="#portfolio" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Portfolio</span>
                    </a></li>
                    <li><a href="#contact" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Contact</span>
                    </a></li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center text-[#D9D9D9] text-sm mb-4">
                <p>Dubai • info@dit-solutions.com</p>
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
                <p>&copy; 2025 دار الابتكار والتقنية. All rights reserved.</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[#FC5810] transition-colors duration-300">Privacy</a>
                  <a href="#" className="hover:text-[#FC5810] transition-colors duration-300">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;