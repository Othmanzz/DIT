import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Users, Award, Zap, Palette, Code, Megaphone, BarChart3, Quote, Calendar, Clock, Menu } from 'lucide-react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

// Animated Text Component for changing words with 3D Flip Effect
const AnimatedDescription = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate-flip-in');

  const variations = [
    "Comprehensive IT Services",
    "Cutting-Edge Technology Solutions", 
    "Innovative Automation Systems",
    "Intelligent Security Solutions",
    "Seamless Cloud Integrations",
    "Powerful Digital Ecosystems"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setAnimationClass('animate-flip-out');
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % variations.length);
        setAnimationClass('animate-flip-in');
        setTimeout(() => {
          setIsAnimating(false);
        }, 150);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, [variations.length]);

  const currentVariation = variations[currentIndex];

  return (
    <div className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed text-center">
      <span className={`changing-word ${isAnimating ? 'animating' : ''} relative inline-block`} style={{ perspective: '1000px' }}>
        <span 
          key={currentIndex}
          className={`font-bold text-[#FC5810] bg-gradient-to-r from-[#FC5810] to-orange-600 bg-clip-text text-transparent ${animationClass} block text-2xl sm:text-3xl`}
          style={{
            background: 'linear-gradient(90deg, #FC5810 0%, #E63D1F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transformStyle: 'preserve-3d'
          }}
        >
          {currentVariation}
        </span>
      </span>
      <span className="typing-cursor"></span>
    </div>
  );
};

// Animated Hero Description Component for changing phrases with 3D Flip Effect
const AnimatedHeroDescription = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate-flip-in');

  const variations = [
    "Pioneering Saudi Arabia's digital transformation",
    "Empowering Vision 2030 through technology", 
    "Building tomorrow's smart infrastructure today",
    "Revolutionizing business with AI & automation",
    "Creating secure, connected digital ecosystems",
    "Driving innovation across the Kingdom",
    "Transforming industries with cutting-edge solutions",
    "Engineering the future of Saudi business"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setAnimationClass('animate-flip-out');
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % variations.length);
        setAnimationClass('animate-flip-in');
        setTimeout(() => {
          setIsAnimating(false);
        }, 150);
      }, 400);
    }, 4000); // Slightly longer interval for hero text

    return () => clearInterval(interval);
  }, [variations.length]);

  const currentVariation = variations[currentIndex];

  return (
    <div className="text-center">
      <div className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed mb-4">
        <span className={`changing-word ${isAnimating ? 'animating' : ''} relative inline-block`} style={{ perspective: '1000px' }}>
          <span 
            key={currentIndex}
            className={`font-semibold bg-gradient-to-r from-[#FC5810] to-orange-600 bg-clip-text text-transparent ${animationClass} block`}
            style={{
              background: 'linear-gradient(90deg, #FC5810 0%, #E63D1F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transformStyle: 'preserve-3d'
            }}
          >
            {currentVariation}
          </span>
        </span>
        <span className="typing-cursor"></span>
      </div>
    </div>
  );
};

