
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

          {/* Enhanced Stats Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FC5810]/5 via-transparent to-[#FC5810]/5 rounded-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Trusted by <span className="text-[#FC5810]">Industry Leaders</span>
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our track record speaks for itself - delivering excellence across Saudi Arabia
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group relative">
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group-hover:border-[#FC5810]/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FC5810]/10 to-transparent rounded-bl-2xl"></div>
                        
                        <div className="relative z-10">
                          <div className="bg-[#FC5810]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#FC5810]/20 transition-all duration-300">
                            <IconComponent className="w-8 h-8 text-[#FC5810]" />
                          </div>
                          
                          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FC5810] to-[#E63D1F] bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                            {stat.number}
                          </div>
                          
                          <div className="text-gray-700 font-semibold text-sm lg:text-base leading-tight">
                            {stat.label}
                          </div>
                        </div>
                        
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FC5810]/5 to-[#E63D1F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FC5810]/5 via-transparent to-[#FC5810]/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FC5810]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FC5810]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-6 py-3 rounded-full text-[#FC5810] font-semibold text-sm mb-8">
              <Target size={18} />
              <span>Our Purpose</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Driving <span className="text-[#FC5810] relative">Digital Excellence
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our mission and vision guide every innovation, every solution, and every partnership we forge
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission & Vision Cards */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Mission Card */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FC5810]/10 to-transparent rounded-bl-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#FC5810]/10 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-[#FC5810]" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We <span className="font-semibold text-[#FC5810]">empower</span> Saudi businesses to <span className="font-semibold text-[#FC5810]">thrive</span> in the 
                    <span className="font-semibold text-[#FC5810]"> digital age</span> ⚡ by delivering <span className="font-semibold text-[#FC5810]">intelligent</span> solutions that
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="bg-green-50 text-green-700 px-4 py-2 rounded-xl font-medium border border-green-200">
                      ✓ Secure
                    </span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-medium border border-blue-200">
                      ⚡ Optimize
                    </span>
                    <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl font-medium border border-purple-200">
                      🚀 Transform
                    </span>
                  </div>
                  <div className="mt-6 p-4 bg-[#FC5810]/5 rounded-2xl border-l-4 border-[#FC5810]">
                    <p className="text-[#FC5810] font-medium italic">
                      "Building tomorrow's <span className="font-bold">smart infrastructure</span> today"
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-gradient-to-br from-[#FC5810] to-[#E63D1F] rounded-3xl p-8 lg:p-10 shadow-xl text-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    To be the Kingdom's most trusted technology partner, leading Saudi Arabia's digital renaissance and 
                    contributing to <span className="font-bold text-white">Vision 2030</span> by building a smarter, more secure, 
                    and future-ready business ecosystem.
                  </p>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <span className="font-medium">Aligned with Saudi Vision 2030</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Image Section */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FC5810]/20 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <img 
                  src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Our Mission and Vision"
                  className="relative w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-rotate-1"
                />
                
                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FC5810]">99.9%</div>
                    <div className="text-sm text-gray-600 font-medium">Uptime</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FC5810]">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-32 bg-gradient-to-b from-gray-50 via-white to-[#FFF9F3] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FC5810]/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
      </div>

      {/* Our Values */}
      <section className="py-32 px-6 lg:px-8 bg-[#FFF9F3] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FC5810]/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FC5810]/5 rounded-full blur-3xl translate-x-24 translate-y-24"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-6 py-3 rounded-full text-[#FC5810] font-semibold text-sm mb-8">
              <Heart size={18} />
              <span>Core Values</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Values That <span className="text-[#FC5810] relative">Drive Us
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These principles guide every decision we make and every solution we deliver, 
              ensuring excellence in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <div key={index} className="group relative">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FC5810]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-105"></div>
                  
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 group-hover:border-[#FC5810]/30 overflow-hidden">
                    {/* Top corner decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FC5810]/10 to-transparent rounded-bl-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-[#FC5810]/10 rounded-2xl w-18 h-18 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FC5810]/20 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FC5810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <IconComponent className="w-10 h-10 text-[#FC5810] relative z-10" />
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FC5810] transition-colors duration-300">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-gray-700 transition-colors duration-300">
                        {value.description}
                      </p>
                      
                      {/* Bottom highlight line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FC5810] to-[#E63D1F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-32 bg-gradient-to-b from-[#FFF9F3] via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FC5810]/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
          <div className="w-6 h-6 bg-[#FC5810] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Our Story Timeline */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#FC5810]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-[#FC5810]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-6 py-3 rounded-full text-[#FC5810] font-semibold text-sm mb-8">
              <Award size={18} />
              <span>Our Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#FC5810] relative">Success Story
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings to industry leadership - the milestones that shaped our journey 
              towards becoming Saudi Arabia's trusted technology partner
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

      {/* Visual Separator */}
      <div className="h-32 bg-gradient-to-b from-white via-gray-50 to-[#FFF9F3] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FC5810]/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#FC5810]"></div>
            <Users className="w-8 h-8 text-[#FC5810]" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#FC5810]"></div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <section className="py-32 px-6 lg:px-8 bg-[#FFF9F3] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FC5810]/5 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FC5810]/5 rounded-full blur-3xl -translate-x-24 translate-y-24"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FC5810]/10 px-6 py-3 rounded-full text-[#FC5810] font-semibold text-sm mb-8">
              <Users size={18} />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-[#FC5810] relative">Visionary Leaders
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The exceptional minds driving DIT's mission forward and shaping the future of 
              technology in Saudi Arabia
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

      {/* Visual Separator */}
      <div className="h-32 bg-gradient-to-b from-[#FFF9F3] via-gray-50 to-[#FC5810] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#FC5810] to-white"></div>
            <CheckCircle className="w-10 h-10 text-white bg-[#FC5810] rounded-full p-2" />
            <div className="w-20 h-1 bg-gradient-to-l from-transparent via-[#FC5810] to-white"></div>
          </div>
        </div>
      </div>

      {/* Why Choose DIT */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#FC5810] to-[#E63D1F] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full text-white font-semibold text-sm mb-8">
              <CheckCircle size={18} />
              <span>Why Choose DIT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Your Trusted <span className="relative">Technology Partner
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              </span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              We're not just another IT company. We're your strategic technology partner, 
              committed to transforming your business vision into digital reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
                <p className="opacity-90 text-lg">500+ successful implementations across diverse industries</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Award-Winning Solutions</h3>
                <p className="opacity-90 text-lg">Recognized for excellence in digital transformation</p>
              </div>
            </div>
            <div className="text-center group lg:col-start-2 md:col-span-2 lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Security Expertise</h3>
                <p className="opacity-90 text-lg">Certified experts in enterprise-grade security solutions</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-[#FC5810] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-3 group"
            >
              Start Your Journey 
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-[#FC5810] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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