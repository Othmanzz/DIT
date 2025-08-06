import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, Building, MessageSquare, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const services = [
    'IT Solutions & Management',
    'Business Apps Solutions', 
    'Software Development',
    'Cybersecurity Solutions',
    'Cloud & DevOps',
    'Procurement Solutions',
    'Education IT',
    'IT Project Management',
    'General Inquiry'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+966 11 123 4567',
      subtext: '24/7 Support Available'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@dit-sa.com',
      subtext: 'We reply within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'King Abdullah Financial District',
      subtext: 'Riyadh, Saudi Arabia'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Sun - Thu: 8:00 AM - 6:00 PM',
      subtext: 'Fri - Sat: Emergency Support Only'
    }
  ];

  const offices = [
    {
      city: 'Riyadh',
      address: 'King Abdullah Financial District, Tower 3, Floor 15',
      phone: '+966 11 123 4567',
      isMain: true
    },
    {
      city: 'Jeddah',
      address: 'King Abdullah Street, Business Center, Floor 8',
      phone: '+966 12 456 7890',
      isMain: false
    },
    {
      city: 'Dammam',
      address: 'Prince Mohammed Street, Tech Hub, Floor 12',
      phone: '+966 13 789 0123',
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FC5810]/20 px-4 py-2 rounded-full text-[#FC5810] font-medium text-sm mb-6">
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something <span className="text-[#FC5810]">Amazing</span> Together
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology solutions? 
            Our experts are here to help you achieve your digital transformation goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a customized solution for your needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC5810] focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC5810] focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC5810] focus:border-transparent transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC5810] focus:border-transparent transition-colors duration-200"
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC5810] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC5810] focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your project requirements, timeline, and how we can help you achieve your goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FC5810] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#E63D1F] focus:ring-2 focus:ring-[#FC5810] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're here to help you navigate your digital transformation journey. 
                  Reach out through any of the channels below, and our team of experts 
                  will provide you with personalized solutions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FC5810] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-700 mb-1">{item.details}</p>
                        <p className="text-sm text-gray-500">{item.subtext}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Locations */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${office.isMain ? 'border-[#FC5810] bg-[#FC5810]/5' : 'border-gray-200'}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{office.city}</h4>
                            {office.isMain && (
                              <span className="text-xs bg-[#FC5810] text-white px-2 py-1 rounded-full">
                                Main Office
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                          <p className="text-[#FC5810] text-sm font-medium">{office.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our main office in the heart of Riyadh's financial district, 
              or connect with us at our regional locations across Saudi Arabia.
            </p>
          </div>
          
          {/* Map placeholder */}
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center border border-gray-300">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-500">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;