function App() {
  const [currentService, setCurrentService] = useState(0);
  const [serviceTouchStart, setServiceTouchStart] = useState(0);
  const [serviceTouchEnd, setServiceTouchEnd] = useState(0);
  const [currentBlog, setCurrentBlog] = useState(0);
  const [blogTouchStart, setBlogTouchStart] = useState(0);
  const [blogTouchEnd, setBlogTouchEnd] = useState(0);


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
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/it-solutions"
    },
    {
      icon: Users,
      title: "Business Apps Solutions",
      description: "🚀 Transform chaos into clarity! Custom apps that make your team work smarter, not harder. Say goodbye to spreadsheet nightmares!",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/business-apps"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "💻 Got an app idea? We bring it to life! From concept to launch, we code your vision into reality with the latest tech magic.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/software-development"
    },
    {
      icon: Award,
      title: "Cybersecurity Solutions",
      description: "🛡️ Your digital fortress awaits! Advanced security that stops hackers in their tracks while keeping your data bulletproof.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/cybersecurity"
    },
    {
      icon: BarChart3,
      title: "Cloud & DevOps Solutions",
      description: "☁️ Rocket fuel for your tech! Lightning-fast deployments and rock-solid cloud infrastructure that scales with your dreams.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/cloud-devops"
    },
    {
      icon: Palette,
      title: "Procurement Solutions",
      description: "📦 Smart buying made simple! AI-powered procurement that finds the best deals and keeps your supply chain flowing smoothly.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/procurement"
    },
    {
      icon: Megaphone,
      title: "EduIT Solutions",
      description: "🎓 Education revolution starts here! Interactive platforms that make learning fun and management a breeze for modern schools.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/eduit"
    },
    {
      icon: BarChart3,
      title: "IT Projects Solutions",
      description: "⚡ Project success guaranteed! Expert managers who turn tech chaos into smooth launches - on time, every time.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
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
    setCurrentBlog((prev) => (prev + 1) % blogs.length);
  };

  const prevBlog = () => {
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
      <Header />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative md:z-10 z-20">
          {/* Mobile Layout - Modern Design */}
          <div className="lg:hidden px-4 pt-20 sm:pt-24 pb-12">
            <div className="max-w-sm mx-auto">
              {/* Main Heading */}
              <div className="text-center mb-8 animate-in">
                <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
                  <span className="inline-block">Transforming</span>{' '}
                  <span className="inline-block">Saudi</span>{' '}
                  <span className="inline-block">Business</span>
                  <br />
                  <span className="text-[#FC5810] relative inline-block">
                    Through Intelligent
                    <br />Technology
                  </span>
                </h1>
                
                {/* Animated Subheading */}
                <div className="mt-6 mb-8">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-700">
                    Where <span className="text-[#FC5810]">Innovation</span> Meets <span className="text-[#FC5810]">Excellence</span>
                  </h2>
                </div>
              </div>

              {/* Mobile Terminal Frame */}
              <div className="mb-8 animate-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 mx-auto max-w-xs">
                  {/* Terminal Header */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-gray-300 text-xs font-medium">DIT Mobile v3.0</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4 font-mono text-xs bg-gradient-to-b from-gray-900 to-gray-800">
                    {/* System Init */}
                    <div className="text-cyan-400 mb-3 typing-delay-0">
                      <span className="animate-pulse">⚡ DIT Engine Started</span>
                    </div>
                    
                    {/* Command */}
                    <div className="text-green-400 mb-2 typing-delay-1">
                      <span className="text-blue-400">dit@saudi:~$</span> 
                      <span className="typing-animation text-white"> ./transform --saudi</span>
                    </div>
                    
                    {/* Progress */}
                    <div className="space-y-1 mb-3">
                      <div className="text-gray-300 typing-delay-2 text-xs">
                        <span className="text-green-400">✓</span> Security Active
                      </div>
                      <div className="text-gray-300 typing-delay-3 text-xs">
                        <span className="text-green-400">✓</span> Cloud Ready
                      </div>
                      <div className="text-gray-300 typing-delay-4 text-xs">
                        <span className="text-green-400">✓</span> AI Deployed
                      </div>
                    </div>

                    {/* Success */}
                    <div className="text-green-400 mb-3 typing-delay-5 text-xs">
                      <span className="animate-pulse">🚀 Transformation Complete!</span>
                    </div>

                    {/* Stats Mini */}
                    <div className="bg-gray-800 rounded-lg p-2 mb-3 typing-delay-6 border border-gray-600">
                      <div className="text-[#FC5810] text-xs mb-1 font-bold">📊 LIVE STATUS</div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="text-center">
                          <div className="text-green-400 font-bold">99.9%</div>
                          <div className="text-gray-400 text-xs">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-green-400 font-bold">24/7</div>
                          <div className="text-gray-400 text-xs">Support</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Ready Prompt */}
                    <div className="text-blue-400 typing-delay-7 flex items-center">
                      <span>dit@saudi:~$</span>
                      <span className="inline-block w-1.5 h-3 bg-green-400 ml-1 animate-pulse"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center animate-in" style={{ animationDelay: '0.4s' }}>
                <button className="bg-gradient-to-r from-[#FC5810] to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-[#FC5810] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto shadow-lg">
                  <span>Design My Solution</span>
                  <ArrowRight size={20} />
                </button>
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

        </div>
      </section>

      {/* About Us Section - Enhanced Modern Style */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#FFF9F3] relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FC5810]/5 via-transparent to-[#FC5810]/5"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FC5810]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FC5810]/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Section Header with Better UX */}
          <div className="text-center mb-24 animate-on-scroll">
            {/* Trust Signal */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FC5810]/10 to-orange-100/50 px-6 py-3 rounded-full text-[#FC5810] font-semibold text-sm mb-6 border border-[#FC5810]/20">
              <Users size={18} />
              <span>Trusted by 500+ Saudi Businesses Since 2008</span>
              <div className="w-2 h-2 bg-[#FC5810] rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Headline with Better Hierarchy */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              We Are the <br/>
                <span className="text-[#FC5810] relative inline-block">
                Architects
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
                </span> of <br/>
                <span className="relative inline-block">
                  Modern Environments
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FC5810] to-orange-600 rounded-full"></div>
              </span>
            </h2>
            
              {/* Animated Value Proposition */}
              <div className="max-w-4xl mx-auto">
                <AnimatedHeroDescription />
              </div>
          </div>

            {/* Quick Stats Bar */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#FC5810] mb-1">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#FC5810] mb-1">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#FC5810] mb-1">100+</div>
                <div className="text-sm text-gray-600 font-medium">Secure Buildings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#FC5810] mb-1">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>

                    {/* Balanced Content Layout */}
          <div className="space-y-16">
            
            {/* Main Content Section - Full Width */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              {/* Left Column - Who We Are */}
              <div className="lg:col-span-1 animate-on-scroll">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#FC5810]/10 p-3 rounded-2xl">
                      <Award className="w-8 h-8 text-[#FC5810]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Who We Are</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Your trusted technology partner for over 15 years, delivering solutions that work reliably and scale beautifully.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FC5810] rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Saudi-based expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FC5810] rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Vision 2030 aligned</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FC5810] rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Enterprise-grade security</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column - Visual with Stats */}
              <div className="lg:col-span-1 animate-on-scroll">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-100 group-hover:border-[#FC5810]/30 transition-all duration-500">
                  <img 
                    src="/riyadh.jpg" 
                    alt="Modern Saudi Business Environment" 
                      className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
                    />
                    
                    {/* Integrated Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-[#FC5810]/5 rounded-xl">
                        <div className="text-2xl font-bold text-[#FC5810] mb-1">99.9%</div>
                      <div className="text-xs text-gray-600 font-semibold">Uptime</div>
                    </div>
                      <div className="text-center p-3 bg-[#FC5810]/5 rounded-xl">
                        <div className="text-2xl font-bold text-[#FC5810] mb-1">24/7</div>
                      <div className="text-xs text-gray-600 font-semibold">Support</div>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
                
              {/* Right Column - What We Do */}
              <div className="lg:col-span-1 animate-on-scroll">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-2xl">
                      <Zap className="w-8 h-8 text-blue-600" />
              </div>
                    <h3 className="text-xl font-bold text-gray-900">What We Do</h3>
            </div>
            
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                      <span className="text-lg">🛡️</span>
                      <div>
                        <h4 className="font-semibold text-green-800 text-sm">Secure</h4>
                        <p className="text-xs text-green-700">Enterprise cybersecurity & compliance</p>
              </div>
                </div>
                
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                      <span className="text-lg">⚡</span>
                      <div>
                        <h4 className="font-semibold text-blue-800 text-sm">Optimize</h4>
                        <p className="text-xs text-blue-700">Performance & automation improvements</p>
                </div>
                </div>
                
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl">
                      <span className="text-lg">🚀</span>
                      <div>
                        <h4 className="font-semibold text-purple-800 text-sm">Transform</h4>
                        <p className="text-xs text-purple-700">Digital processes & cloud migration</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

            {/* Mission Statement - Full Width */}
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-[#FC5810] to-orange-600 rounded-3xl p-12 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                    <Award className="w-5 h-5" />
                    <span>Our Mission</span>
                  </div>
                  
                  <blockquote className="text-2xl lg:text-3xl font-bold leading-relaxed mb-6">
                    "Building tomorrow's smart infrastructure today"
                  </blockquote>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-8">
                    To be the Kingdom's most trusted technology partner, contributing to Vision 2030 
                    by creating smarter, more secure business ecosystems.
                  </p>
                  
                  {/* Inline CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/services"
                      className="inline-flex items-center gap-3 bg-white text-[#FC5810] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                  <span>Explore Our Solutions</span>
                      <ArrowRight size={20} />
                    </Link>
                    
                    <Link 
                      to="/contact"
                      className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#FC5810] transition-all duration-300"
                    >
                      Get Free Consultation
                    </Link>
              </div>
            </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-24 bg-gradient-to-b from-[#FFF9F3] via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FC5810]/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#FC5810]"></div>
            <div className="w-3 h-3 bg-[#FC5810] rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#FC5810]"></div>
          </div>
        </div>
      </div>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">Our <span className="text-[#FC5810]">Solutions</span></h2>
            <AnimatedDescription />
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link 
                  key={index} 
                  to={service.link}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group block"
                >
                  <div className="bg-[#FC5810]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-[#FC5810]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-[#FC5810] group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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
                    <Link 
                      key={index} 
                      to={service.link} 
                      className="w-[75vw] flex-shrink-0 mr-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group min-h-[280px] flex flex-col justify-center"
                    >
                      <div className="bg-[#FC5810]/10 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-[#FC5810]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
                      <li><Link to="/services/it-solutions" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <Zap size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>IT Solutions & Management</span>
                      </Link></li>
                      <li><Link to="/services/business-apps" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <Users size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Business Apps Solutions</span>
                      </Link></li>
                      <li><Link to="/services/software-development" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <Code size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Software Development</span>
                      </Link></li>
                      <li><Link to="/services/cybersecurity" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <Award size={14} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                        <span>Cybersecurity Solutions</span>
                      </Link></li>
                      <li><Link to="/services/cloud-devops" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
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
                      <li><Link to="/" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>Home</span>
                      </Link></li>
                      <li><Link to="/about" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>About Us</span>
                      </Link></li>
                      <li><Link to="/blogs" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>Blogs</span>
                      </Link></li>
                      <li><Link to="/contact" className="hover:text-[#FC5810] transition-colors duration-300 flex gap-3 group">
                        <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                        <span>Contact</span>
                      </Link></li>
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
                <div className="text-left">
                  <h4 className="text-[#FC5810] font-bold mb-3 flex items-center gap-2">
                    <Zap size={16} className="flex-shrink-0" />
                    <span>Solutions</span>
                  </h4>
                  <ul className="space-y-2 text-[#D9D9D9] text-sm">
                    <li><Link to="/services/it-solutions" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <Zap size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>IT Solutions</span>
                    </Link></li>
                    <li><Link to="/services/business-apps" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <Users size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Business Apps</span>
                    </Link></li>
                    <li><Link to="/services/software-development" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <Code size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Development</span>
                    </Link></li>
                    <li><Link to="/services/cybersecurity" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <Award size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Cybersecurity</span>
                    </Link></li>
                    <li><Link to="/services/cloud-devops" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <BarChart3 size={12} className="text-[#FC5810]/60 group-hover:text-[#FC5810] flex-shrink-0" />
                      <span>Cloud & DevOps</span>
                    </Link></li>
                  </ul>
                </div>

                {/* Right Column - Navigation */}
                <div className="text-left">
                  <h4 className="text-[#FC5810] font-bold mb-3 flex items-center gap-2">
                    <Menu size={16} className="flex-shrink-0" />
                    <span>Links</span>
                  </h4>
                  <ul className="space-y-2 text-[#D9D9D9] text-sm">
                    <li><Link to="/" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Home</span>
                    </Link></li>
                    <li><Link to="/about" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>About</span>
                    </Link></li>
                    <li><Link to="/blogs" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Blogs</span>
                    </Link></li>
                    <li><Link to="/contact" className="hover:text-[#FC5810] transition-colors duration-300 flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-[#FC5810]/60 group-hover:bg-[#FC5810] transition-colors duration-300 flex-shrink-0"></div>
                      <span>Contact</span>
                    </Link></li>
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