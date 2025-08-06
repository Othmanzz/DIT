import React from 'react';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const BlogPost1 = () => {
  const blog = {
    id: 1,
    title: "The Future of Digital Transformation in Saudi Arabia",
    category: "Technology Trends",
    date: "January 15, 2025",
    author: "Ahmed Al-Rashid",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
                  className="bg-[#FC5810] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#E63D1F] transition-colors duration-200"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>


      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost1;