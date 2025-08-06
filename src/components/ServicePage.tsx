import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, Phone, Mail, Building } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  services: {
    title: string;
    description: string;
    features: string[];
  }[];
  approach: {
    step: number;
    title: string;
    description: string;
  }[];
  caseStudy: CaseStudy;
  specifications: {
    category: string;
    items: string[];
  }[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  services,
  approach,
  caseStudy,
  specifications
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <p className="text-lg text-gray-400 mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#FC5810] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-300 flex items-center gap-2">
                  Get Free Assessment <ArrowRight size={20} />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  View Case Study
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt={title}
                className="rounded-2xl shadow-2xl w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our <span className="text-[#FC5810]">Comprehensive</span> Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end solutions tailored to your specific business needs and technical requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#FC5810] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our <span className="text-[#FC5810]">Proven</span> Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every project follows our structured approach to ensure successful delivery and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-[#FC5810] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < approach.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight size={24} className="text-[#FC5810] mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Case Study */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Success <span className="text-[#FC5810]">Story</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we helped transform a leading Saudi organization with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
              <p className="text-lg text-[#FC5810] font-semibold mb-6">{caseStudy.client}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Star size={16} className="text-[#FC5810] flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Technical <span className="text-[#FC5810]">Specifications</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed technical requirements and implementation standards for our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#FC5810] rounded-full flex-shrink-0 mt-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get <span className="text-[#FC5810]">Started?</span></h2>
            <p className="text-lg text-gray-300">
              Contact our specialists for a free consultation and custom solution proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FC5810] rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300">+966 11 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FC5810] rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">info@dit-sa.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FC5810] rounded-full flex items-center justify-center">
                    <Building size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-300">King Abdullah Financial District<br />Riyadh, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FC5810]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FC5810]"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FC5810]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FC5810]"
                />
              </div>
              
              
              <textarea
                name="message"
                placeholder="Tell us about your project requirements..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FC5810]"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-[#FC5810] text-white py-4 rounded-lg font-semibold hover:bg-[#E63D1F] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicePage;