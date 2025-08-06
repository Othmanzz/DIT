import React from 'react';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const BlogPost3 = () => {
  const blog = {
    id: 3,
    title: "Cloud Migration: A Complete Guide for Saudi Businesses",
    category: "Cloud Computing",
    date: "January 5, 2025",
    author: "Mohammed Al-Fahad",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200",
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

export default BlogPost3;