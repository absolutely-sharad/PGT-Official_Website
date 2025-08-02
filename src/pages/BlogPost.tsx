import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPost = {
    id: 1,
    title: 'The Future of Digital Transformation in Education',
    content: `
      <p>Digital transformation in education has become more than just a buzzword—it's a fundamental shift that's reshaping how we learn, teach, and connect in the 21st century. As we navigate through an increasingly digital world, educational institutions worldwide are recognizing the need to adapt and evolve.</p>
      
      <h2>The Current Landscape</h2>
      <p>The COVID-19 pandemic accelerated digital adoption in education by nearly a decade. What once seemed like a distant future became an immediate necessity. Schools, universities, and training organizations had to quickly pivot to digital platforms, revealing both the potential and the challenges of technology-enhanced learning.</p>
      
      <h2>Key Areas of Transformation</h2>
      <h3>1. Personalized Learning Experiences</h3>
      <p>AI-powered platforms are now capable of adapting to individual learning styles, pace, and preferences. This personalization ensures that each learner receives content tailored to their specific needs, maximizing engagement and retention.</p>
      
      <h3>2. Virtual and Augmented Reality</h3>
      <p>Immersive technologies are bringing abstract concepts to life. Students can now walk through ancient Rome, explore the human circulatory system, or conduct virtual chemistry experiments—all from their classroom or home.</p>
      
      <h3>3. Collaborative Digital Spaces</h3>
      <p>Modern learning management systems have evolved beyond simple content repositories. They now facilitate real-time collaboration, peer-to-peer learning, and global classroom connections.</p>
      
      <h2>The Role of Educators</h2>
      <p>While technology provides the tools, educators remain at the heart of meaningful learning experiences. The role of teachers is evolving from information deliverers to learning facilitators, mentors, and digital literacy guides.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Digital transformation isn't without its challenges. Issues like digital equity, privacy concerns, and the need for continuous professional development require thoughtful solutions and sustained investment.</p>
      
      <h2>Looking Ahead</h2>
      <p>The future of education will be hybrid, flexible, and learner-centric. As we continue to innovate and adapt, the focus must remain on enhancing human potential and creating inclusive learning environments that prepare students for an ever-changing world.</p>
      
      <p>At PGT Global Network, we're committed to supporting this transformation through our D3 Program and other initiatives that bridge the gap between traditional education and digital innovation.</p>
    `,
    author: 'Pranav Gujar',
    date: '2024-06-15',
    readTime: '8 min read',
    category: 'Digital Transformation',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Education', 'Technology', 'Digital Transformation', 'Innovation']
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <div className="mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {blogPost.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {blogPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(blogPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blogPost.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp" delay={200}>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              {/* Back Button */}
              <div className="mb-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp" delay={400}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <p className="text-xl text-gray-600">Continue exploring our insights and stories</p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <AnimatedCard key={item} animation="slideUp" delay={600 + index * 100}>
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Related Article {item}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Brief description of the related article content...
                    </p>
                    <Link
                      to="/blog"
                      className="text-blue-600 font-medium hover:text-blue-800"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;