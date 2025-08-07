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