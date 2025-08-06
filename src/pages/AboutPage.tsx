import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Globe, Shield, Zap, Heart, CheckCircle, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Systems Installed", icon: Zap },
    { number: "100+", label: "Secure Buildings", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Heart }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every solution we design puts security at its core, protecting your digital assets and ensuring compliance with local regulations."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We embrace cutting-edge technologies and innovative approaches to deliver solutions that keep you ahead of the competition."
    },
    {
      icon: Heart,
      title: "Client Focused",
      description: "Your success is our mission. We build lasting partnerships through exceptional service and unwavering commitment."
    },
    {
      icon: Globe,
      title: "Future Ready",
      description: "We architect scalable solutions that grow with your business, ensuring you're prepared for tomorrow's challenges."
    }
  ];

  const team = [
    {
      name: "Ahmed Al-Mansouri",
      role: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Visionary leader with 20+ years in enterprise technology transformation."
    },
    {
      name: "Sarah Al-Khalidi",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Cybersecurity expert specializing in next-generation threat protection."
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Head of Cloud Solutions",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Cloud architect driving digital transformation across the Kingdom."
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Founded in Riyadh",
      description: "Started with a vision to transform Saudi Arabia's digital landscape"
    },
    {
      year: "2015",
      title: "100+ Successful Projects",
      description: "Reached our first major milestone in enterprise security installations"
    },
    {
      year: "2020",
      title: "Vision 2030 Partner",
      description: "Became an official technology partner supporting Saudi Vision 2030"
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "Recognized as the leading IT transformation partner in the Kingdom"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-br from-[#FFF9F3] via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-4 py-2 rounded-full text-[#FC5810] font-medium text-sm mb-6">
              <Users size={16} />
              <span>About DIT</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Architects of <span className="text-[#FC5810] relative">
                Digital Excellence
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 15 years, <span className="font-semibold text-[#FC5810]">Dar Al Ibtikar Wa Al Taqnia (DIT)</span> has been 
              at the forefront of Saudi Arabia's digital transformation journey, empowering businesses with innovative IT solutions 
              that drive growth, ensure security, and unlock unlimited potential.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <IconComponent className="w-8 h-8 text-[#FC5810] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl sm:text-4xl font-bold text-[#FC5810] mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-[#FC5810]" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To empower Saudi businesses with cutting-edge technology solutions that drive digital transformation, 
                  enhance operational efficiency, and create sustainable competitive advantages in an increasingly connected world.
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-[#FC5810]" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the Kingdom's most trusted technology partner, leading Saudi Arabia's digital renaissance and 
                  contributing to Vision 2030 by building a smarter, more secure, and future-ready business ecosystem.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our Mission and Vision"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Core <span className="text-[#FC5810]">Values</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <div className="bg-[#FC5810]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-[#FC5810]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our <span className="text-[#FC5810]">Journey</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - the DIT story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#FC5810]/30 lg:transform lg:-translate-x-px"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-[#FC5810] rounded-full lg:transform lg:-translate-x-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                      <div className="text-[#FC5810] font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Leadership <span className="text-[#FC5810]">Team</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving DIT's mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-[#FC5810] font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DIT */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#FC5810] to-[#E63D1F] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Why Choose DIT?</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-16 leading-relaxed">
            We're not just another IT company. We're your strategic technology partner, 
            committed to transforming your business vision into digital reality.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="opacity-80">500+ successful implementations across diverse industries</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Award-Winning Solutions</h3>
              <p className="opacity-80">Recognized for excellence in digital transformation</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Security Expertise</h3>
              <p className="opacity-80">Certified experts in enterprise-grade security solutions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-[#FC5810] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#FC5810] transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;