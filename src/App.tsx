import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, Star, Users, Award, Zap, Palette, Code, Megaphone, BarChart3, Quote, Play, Pause } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [serviceTouchStart, setServiceTouchStart] = useState(0);
  const [serviceTouchEnd, setServiceTouchEnd] = useState(0);

  // Technology logos data
  const technologies = [
    { name: "Odoo", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" }
  ];

  const blogs = [
    {
      title: "The Future of Digital Transformation in Saudi Arabia",
      category: "Technology Trends",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 15, 2025",
      excerpt: "Exploring how Vision 2030 is driving technological innovation across the Kingdom and what it means for businesses."
    },
    {
      title: "Cybersecurity Best Practices for Modern Enterprises",
      category: "Security",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 10, 2025",
      excerpt: "Essential strategies to protect your business from evolving cyber threats in today's digital landscape."
    },
    {
      title: "Cloud Migration: A Complete Guide for Saudi Businesses",
      category: "Cloud Computing",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "January 5, 2025",
      excerpt: "Step-by-step approach to successfully migrating your infrastructure to the cloud while ensuring compliance."
    }
  ];

  const services = [
    {
      icon: Zap,
      title: "IT Solutions & Management",
      description: "Streamline your infrastructure with proactive monitoring, strategic planning, and 24/7 support that keeps your business running at peak performance.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/it-solutions"
    },
    {
      icon: Users,
      title: "Business Apps Solutions",
      description: "Transform operations with tailored ERP, CRM, and enterprise applications that automate workflows and deliver actionable insights.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/business-apps"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Bring your vision to life with custom applications built using cutting-edge technologies, designed specifically for your business needs.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/software-development"
    },
    {
      icon: Award,
      title: "Cybersecurity Solutions",
      description: "Protect your assets with comprehensive security strategies, from threat detection to incident response, ensuring business continuity.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/cybersecurity"
    },
    {
      icon: BarChart3,
      title: "Cloud & DevOps Solutions",
      description: "Accelerate innovation with scalable cloud infrastructure and automated deployment pipelines that reduce time-to-market.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/cloud-devops"
    },
    {
      icon: Palette,
      title: "Procurement Solutions",
      description: "Optimize your technology investments with strategic sourcing, vendor management, and cost-effective procurement strategies.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/procurement"
    },
    {
      icon: Megaphone,
      title: "EduIT Solutions",
      description: "Empower learning institutions with digital transformation, from smart classrooms to comprehensive learning management systems.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/eduit"
    },
    {
      icon: BarChart3,
      title: "IT Projects Solutions",
      description: "Execute complex technology initiatives with confidence through expert project management and proven implementation methodologies.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/it-projects"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % blogs.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, blogs.length]);

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
            <div className="flex-shrink-0 flex flex-col items-center">
              <img 
                src="/orange.svg" 
                alt="Logo" 
                className="h-8 w-auto"
              />
              <div className="text-sm font-bold text-black mt-1 text-center" dir="rtl" style={{ fontFamily: 'RH-Zak Bold, sans-serif' }}>
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
                <a href="/blogs" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                  <span>Blogs</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="/contact" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium smooth-scroll py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
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
              <a href="/blogs" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Blogs</a>
              <a href="/contact" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Contact</a>
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
            <span className="inline-block transform hover:rotate-1 transition-transform duration-500">Transforming</span>{' '}
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Saudi</span>{' '}
            <span className="inline-block transform hover:-rotate-1 transition-transform duration-500">Business</span><br />
            <span className="text-[#FC5810] relative inline-block">
              <span className="inline-block transform hover:skew-x-3 transition-transform duration-400">Through</span>{' '}
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">Intelligent</span>{' '}
              <span className="inline-block transform hover:rotate-3 transition-transform duration-500">Technology</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent transform scale-x-0 hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 md:mb-12 animate-in px-4" style={{ animationDelay: '0.2s' }}>
            From cybersecurity to cloud solutions, we deliver comprehensive IT services that drive growth, ensure security, and unlock innovation for businesses across the Kingdom and GCC region.
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
              Empowering your digital transformation journey with comprehensive IT services that drive growth, ensure security, and unlock innovation across the Kingdom.
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link 
                  key={index} 
                  to={service.link}
                  className={`${service.bgColor} ${service.textColor} p-6 min-h-[280px] flex flex-col justify-center rounded-2xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <IconComponent size={36} className={`mb-6 ${service.iconColor}`} />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 mt-auto opacity-80">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
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
                    <Link key={index} to={service.link} className={`w-[75vw] flex-shrink-0 mr-4 ${service.bgColor} ${service.textColor} p-6 min-h-[280px] flex flex-col justify-center rounded-2xl hover:opacity-90 transition-opacity`}>
                      <IconComponent size={36} className={`w-10 h-10 mb-6 ${service.iconColor}`} />
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-base opacity-90 leading-relaxed">{service.description}</p>
                    </Link>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Technologies We <span className="text-[#FC5810]">Use</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partnering with leading technology providers to deliver cutting-edge solutions that power your digital transformation.
            </p>
          </div>

          {/* Technology Partners Slider */}
          <div className="relative overflow-hidden animate-on-scroll">
            {/* Sliding animation container */}
            <div 
              className="flex gap-12 items-center animate-slide"
              style={{
                animation: 'slide 30s linear infinite',
                width: 'calc(200px * 24)' // Double the logos for seamless loop
              }}
            >
              {/* First set of logos */}
              {technologies.map((tech, index) => (
                <div key={index} className="flex-shrink-0 w-24 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `<div class="text-xs font-semibold text-gray-500">${tech.name}</div>`;
                    }}
                    className="h-10 w-10 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {technologies.map((tech, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-24 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `<div class="text-xs font-semibold text-gray-500">${tech.name}</div>`;
                    }}
                    className="h-10 w-10 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
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
                src="/riyadh.jpg" 
                alt="Modern Riyadh cityscape" 
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

      {/* Blogs */}
      <section id="blogs" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-4 py-2 rounded-full text-[#FC5810] font-medium text-sm mb-4">
              <Award size={16} />
              <span>Latest Articles</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#FC5810] relative">
                Blogs
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FC5810] to-[#E63D1F] rounded-full"></div>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Stay updated with the latest insights, trends, and best practices in technology and digital transformation.
            </p>
          </div>

          {/* Modern Grid Layout - Desktop */}
          <div className="hidden md:block animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {blogs.map((blog, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-[#FC5810] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    
                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                        {blog.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FC5810] transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-[#FC5810] font-semibold group-hover:gap-3 transition-all duration-200">
                      <span>Read Article</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-1 -right-1 w-20 h-20 bg-[#FC5810]/5 rounded-full blur-md group-hover:bg-[#FC5810]/10 transition-colors duration-150"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-[#E63D1F]/5 rounded-full blur-sm group-hover:bg-[#E63D1F]/10 transition-colors duration-150"></div>
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
                {blogs.map((_, index) => (
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
                {blogs.map((blog, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative group">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                      <div className="p-6 text-[#FFF9F3] w-full">
                        <div className="text-sm text-[#FC5810] mb-2 font-medium">{blog.category}</div>
                        <h3 className="text-2xl font-bold mb-3">{blog.title}</h3>
                        <div className="flex items-center gap-2 text-[#FC5810] font-semibold">
                          <span>Read Article</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile carousel indicators with swipe hint */}
            <div className="flex flex-col items-center mt-6 gap-3">
              <div className="flex justify-center gap-1">
                {blogs.map((_, index) => (
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
          
          {/* View All Blogs Button */}
          <div className="text-center mt-16">
            <Link 
              to="/blogs"
              className="inline-flex items-center gap-2 bg-[#FC5810] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <span>View All Articles</span>
              <ArrowRight size={20} />
            </Link>
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
            Whether you have a detailed plan or just the beginning of an idea, our team is ready to listen. Let's discuss how we can bring security and automation to your blog.
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
                      <li><a href="/blogs" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>Blogs</span>
                      </a></li>
                      <li><a href="/contact" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
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
                    <li><a href="/blogs" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Blogs</span>
                    </a></li>
                    <li><a href="/contact" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
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
      <ScrollToTop />
    </div>
  );
}

export default App;