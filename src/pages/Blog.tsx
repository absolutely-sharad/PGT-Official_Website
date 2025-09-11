import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Calendar, User, ArrowRight } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const BlogCard = ({ post, index }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Load likes from localStorage for non-authenticated users
    if (!user) {
      const storedLikes = JSON.parse(localStorage.getItem(`blog-likes-${post.id}`)) || { count: 0, liked: false };
      setLikes(storedLikes.count);
      setIsLiked(storedLikes.liked);
    } else {
      // Load likes from database for authenticated users
      loadLikes();
    }
  }, [post.id, user]);

  const loadLikes = async () => {
    try {
      // Get total likes count
      const { count } = await supabase
        .from('blog_likes')
        .select('*', { count: 'exact', head: true })
        .eq('blog_id', post.slug);

      setLikes(count || 0);

      if (user) {
        // Check if current user has liked this post
        const { data } = await supabase
          .from('blog_likes')
          .select('id')
          .eq('blog_id', post.slug)
          .eq('user_id', user.id)
          .single();

        setIsLiked(!!data);
      }
    } catch (error) {
      console.error('Error loading likes:', error);
    }
  };

  const handleLike = async () => {
    if (loading) return;

    // Require authentication to like posts
    if (!user) {
      toast.error('Please sign in to like posts');
      return;
    }

    setLoading(true);

    try {
      if (isLiked) {
        // Remove like
        await supabase
          .from('blog_likes')
          .delete()
          .eq('blog_id', post.slug)
          .eq('user_id', user.id);

        setLikes(prev => prev - 1);
        setIsLiked(false);
      } else {
        // Add like
        await supabase
          .from('blog_likes')
          .insert({
            blog_id: post.slug,
            user_id: user.id
          });

        setLikes(prev => prev + 1);
        setIsLiked(true);
      }
    } catch (error) {
      console.error('Error updating like:', error);
      toast.error('Failed to update like');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedCard animation="slideUp" delay={index * 150}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">{post.author}</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <div className="mb-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
            >
              Read More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            
            <button 
              onClick={handleLike}
              disabled={loading}
              className={`flex items-center space-x-1 transition-colors ${
                isLiked 
                  ? 'text-red-500' 
                  : 'text-gray-500 hover:text-red-500'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Heart 
                className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} 
              />
              <span className="font-medium">{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in Education',
      excerpt: 'Exploring how technology is reshaping the educational landscape and creating new opportunities for learners worldwide. From AI-powered personalized learning to virtual reality classrooms, discover the innovations that are revolutionizing education.',
      author: 'Pranav Gujar',
      date: '2024-06-15',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'future-digital-transformation-education'
    },
    {
      id: 2,
      title: 'Building Resilient Communities Through Leadership',
      excerpt: 'How our VoA Initiative is empowering local leaders to create lasting change in their communities. Learn about the strategies and methodologies that are helping communities become more resilient and self-sufficient.',
      author: 'Sarah Johnson',
      date: '2024-06-10',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'building-resilient-communities-leadership'
    },
    {
      id: 3,
      title: 'Mental Health in the Digital Age',
      excerpt: 'Understanding the importance of mental wellness and how our MotivMinds program addresses modern challenges. Explore the intersection of technology and mental health, and discover practical strategies for maintaining wellbeing.',
      author: 'Dr. Maria Rodriguez',
      date: '2024-06-05',
      category: 'Wellness',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'mental-health-digital-age'
    },
    {
      id: 4,
      title: 'Innovation in Higher Education',
      excerpt: 'How the HED Program is revolutionizing access to quality higher education across developing nations. Discover the innovative approaches and partnerships that are making education more accessible and affordable.',
      author: 'Prof. David Chen',
      date: '2024-05-28',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'innovation-higher-education'
    },
    {
      id: 5,
      title: 'The Power of Professional Development',
      excerpt: 'Seminarix workshops are creating new pathways for career advancement and skill development. Learn how continuous learning and professional development can transform careers and open new opportunities.',
      author: 'Lisa Anderson',
      date: '2024-05-20',
      category: 'Professional Development',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'power-professional-development'
    },
    {
      id: 6,
      title: 'Global Impact: Our Journey So Far',
      excerpt: 'Reflecting on six years of transformation and the communities we\'ve touched across 50+ countries. Explore the stories, challenges, and victories that have shaped our global network and impact.',
      author: 'Pranav Gujar',
      date: '2024-05-15',
      category: 'Impact',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'global-impact-journey'
    },
    {
      id: 7,
      title: 'Sustainable Development Goals and Community Action',
      excerpt: 'How local communities are contributing to global sustainability goals through grassroots initiatives. Discover inspiring examples of community-led projects that are making a real difference.',
      author: 'Ahmed Hassan',
      date: '2024-05-10',
      category: 'Impact',
      image: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'sustainable-development-community-action'
    },
    {
      id: 8,
      title: 'The Role of Technology in Social Change',
      excerpt: 'Examining how digital tools and platforms are enabling social movements and community organizing. Learn about the technologies that are empowering activists and changemakers worldwide.',
      author: 'Michael Chen',
      date: '2024-05-05',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'technology-social-change'
    },
    {
      id: 9,
      title: 'Women in Leadership: Breaking Barriers',
      excerpt: 'Celebrating the achievements of women leaders in our network and exploring strategies for promoting gender equality in leadership roles. Discover inspiring stories and practical insights.',
      author: 'Dr. Fatima Al-Rashid',
      date: '2024-04-28',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'women-leadership-breaking-barriers'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'Education', name: 'Education', count: blogPosts.filter(post => post.category === 'Education').length },
    { id: 'Leadership', name: 'Leadership', count: blogPosts.filter(post => post.category === 'Leadership').length },
    { id: 'Wellness', name: 'Wellness', count: blogPosts.filter(post => post.category === 'Wellness').length },
    { id: 'Professional Development', name: 'Professional Development', count: blogPosts.filter(post => post.category === 'Professional Development').length },
    { id: 'Impact', name: 'Impact', count: blogPosts.filter(post => post.category === 'Impact').length },
    { id: 'Technology', name: 'Technology', count: blogPosts.filter(post => post.category === 'Technology').length }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Insights, stories, and updates from our global network of changemakers
              </p>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="flex flex-wrap justify-center gap-2 text-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors text-center ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest insights and updates from our global network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default Blog;