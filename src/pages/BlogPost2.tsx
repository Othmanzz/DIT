import React from 'react';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const BlogPost2 = () => {
  const blog = {
    id: 2,
    title: "Cybersecurity Best Practices for Modern Enterprises",
    category: "Security",
    date: "January 10, 2025",
    author: "Sarah Al-Mahmoud",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
  };

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-[#FC5810] font-semibold hover:gap-3 transition-all duration-200 mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Blogs</span>
          </Link>
          
          <div className="mb-6">
            <span className="inline-block bg-[#FC5810] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium border-l-4 border-[#FC5810] pl-6">
              {blog.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 flex-wrap mb-8">
                <Tag size={18} className="text-gray-400" />
                {blog.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-[#FC5810] hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Section */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#FC5810] hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <Share2 size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#FC5810] hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <span className="text-xs font-bold">in</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#FC5810] hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <span className="text-xs font-bold">tw</span>
                    </button>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="bg-[#FC5810] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E63D1F] transition-colors duration-200"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Explore More Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover more articles on digital transformation, cybersecurity, and emerging technologies.
          </p>
          <Link 
            to="/blogs"
            className="inline-flex items-center gap-2 bg-[#FC5810] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E63D1F] transition-all duration-200"
          >
            <span>View All Articles</span>
            <ArrowLeft size={20} className="rotate-180" />
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost2;