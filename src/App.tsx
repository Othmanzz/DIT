import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, Star, Users, Award, Zap, Palette, Code, Megaphone, BarChart3, Quote, Calendar, Clock, Play, Pause } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const [serviceTouchStart, setServiceTouchStart] = useState(0);
  const [serviceTouchEnd, setServiceTouchEnd] = useState(0);
  const [currentBlog, setCurrentBlog] = useState(0);
  const [blogTouchStart, setBlogTouchStart] = useState(0);
  const [blogTouchEnd, setBlogTouchEnd] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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
      description: "🔧 Your IT guardian angel! We monitor, optimize & protect your systems 24/7 so you can focus on what you do best - growing your business.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/it-solutions"
    },
    {
      icon: Users,
      title: "Business Apps Solutions",
      description: "🚀 Transform chaos into clarity! Custom apps that make your team work smarter, not harder. Say goodbye to spreadsheet nightmares!",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/business-apps"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "💻 Got an app idea? We bring it to life! From concept to launch, we code your vision into reality with the latest tech magic.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/software-development"
    },
    {
      icon: Award,
      title: "Cybersecurity Solutions",
      description: "🛡️ Your digital fortress awaits! Advanced security that stops hackers in their tracks while keeping your data bulletproof.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/cybersecurity"
    },
    {
      icon: BarChart3,
      title: "Cloud & DevOps Solutions",
      description: "☁️ Rocket fuel for your tech! Lightning-fast deployments and rock-solid cloud infrastructure that scales with your dreams.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/cloud-devops"
    },
    {
      icon: Palette,
      title: "Procurement Solutions",
      description: "📦 Smart buying made simple! AI-powered procurement that finds the best deals and keeps your supply chain flowing smoothly.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/procurement"
    },
    {
      icon: Megaphone,
      title: "EduIT Solutions",
      description: "🎓 Education revolution starts here! Interactive platforms that make learning fun and management a breeze for modern schools.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/eduit"
    },
    {
      icon: BarChart3,
      title: "IT Projects Solutions",
      description: "⚡ Project success guaranteed! Expert managers who turn tech chaos into smooth launches - on time, every time.",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/it-projects"
    }
  ];


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

  const nextService = () => {
    setCurrentService((prev) => Math.min(prev + 1, services.length - 1));
  };

  const prevService = () => {
    setCurrentService((prev) => Math.max(prev - 1, 0));
  };

  // Blog carousel functions
  const nextBlog = () => {
    setIsAutoPlay(false);
    setCurrentBlog((prev) => (prev + 1) % blogs.length);
  };

  const prevBlog = () => {
    setIsAutoPlay(false);
    setCurrentBlog((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  // Blog carousel touch handlers
  const handleBlogTouchStart = (e: React.TouchEvent) => {
    setBlogTouchStart(e.targetTouches[0].clientX);
    setBlogTouchEnd(0);
  };

  const handleBlogTouchMove = (e: React.TouchEvent) => {
    setBlogTouchEnd(e.targetTouches[0].clientX);
  };

  const handleBlogTouchEnd = () => {
    if (!blogTouchStart || !blogTouchEnd) return;
    
    const distance = blogTouchStart - blogTouchEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      nextBlog();
    }
    if (isRightSwipe) {
      prevBlog();
    }
    
    // Reset touch values
    setBlogTouchStart(0);
    setBlogTouchEnd(0);
  };

  // Auto-play functionality for blogs
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentBlog((prev) => (prev + 1) % blogs.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, blogs.length]);

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
                <Link to="/about" className="relative text-black hover:text-[#FC5810] transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-[#FC5810]/5 group">
                  <span>About</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC5810] transition-all duration-300 group-hover:w-full"></div>
                </Link>
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
              <button className="bg-[#FC5810] text-[#FFF9F3] px-6 py-2 rounded-2xl font-semibold hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105">
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
              <Link to="/about" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <a href="#services" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Solutions</a>
              <a href="/blogs" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Blogs</a>
              <a href="/contact" className="block px-3 py-2 text-black hover:text-[#FC5810] transition-all duration-500 font-medium smooth-scroll" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="w-full mt-4 bg-[#FC5810] text-[#FFF9F3] px-6 py-2 rounded-2xl font-semibold hover:bg-[#E63D1F] transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative md:z-10 z-20">
          {/* Mobile Layout */}
          <div className="lg:hidden text-center">
            {/* Animated DIT Logo for Mobile */}
            <div className="mb-8 pb-4 pt-20 sm:pt-24 flex justify-center animate-in">
              <div className="relative">
                <img 
                  src="/orange.svg" 
                  alt="DIT Logo" 
                  className="h-20 w-auto animate-bounce"
                  style={{ animationDuration: '3s' }}
                />
                {/* Orbiting Dots */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="relative w-full h-full">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FC5810] rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-2 h-2 bg-[#FC5810] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FC5810] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-2 h-2 bg-[#FC5810] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>
                {/* Pulsing Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full border border-[#FC5810]/20 animate-ping" style={{ animationDuration: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Two-Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 animate-in">
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
              
              {/* Animated Headline */}
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">
                  <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    Where
                  </span>
                  <span className="inline-block bg-gradient-to-r from-[#FC5810] via-orange-500 to-red-500 bg-clip-text text-transparent animate-scale-in ml-3" style={{ animationDelay: '0.3s' }}>
                    Innovation
                  </span>
                  <span className="inline-block animate-slide-in-right ml-3" style={{ animationDelay: '0.5s' }}>
                    Meets
                  </span>
                  <span className="inline-block bg-gradient-to-r from-[#FC5810] via-orange-500 to-red-500 bg-clip-text text-transparent animate-bounce-in ml-3" style={{ animationDelay: '0.7s' }}>
                    Excellence
                  </span>
                </h2>
              </div>

              <div className="flex justify-start animate-in" style={{ animationDelay: '0.4s' }}>
                <button className="bg-[#FC5810] text-[#FFF9F3] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Design My Solution <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Column - Terminal */}
            <div className="flex flex-col items-center justify-center animate-in">
              {/* Enhanced Creative Terminal */}
              <div className="bg-gray-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in terminal-glow border border-gray-700 hover:shadow-3xl hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
                {/* Terminal Header with Animation */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 flex items-center gap-4 relative overflow-hidden">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 bg-red-500 rounded-full animate-pulse hover:animate-bounce cursor-pointer"></div>
                    <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full animate-pulse hover:animate-bounce cursor-pointer" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse hover:animate-bounce cursor-pointer" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-200 text-sm font-semibold tracking-wide">DIT Enterprise Terminal v3.0</span>
                  </div>
                  <div className="text-[#FC5810] text-sm font-bold animate-pulse">🇸🇦 LIVE</div>
                  {/* Animated Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FC5810]/5 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>

                {/* Enhanced Terminal Content */}
                <div className="p-8 font-mono text-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
                  {/* Matrix-style Background Effect */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="text-green-400 text-xs animate-pulse transform rotate-45">01010101010101</div>
                    <div className="text-[#FC5810] text-xs animate-pulse transform -rotate-45 mt-4">11001100110011</div>
                  </div>
                  
                  {/* System Initialization */}
                  <div className="text-cyan-400 mb-4 typing-delay-0 relative">
                    <span className="animate-pulse">⚡ DIT Transformation Engine v3.0 Initialized</span>
                    <div className="h-0.5 w-0 bg-cyan-400 animate-pulse typing-delay-1" style={{ animation: 'typeWriter 2s ease-out 1s forwards' }}></div>
                  </div>
                  
                  {/* Enhanced Command Input with Typing Effect */}
                  <div className="text-green-400 mb-4 typing-delay-1">
                    <span className="text-blue-400">admin@dit-saudi:~/enterprise$</span> 
                    <span className="typing-animation text-white"> ./transform_business --location=saudi --mode=enterprise --ai=enabled</span>
                  </div>
                  
                  {/* Loading with Creative Progress Bar */}
                  <div className="text-yellow-400 mb-4 typing-delay-2">
                    <div className="flex items-center gap-2">
                      <span className="animate-spin">🔄</span>
                      <span>Scanning digital infrastructure...</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-yellow-400 to-[#FC5810] h-1 rounded-full animate-pulse" style={{ width: '75%', animation: 'typeWriter 3s ease-out 2s forwards' }}></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Progress Steps with Icons */}
                  <div className="space-y-2 mb-5">
                    <div className="text-gray-200 typing-delay-3 flex items-center gap-3 hover:text-green-400 transition-colors">
                      <span className="text-green-400 animate-bounce">✓</span>
                      <span className="flex-1">🔒 Advanced Security Protocols</span>
                      <span className="text-green-400 font-bold">ACTIVE</span>
                    </div>
                    <div className="text-gray-200 typing-delay-4 flex items-center gap-3 hover:text-green-400 transition-colors">
                      <span className="text-green-400 animate-bounce" style={{ animationDelay: '0.2s' }}>✓</span>
                      <span className="flex-1">☁️ Cloud Architecture</span>
                      <span className="text-green-400 font-bold">OPTIMIZED</span>
                    </div>
                    <div className="text-gray-200 typing-delay-5 flex items-center gap-3 hover:text-green-400 transition-colors">
                      <span className="text-green-400 animate-bounce" style={{ animationDelay: '0.4s' }}>✓</span>
                      <span className="flex-1">🤖 AI Automation Suite</span>
                      <span className="text-green-400 font-bold">DEPLOYED</span>
                    </div>
                    <div className="text-gray-200 typing-delay-6 flex items-center gap-3 hover:text-green-400 transition-colors">
                      <span className="text-green-400 animate-bounce" style={{ animationDelay: '0.6s' }}>✓</span>
                      <span className="flex-1">📊 Business Intelligence</span>
                      <span className="text-green-400 font-bold">ENHANCED</span>
                    </div>
                  </div>

                  {/* Success Message with Animation */}
                  <div className="text-green-400 mb-5 typing-delay-7 text-center">
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 animate-pulse">
                      <span className="text-lg">🚀 Digital Transformation COMPLETED!</span>
                      <div className="text-xs text-green-300 mt-1">System Performance: 99.9% | Security: Maximum | AI Status: Online</div>
                    </div>
                  </div>

                  {/* Enhanced Stats Display */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 mb-4 typing-delay-8 border border-[#FC5810]/20 hover:border-[#FC5810]/40 transition-colors">
                    <div className="text-[#FC5810] text-sm mb-3 font-bold flex items-center gap-2">
                      <span className="animate-pulse">⚡</span> LIVE SYSTEM STATUS
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">Security Level</div>
                        <div className="text-green-400 font-bold flex items-center justify-center gap-1">
                          <span className="animate-pulse">🛡️</span> MAXIMUM
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">Performance</div>
                        <div className="text-green-400 font-bold flex items-center justify-center gap-1">
                          <span className="animate-pulse">⚡</span> OPTIMAL
                        </div>
                      </div>
                      <div className="text-center col-span-2">
                        <div className="text-gray-400 text-xs">AI Status</div>
                        <div className="text-[#FC5810] font-bold flex items-center justify-center gap-1">
                          <span className="animate-pulse">🤖</span> ONLINE & LEARNING
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ready Prompt with Enhanced Cursor */}
                  <div className="text-blue-400 typing-delay-9 flex items-center">
                    <span>admin@dit-saudi:~/enterprise$</span>
                    <span className="inline-block w-2 h-5 bg-gradient-to-t from-green-400 to-green-300 ml-2 animate-pulse shadow-lg"></span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Content - Same as before but centered */}
          <div className="lg:hidden text-center">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6 animate-in -mt-4">
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
            
            <div className="max-w-4xl mx-auto mb-12 px-4 animate-in" style={{ animationDelay: '0.2s' }}>
              {/* Animated Headline */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    Where
                  </span>
                  <span className="inline-block bg-gradient-to-r from-[#FC5810] via-orange-500 to-red-500 bg-clip-text text-transparent animate-scale-in ml-3" style={{ animationDelay: '0.3s' }}>
                    Innovation
                  </span>
                  <span className="inline-block animate-slide-in-right ml-3" style={{ animationDelay: '0.5s' }}>
                    Meets
                  </span>
                  <span className="inline-block bg-gradient-to-r from-[#FC5810] via-orange-500 to-red-500 bg-clip-text text-transparent animate-bounce-in ml-3" style={{ animationDelay: '0.7s' }}>
                    Excellence
                  </span>
                </h2>
              </div>

              {/* Enhanced Creative Terminal */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-lg mx-auto overflow-hidden animate-in terminal-glow border border-gray-700" style={{ animationDelay: '0.4s' }}>
                {/* Terminal Header */}
                <div className="bg-gray-800 px-6 py-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-gray-300 text-sm ml-4 font-medium">DIT Terminal v2.0</span>
                  <div className="ml-auto text-gray-400 text-xs">🇸🇦 Saudi Arabia</div>
                </div>

                {/* Terminal Content */}
                <div className="p-8 font-mono text-sm bg-gradient-to-b from-gray-900 to-gray-800">
                  {/* Welcome Message */}
                  <div className="text-cyan-400 mb-4 typing-delay-0">
                    <span className="animate-pulse">⚡ DIT Transformation Engine Initialized</span>
                  </div>
                  
                  {/* Command Input */}
                  <div className="text-green-400 mb-3">
                    <span className="text-blue-400">dit@saudi:~$</span> 
                    <span className="typing-animation"> ./deploy_excellence --enterprise</span>
                  </div>
                  
                  {/* Loading Animation */}
                  <div className="text-yellow-400 mb-3 typing-delay-1">
                    <span className="animate-pulse">🔄 Scanning digital infrastructure...</span>
                  </div>
                  
                  {/* Progress Steps */}
                  <div className="space-y-1 mb-4">
                    <div className="text-gray-300 typing-delay-2">
                      <span className="text-green-400">✓</span> Advanced security protocols → ACTIVE
                    </div>
                    <div className="text-gray-300 typing-delay-3">
                      <span className="text-green-400">✓</span> Cloud architecture → OPTIMIZED  
                    </div>
                    <div className="text-gray-300 typing-delay-4">
                      <span className="text-green-400">✓</span> AI automation → DEPLOYED
                    </div>
                  </div>

                  {/* Success Message */}
                  <div className="text-green-400 mb-4 typing-delay-5">
                    <span className="animate-pulse">🚀 Digital transformation COMPLETED!</span>
                  </div>

                  {/* Stats Display */}
                  <div className="bg-gray-800 rounded-lg p-3 mb-3 typing-delay-6 border border-gray-600">
                    <div className="text-cyan-400 text-xs mb-2 font-bold">⚡ SYSTEM STATUS</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="text-gray-400">Security:</div>
                        <div className="text-green-400 font-bold">🔒 MAXIMUM</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Performance:</div>
                        <div className="text-green-400 font-bold">📊 OPTIMAL</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ready Prompt */}
                  <div className="text-blue-400 typing-delay-7">
                    <span>dit@saudi:~$</span>
                    <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center animate-in mt-8" style={{ animationDelay: '0.4s' }}>
              <button className="bg-[#FC5810] text-[#FFF9F3] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Design My Solution <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Modern Style */}
      <section id="about" className="py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FC5810]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header - Centered */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-4 py-2 rounded-full text-[#FC5810] font-semibold text-sm mb-6">
              <div className="w-2 h-2 bg-[#FC5810] rounded-full animate-pulse"></div>
              Transforming Saudi Business Since 2008
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6">
              We Are the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC5810] to-orange-600">
                Architects
              </span> of{' '}
              <span className="relative">
                Modern
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FC5810] to-orange-600 rounded-full"></div>
              </span>
              <br/>Environments
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our mission is to empower our clients with <strong>sophisticated, reliable technology</strong> that simplifies complexity and provides uncompromising security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column - Modern Visual */}
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2">
                  <img 
                    src="/riyadh.jpg" 
                    alt="Modern Saudi Business Environment" 
                    className="w-full h-72 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FC5810] mb-1">99.9%</div>
                      <div className="text-xs text-gray-600 font-semibold">Uptime</div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FC5810] mb-1">24/7</div>
                      <div className="text-xs text-gray-600 font-semibold">Support</div>
                    </div>
                  </div>
                  
                  {/* Tech Icons Floating */}
                  <div className="absolute top-4 left-4 bg-[#FC5810]/10 rounded-full p-3 animate-pulse">
                    <div className="w-6 h-6 bg-[#FC5810] rounded-sm"></div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-[#FC5810]/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
            
            {/* Right Column - Content and Stats */}
            <div className="order-1 lg:order-2 animate-on-scroll">
              {/* Mission Statement */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We believe technology should work for you, seamlessly and intelligently, creating environments that are <em>safer, more efficient, and ready for the future</em>.
                </p>
              </div>
              
              {/* Modern Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FC5810]/20">
                  <div className="text-3xl font-black text-[#FC5810] mb-2">15+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  <div className="w-8 h-1 bg-[#FC5810] rounded-full mt-3"></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FC5810]/20">
                  <div className="text-3xl font-black text-[#FC5810] mb-2">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Systems Installed</div>
                  <div className="w-8 h-1 bg-[#FC5810] rounded-full mt-3"></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FC5810]/20">
                  <div className="text-3xl font-black text-[#FC5810] mb-2">100+</div>
                  <div className="text-sm text-gray-600 font-medium">Secure Buildings</div>
                  <div className="w-8 h-1 bg-[#FC5810] rounded-full mt-3"></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FC5810]/20">
                  <div className="text-3xl font-black text-[#FC5810] mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support Available</div>
                  <div className="w-8 h-1 bg-[#FC5810] rounded-full mt-3"></div>
                </div>
              </div>

              {/* Modern CTA Button */}
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-[#FC5810] to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-[#FC5810] transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-xl">
                  <span>Explore Our Solutions</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
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

          {/* Desktop Layout - Static Grid for 3 blogs or less, Carousel for more */}
          <div className="hidden md:block animate-on-scroll">
            {blogs.length <= 3 ? (
              /* Static Grid Layout for 3 blogs or less */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {blogs.map((blog, index) => (
                  <Link 
                    key={index}
                    to={`/blog/${index + 1}`}
                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
                  >
                    {/* Image Container */}
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-block bg-[#FC5810] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 bg-white">
                      {/* Date and Reading Info */}
                      <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={10} />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={10} />
                          <span>5 min read</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FC5810] transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      {/* Read More Link */}
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 text-[#FC5810] font-semibold text-sm">
                          <span>Read Full Article</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* Carousel Layout for more than 3 blogs */
              <>
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentBlog * 33.333333}%)` }}
                    onTouchStart={handleBlogTouchStart}
                    onTouchMove={handleBlogTouchMove}
                    onTouchEnd={handleBlogTouchEnd}
                  >
                    {blogs.map((blog, index) => (
                      <div key={index} className="w-1/3 flex-shrink-0 px-4">
                        <Link 
                          to={`/blog/${index + 1}`}
                          className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block h-full"
                        >
                          {/* Image Container */}
                          <div className="relative h-52 overflow-hidden">
                            <img 
                              src={blog.image} 
                              alt={blog.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4">
                              <span className="inline-block bg-[#FC5810] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-8 bg-white">
                            {/* Date and Reading Info */}
                            <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar size={10} />
                                <span>{blog.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock size={10} />
                                <span>5 min read</span>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FC5810] transition-colors duration-300 line-clamp-2">
                              {blog.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                              {blog.excerpt}
                            </p>
                            
                            {/* Read More Link */}
                            <div className="flex items-center justify-between">
                              <div className="inline-flex items-center gap-2 text-[#FC5810] font-semibold text-sm">
                                <span>Read Full Article</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls - Only show for carousel */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button 
                    onClick={prevBlog}
                    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="flex gap-2">
                    {blogs.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentBlog(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentBlog 
                            ? 'bg-[#FC5810] scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextBlog}
                    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  <button 
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-300 hover:scale-110 ml-4"
                  >
                    {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Smooth Carousel Layout - Mobile */}
          <div className="md:hidden animate-on-scroll">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentBlog * 100}%)` }}
                onTouchStart={handleBlogTouchStart}
                onTouchMove={handleBlogTouchMove}
                onTouchEnd={handleBlogTouchEnd}
              >
                {blogs.map((blog, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Link 
                      to={`/blog/${index + 1}`}
                      className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 block"
                    >
                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="inline-block bg-[#FC5810] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-white">
                        {/* Date and Reading Info */}
                        <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={10} />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={10} />
                            <span>5 min read</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#FC5810] transition-colors duration-300 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                          {blog.excerpt}
                        </p>
                        
                        {/* Read More Link */}
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 text-[#FC5810] font-semibold text-sm">
                            <span>Read Full Article</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={prevBlog}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="flex gap-2">
                {blogs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBlog(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentBlog 
                        ? 'bg-[#FC5810] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextBlog}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
              
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#FC5810] hover:text-white transition-all duration-300 ml-2"
              >
                {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>
          
          {/* View All Blogs Button */}
          <div className="text-center mt-16">
            <Link 
              to="/blogs"
              className="inline-flex items-center gap-2 bg-[#FC5810] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#E63D1F] transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <span>View All Articles</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Simplified */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-black text-white relative overflow-hidden">
        {/* Animated background dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#FC5810] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Something{' '}
            <span 
              className="text-[#FC5810] inline-block"
              style={{ 
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                textShadow: '0 0 20px rgba(252, 88, 16, 0.5)'
              }}
            >
              Great
            </span>{' '}
            Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Transform your business with cutting-edge technology solutions tailored to your needs.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FC5810] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#E63D1F] transition-colors duration-200"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
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

                  <button className="bg-gradient-to-r from-[#FC5810] to-[#E63D1F] text-[#FFF9F3] px-6 py-3 rounded-2xl font-semibold hover:from-[#E63D1F] hover:to-[#FC5810] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                      <li><Link to="/about" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>About Us</span>
                      </Link></li>
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
                    <li><Link to="/about" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>About</span>
                    </Link></li>
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