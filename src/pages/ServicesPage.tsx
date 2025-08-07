import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Monitor, 
  Briefcase, 
  Code, 
  Shield, 
  Cloud, 
  Package, 
  GraduationCap, 
  Settings,
  ArrowRight,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ServicesPage = () => {
  const [currentService, setCurrentService] = useState(0);
  const [serviceTouchStart, setServiceTouchStart] = useState(0);
  const [serviceTouchEnd, setServiceTouchEnd] = useState(0);

  // Touch handlers for mobile carousel
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentService < services.length - 1) {
      setCurrentService((prev) => Math.min(prev + 1, services.length - 1));
    }
    if (isRightSwipe && currentService > 0) {
      setCurrentService((prev) => Math.max(prev - 1, 0));
    }
  };

  const services = [
    {
      icon: Monitor,
      title: "IT Solutions & Management",
      description: "🔧 Your IT guardian angel! We monitor, optimize & protect your systems 24/7 so you can focus on what you do best - growing your business.",
      mobileDescription: "🔧 24/7 IT monitoring & optimization",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/it-solutions"
    },
    {
      icon: Briefcase,
      title: "Business Apps Solutions",
      description: "🚀 Transform chaos into clarity! Custom apps that make your team work smarter, not harder. Say goodbye to spreadsheet nightmares!",
      mobileDescription: "🚀 Custom apps that work smarter",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/business-apps"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "💻 Got an app idea? We bring it to life! From concept to launch, we code your vision into reality with the latest tech magic.",
      mobileDescription: "💻 From idea to app - we code it all",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/software-development"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "🛡️ Your digital fortress awaits! Advanced security that stops hackers in their tracks while keeping your data bulletproof.",
      mobileDescription: "🛡️ Advanced security & threat protection",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "☁️ Rocket fuel for your tech! Lightning-fast deployments and rock-solid cloud infrastructure that scales with your dreams.",
      mobileDescription: "☁️ Lightning-fast cloud deployments",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/cloud-devops"
    },
    {
      icon: Package,
      title: "Procurement Solutions",
      description: "📦 Smart buying made simple! AI-powered procurement that finds the best deals and keeps your supply chain flowing smoothly.",
      mobileDescription: "📦 Smart procurement & cost optimization",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/procurement"
    },
    {
      icon: GraduationCap,
      title: "EduIT Solutions",
      description: "🎓 Education revolution starts here! Interactive platforms that make learning fun and management a breeze for modern schools.",
      mobileDescription: "🎓 Interactive learning platforms",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/eduit"
    },
    {
      icon: Settings,
      title: "IT Projects Solutions",
      description: "⚡ Project success guaranteed! Expert managers who turn tech chaos into smooth launches - on time, every time.",
      mobileDescription: "⚡ Expert IT project management",
      bgColor: "bg-black",
      textColor: "text-[#FFF9F3]",
      iconColor: "text-[#FC5810]",
      link: "/services/it-projects"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FC5810]/20 px-4 py-2 rounded-full text-[#FC5810] font-medium text-sm mb-6">
            <Zap size={16} />
            <span>Our Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Comprehensive <span className="text-[#FC5810]">Technology</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering your digital transformation journey with cutting-edge technology solutions 
            that drive growth, ensure security, and unlock innovation across Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="md:hidden">
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
                      className={`w-[75vw] flex-shrink-0 mr-4 ${service.bgColor} ${service.textColor} p-6 min-h-[280px] flex flex-col justify-center rounded-2xl hover:opacity-90 transition-opacity`}
                    >
                      <IconComponent size={36} className={`w-10 h-10 mb-6 ${service.iconColor}`} />
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-base opacity-90 leading-relaxed">{service.mobileDescription}</p>
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

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-[#FC5810] to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let our experts help you choose the right technology solutions for your unique needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#FC5810] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
          >
            <span>Get Free Consultation</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;