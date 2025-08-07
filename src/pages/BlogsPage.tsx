import React from 'react';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Digital Transformation in Saudi Arabia",
      category: "Technology Trends",
      date: "January 15, 2025",
      author: "Ahmed Al-Rashid",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Exploring how Vision 2030 is driving technological innovation across the Kingdom and what it means for businesses.",
      content: [
        "Saudi Arabia's Vision 2030 has set ambitious goals for digital transformation, positioning the Kingdom as a global leader in technology adoption and innovation. As we progress through 2025, the impact of these initiatives is becoming increasingly evident across various sectors.",
        "The digital transformation journey in Saudi Arabia is characterized by massive investments in infrastructure, artificial intelligence, and emerging technologies. The Kingdom has allocated over SAR 500 billion towards digitization projects, making it one of the most significant digital transformation initiatives globally.",
        "Key areas experiencing rapid digital evolution include healthcare, education, finance, and government services. The implementation of digital identity systems, smart city projects like NEOM, and the expansion of 5G networks are creating unprecedented opportunities for businesses and citizens alike.",
        "For businesses operating in Saudi Arabia, this digital revolution presents both opportunities and challenges. Companies that adapt quickly to digital-first approaches are seeing significant competitive advantages, while those lagging behind risk obsolescence in an increasingly connected marketplace.",
        "The integration of artificial intelligence and machine learning into business processes is no longer optional but essential. From automated customer service systems to predictive analytics in supply chain management, AI is transforming how Saudi businesses operate and compete globally.",
        "Looking ahead, the success of Saudi Arabia's digital transformation will depend on continued investment in human capital, cybersecurity infrastructure, and regulatory frameworks that support innovation while ensuring citizen privacy and data protection."
      ],
      tags: ["Digital Transformation", "Vision 2030", "AI", "Saudi Arabia"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      category: "Security",
      date: "January 10, 2025",
      author: "Sarah Al-Mahmoud",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Essential strategies to protect your business from evolving cyber threats in today's digital landscape.",
      content: [
        "In an era where cyber threats are becoming increasingly sophisticated, enterprises must adopt comprehensive cybersecurity strategies that go beyond traditional perimeter defense. The modern threat landscape requires a multi-layered approach to security.",
        "Zero Trust Architecture has emerged as the gold standard for enterprise security. This approach assumes no implicit trust and continuously validates every transaction and access request, regardless of location or user credentials. Implementing Zero Trust requires a fundamental shift in how organizations think about network security.",
        "Employee training remains one of the most critical components of any cybersecurity strategy. Human error accounts for over 95% of successful cyber attacks, making regular security awareness training essential. Organizations should conduct quarterly phishing simulations and maintain up-to-date security protocols.",
        "Advanced threat detection systems powered by artificial intelligence are revolutionizing how enterprises identify and respond to security incidents. These systems can analyze vast amounts of network traffic in real-time, identifying anomalous behavior that might indicate a security breach.",
        "Data encryption, both at rest and in transit, is non-negotiable for modern enterprises. With regulations like GDPR and local data protection laws becoming stricter, organizations must ensure that sensitive information is protected throughout its lifecycle.",
        "Regular security audits and penetration testing help organizations identify vulnerabilities before malicious actors can exploit them. A proactive approach to security testing should include both automated tools and manual testing by certified security professionals."
      ],
      tags: ["Cybersecurity", "Zero Trust", "Enterprise Security", "Data Protection"]
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Saudi Businesses",
      category: "Cloud Computing",
      date: "January 5, 2025",
      author: "Mohammed Al-Fahad",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Step-by-step approach to successfully migrating your infrastructure to the cloud while ensuring compliance.",
      content: [
        "Cloud migration has become a strategic imperative for Saudi businesses seeking to enhance operational efficiency, reduce costs, and improve scalability. However, successful cloud migration requires careful planning, execution, and ongoing management.",
        "The first step in any cloud migration journey is conducting a comprehensive assessment of your current infrastructure. This includes cataloging applications, dependencies, data flows, and identifying which workloads are suitable for cloud deployment versus those that should remain on-premises.",
        "Choosing the right cloud deployment model is crucial for success. Public cloud offers cost-effectiveness and scalability, private cloud provides enhanced security and control, while hybrid cloud delivers the best of both worlds. Saudi businesses often prefer hybrid models due to regulatory requirements and data sovereignty concerns.",
        "Data residency and compliance with local regulations, including the Saudi Data and AI Authority (SDAIA) guidelines, must be central to your cloud strategy. Ensuring that sensitive data remains within Saudi borders while leveraging global cloud capabilities requires careful architecture and provider selection.",
        "Security considerations during migration cannot be overstated. This includes implementing proper identity and access management, encryption protocols, network security measures, and continuous monitoring systems. Cloud security is a shared responsibility between the provider and the organization.",
        "A phased migration approach typically yields better results than a 'big bang' migration. Starting with less critical applications allows teams to gain experience and refine processes before migrating mission-critical systems. This approach also minimizes business disruption and reduces risk.",
        "Post-migration optimization is where many organizations realize the true benefits of cloud computing. This includes right-sizing resources, implementing cost monitoring and governance policies, and leveraging cloud-native services to enhance application performance and user experience."
      ],
      tags: ["Cloud Migration", "AWS", "Hybrid Cloud", "Compliance", "Saudi Arabia"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FC5810]/20 px-4 py-2 rounded-full text-[#FC5810] font-medium text-sm mb-6">
            <Tag size={16} />
            <span>Latest Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Technology <span className="text-[#FC5810]">Insights</span> & Trends
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on digital transformation, cybersecurity, 
            and emerging technologies shaping the future of business in Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="block group"
              >
                <article className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-200 hover:-translate-y-1 h-full">
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category floating badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-[#FC5810] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 bg-white">
                    {/* Author Section */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FC5810] to-orange-500 flex items-center justify-center shadow-md">
                        <User size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm font-semibold">{blog.author}</p>
                        <div className="flex items-center gap-3 text-gray-500 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar size={10} />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={10} />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#FC5810] transition-colors duration-200">
                      {blog.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-[#FC5810] font-semibold text-sm">
                        <span>Read More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#FC5810]"></div>
                        <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                        <div className="w-2 h-2 rounded-full bg-orange-200"></div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogsPage;