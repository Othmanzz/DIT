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
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F3]/95 backdrop-blur-sm border-b border-[#D9D9D9]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-8 w-auto"
              />
              <div className="text-xl font-bold text-black" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
                دار الابتكار والتقنية
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Home</a>
                <a href="#about" className="text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">About</a>
                <a href="#services" className="text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Solutions</a>
                <a href="#portfolio" className="text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Installations</a>
                <a href="#contact" className="text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Contact</a>
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
              <a href="#home" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">About</a>
              <a href="#services" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Solutions</a>
              <a href="#portfolio" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Installations</a>
              <a href="#contact" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-colors duration-300 font-medium">Contact</a>
              <button className="w-full mt-4 bg-[#FC5810] text-[#FFF9F3] px-6 py-2 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-4 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-[#D9D9D9] rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-4 md:right-20 w-64 h-20 md:w-96 md:h-32 bg-[#E63D1F] rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6 animate-in">
            Securing Your Future.<br />
            <span className="text-[#FC5810] relative">Automating Your World.
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FC5810] opacity-30"></div>
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

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-on-scroll">
            {/* Large service card */}
            <div className="col-span-2 lg:col-span-2 bg-black text-[#FFF9F3] p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <Zap size={36} className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-[#FC5810]" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Smart Surveillance</h3>
              <p className="text-base md:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                See everything, everywhere. Our intelligent CCTV systems offer crystal-clear imaging and AI-powered analytics for proactive security.
              </p>
            </div>

            {/* Medium service card */}
            <div className="col-span-2 lg:col-span-2 bg-[#FC5810] text-[#FFF9F3] p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <Users size={36} className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Total Access Control</h3>
              <p className="text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Your space, your rules. From keycards to biometrics, our solutions ensure only the right people get in.
              </p>
            </div>

            {/* Small service cards */}
            <div className="bg-[#E63D1F] text-[#FFF9F3] p-4 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <Award size={28} className="w-8 h-8 md:w-9 md:h-9 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Seamless Automation</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Welcome to convenience. Automatic doors, gates, and barriers for effortless access.
              </p>
            </div>

            <div className="bg-[#E63D1F] text-[#FFF9F3] p-4 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <BarChart3 size={28} className="w-8 h-8 md:w-9 md:h-9 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Network Infrastructure</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Robust cabling and network solutions for seamless connectivity.
              </p>
            </div>

            <div className="col-span-2 bg-[#D9D9D9] text-black p-4 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <Code size={28} className="w-8 h-8 md:w-9 md:h-9 mb-3 md:mb-4 text-[#FC5810]" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Integrated Systems</h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                A single, unified command center. We connect your security, access, and automation systems into one intelligent platform.
              </p>
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
            
            {/* Mobile carousel indicators */}
            <div className="flex justify-center mt-6 gap-1">
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

      {/* Portfolio Highlight */}
      <section id="portfolio" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">Featured <span className="text-[#FC5810]">Installations</span></h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Discover how we've transformed security and automation for businesses and organizations worldwide.
            </p>
          </div>

          {/* Desktop Portfolio */}
          <div className="relative animate-on-scroll hidden md:block">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevProject}
                  className="p-3 rounded-full bg-[#D9D9D9] hover:bg-[#FC5810] hover:text-[#FFF9F3] transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextProject}
                  className="p-3 rounded-full bg-[#D9D9D9] hover:bg-[#FC5810] hover:text-[#FFF9F3] transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-3 rounded-full bg-[#D9D9D9] hover:bg-[#FC5810] hover:text-[#FFF9F3] transition-all duration-300 transform hover:scale-110"
              >
                {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-500 ${
                    index === currentProject ? 'scale-105 z-10' : 'scale-95 opacity-70'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-[#FFF9F3]">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="mb-4">{project.category}</p>
                        <span className="text-[#FC5810] hover:text-[#E63D1F] transition-colors duration-300 flex items-center justify-center gap-2">
                          View Installation <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
            
            {/* Mobile carousel indicators */}
            <div className="flex justify-center mt-6 gap-1">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-0.5 h-0.5 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-[#FC5810] scale-150' 
                      : 'bg-[#D9D9D9] hover:bg-[#E63D1F]'
                  }`}
                />
              ))}
            </div>
            
            {/* Mobile navigation buttons - centered with play/pause */}
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevProject}
                className="p-2 rounded-full bg-white/90 hover:bg-[#FC5810] hover:text-white text-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-2 rounded-full bg-white/90 hover:bg-[#FC5810] hover:text-white text-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button 
                onClick={nextProject}
                className="p-2 rounded-full bg-white/90 hover:bg-[#FC5810] hover:text-white text-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
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

      {/* Footer */}
      <footer className="bg-black text-[#FFF9F3] py-16 px-6 lg:px-8 border-t border-[#D9D9D9]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.svg" 
                  alt="Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
                <div className="text-lg font-bold text-[#FFF9F3]" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
                  دار الابتكار والتقنية
                </div>
              </div>
              <p className="text-[#D9D9D9] mb-4">
                Technology Center, Building A<br />
                Innovation District, Dubai<br />
                info@dit-solutions.com
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-[#D9D9D9]">
                <li><a href="#home" className="hover:text-[#FC5810] transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-[#FC5810] transition-colors duration-300">About</a></li>
                <li><a href="#services" className="hover:text-[#FC5810] transition-colors duration-300">Solutions</a></li>
                <li><a href="#portfolio" className="hover:text-[#FC5810] transition-colors duration-300">Installations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Social Media</h3>
              <ul className="space-y-2 text-[#D9D9D9]">
                <li><a href="#" className="hover:text-[#FC5810] transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-[#FC5810] transition-colors duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-[#FC5810] transition-colors duration-300">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#FC5810] transition-colors duration-300">Dribbble</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-full bg-[#D9D9D9]/20 text-[#FFF9F3] placeholder-[#D9D9D9] border border-[#D9D9D9]/30 focus:outline-none focus:border-[#FC5810] w-full"
                />
                <button className="bg-[#FC5810] text-[#FFF9F3] px-6 py-2 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-300 w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#D9D9D9]/20 mt-12 pt-8 text-center text-[#D9D9D9]">
            <p className="text-sm sm:text-base">&copy; 2025 دار الابتكار والتقنية. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;