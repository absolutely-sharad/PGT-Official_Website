import React from 'react';
import { Calendar, User, ArrowRight, Clock, Heart, MessageCircle } from 'lucide-react';
import ProtectedAction from '../components/ProtectedAction';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const Blog = () => {
  const { user } = useAuth();
  const [likedPosts, setLikedPosts] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (user) {
      fetchUserLikes();
    }
  }, [user]);

  const fetchUserLikes = async () => {
    if (!user) return;

    try {
      const { data } = await supabase
        .from('blog_likes')
        .select('blog_id')
        .eq('user_id', user.id);

      if (data) {
        setLikedPosts(data.map(like => like.blog_id));
      }
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleLike = async (blogId: string) => {
    if (!user) return;

    try {
      const isLiked = likedPosts.includes(blogId);

      if (isLiked) {
        // Unlike
        await supabase
          .from('blog_likes')
          .delete()
          .eq('user_id', user.id)
          .eq('blog_id', blogId);

        setLikedPosts(prev => prev.filter(id => id !== blogId));
        toast.success('Post unliked');
      } else {
        // Like
        await supabase
          .from('blog_likes')
          .insert({
            user_id: user.id,
            blog_id: blogId
          });

        // Log activity
        await supabase
          .from('user_activities')
          .insert({
            user_id: user.id,
            activity_type: 'Liked blog post',
            activity_data: {
              blog_id: blogId
            }
          });

        setLikedPosts(prev => [...prev, blogId]);
        toast.success('Post liked!');
      }
    } catch (error) {
      toast.error('Error updating like');
      console.error('Error:', error);
    }
  };
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in Education',
      excerpt: 'Exploring how technology is reshaping the educational landscape and creating new opportunities for learners worldwide.',
      author: 'Pranav Gujar',
      date: '2024-06-15',
      readTime: '5 min read',
      category: 'Digital Transformation',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Building Resilient Communities Through Purpose-Driven Leadership',
      excerpt: 'How our Voice of Action initiative is empowering community leaders to create lasting positive change.',
      author: 'Sarah Johnson',
      date: '2024-06-10',
      readTime: '7 min read',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'Mental Health in the Digital Age: A Holistic Approach',
      excerpt: 'Understanding the importance of mental wellness and how our MotivMinds program addresses modern challenges.',
      author: 'Dr. Maria Rodriguez',
      date: '2024-06-05',
      readTime: '6 min read',
      category: 'Wellness',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'Innovation in Higher Education: Breaking Traditional Barriers',
      excerpt: 'How the HED Program is revolutionizing access to quality higher education across developing nations.',
      author: 'Michael Chen',
      date: '2024-05-28',
      readTime: '8 min read',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'The Power of Continuous Learning in Professional Development',
      excerpt: 'Insights from our Seminarix program on how lifelong learning drives career success and personal growth.',
      author: 'Lisa Anderson',
      date: '2024-05-20',
      readTime: '4 min read',
      category: 'Professional Development',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Global Impact: Measuring Success Beyond Numbers',
      excerpt: 'A deep dive into how we measure the true impact of our programs and the stories behind the statistics.',
      author: 'David Okafor',
      date: '2024-05-15',
      readTime: '6 min read',
      category: 'Impact',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const categories = ['All', 'Digital Transformation', 'Leadership', 'Wellness', 'Education', 'Professional Development', 'Impact'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover the latest insights, success stories, and thought leadership from our global network
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-blue-600 font-medium text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <ProtectedAction
                        onAction={() => handleLike(post.id.toString())}
                        fallback={
                          <button className="text-gray-400 hover:text-gray-600 inline-flex items-center">
                            <Heart className="h-4 w-4" />
                          </button>
                        }
                      >
                        <button 
                          className={`hover:text-red-600 inline-flex items-center ${
                            likedPosts.includes(post.id.toString()) ? 'text-red-600' : 'text-gray-400'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.includes(post.id.toString()) ? 'fill-current' : ''}`} />
                        </button>
                      </ProtectedAction>
                      
                      <ProtectedAction
                        fallback={
                          <button className="text-gray-400 hover:text-gray-600 inline-flex items-center">
                            <MessageCircle className="h-4 w-4" />
                          </button>
                        }
                      >
                        <button className="text-gray-400 hover:text-blue-600 inline-flex items-center">
                          <MessageCircle className="h-4 w-4" />
                        </button>
                      </ProtectedAction>
                      
                      <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Subscribe to our newsletter and never miss the latest insights, stories, and updates from PGT Global Network.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;