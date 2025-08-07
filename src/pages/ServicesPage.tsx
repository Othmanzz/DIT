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
  Grid3x3,
  List
} from 'lucide-react';

const ServicesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'); // State for view mode toggle

  const services = [
    {
      icon: Monitor,
      title: "IT Solutions & Management",
      description: "🔧 Your IT guardian angel! We monitor, optimize & protect your systems 24/7 so you can focus on what you do best - growing your business.",
      mobileDescription: "🔧 24/7 IT monitoring & optimization",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/it-solutions"
    },
    {
      icon: Briefcase,
      title: "Business Apps Solutions",
      description: "🚀 Transform chaos into clarity! Custom apps that make your team work smarter, not harder. Say goodbye to spreadsheet nightmares!",
      mobileDescription: "🚀 Custom apps that work smarter",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/business-apps"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "💻 Got an app idea? We bring it to life! From concept to launch, we code your vision into reality with the latest tech magic.",
      mobileDescription: "💻 From idea to app - we code it all",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/software-development"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "🛡️ Your digital fortress awaits! Advanced security that stops hackers in their tracks while keeping your data bulletproof.",
      mobileDescription: "🛡️ Advanced security & threat protection",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "☁️ Rocket fuel for your tech! Lightning-fast deployments and rock-solid cloud infrastructure that scales with your dreams.",
      mobileDescription: "☁️ Lightning-fast cloud deployments",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/cloud-devops"
    },
    {
      icon: Package,
      title: "Procurement Solutions",
      description: "📦 Smart buying made simple! AI-powered procurement that finds the best deals and keeps your supply chain flowing smoothly.",
      mobileDescription: "📦 Smart procurement & cost optimization",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/procurement"
    },
    {
      icon: GraduationCap,
      title: "EduIT Solutions",
      description: "🎓 Education revolution starts here! Interactive platforms that make learning fun and management a breeze for modern schools.",
      mobileDescription: "🎓 Interactive learning platforms",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/eduit"
    },
    {
      icon: Settings,
      title: "IT Projects Solutions",
      description: "⚡ Project success guaranteed! Expert managers who turn tech chaos into smooth launches - on time, every time.",
      mobileDescription: "⚡ Expert IT project management",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconColor: "text-[#FC5810]",
      link: "/services/it-projects"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-[#FC5810] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 sm:w-64 h-40 sm:h-64 bg-orange-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-96 h-32 sm:h-96 bg-[#FC5810]/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FC5810]/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-[#FC5810] font-semibold text-xs sm:text-sm mb-4 sm:mb-6 border border-[#FC5810]/30">
            <Zap size={14} className="sm:w-4 sm:h-4" />
            <span>Our Solutions</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Comprehensive{' '}
            <span className="text-[#FC5810] relative inline-block">
              Technology
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
            </span>{' '}
            Solutions
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            <span className="hidden sm:inline">Empowering your digital transformation journey with cutting-edge technology solutions 
            that drive growth, ensure security, and unlock innovation across Saudi Arabia.</span>
            <span className="sm:hidden">Cutting-edge technology solutions that drive growth and innovation across Saudi Arabia.</span>
          </p>
          
          {/* Enhanced CTA */}
          <div className="mt-6 sm:mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FC5810] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:bg-[#E63D1F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get Started Today</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Mobile Layout with Grid/List Toggle */}
          <div className="md:hidden">
            {/* View Mode Toggle */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center bg-white rounded-xl shadow-md p-1 border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-[#FC5810] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#FC5810]'
                  }`}
                >
                  <Grid3x3 size={16} />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-[#FC5810] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#FC5810]'
                  }`}
                >
                  <List size={16} />
                  <span>List</span>
                </button>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={index}
                      to={service.link}
                      className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group flex flex-col"
                    >
                      <div className="bg-[#FC5810]/10 rounded-full w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#FC5810]/20 transition-all duration-300 mx-auto">
                        <IconComponent className="w-6 h-6 text-[#FC5810]" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 text-center group-hover:text-[#FC5810] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-600 text-center mb-3 flex-grow">
                        {service.mobileDescription}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-[#FC5810] group-hover:gap-2 transition-all duration-300">
                        <span className="text-xs font-semibold">Learn More</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={index}
                      to={service.link}
                      className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group block"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-[#FC5810]/10 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#FC5810]/20 transition-all duration-300">
                          <IconComponent className="w-7 h-7 text-[#FC5810]" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FC5810] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 text-[#FC5810] group-hover:gap-3 transition-all duration-300">
                            <span className="text-sm font-semibold">Explore Solution</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
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