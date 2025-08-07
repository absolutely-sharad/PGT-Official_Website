import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: 'sustainable-future',
      title: 'Building a Sustainable Future Through Technology',
      excerpt: 'Exploring how innovative technologies are reshaping our approach to environmental conservation and sustainable development.',
      content: 'Full article content about sustainable technology...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read'
    },
    {
      id: 'youth-leadership',
      title: 'Empowering Youth Leadership in Global Communities',
      excerpt: 'How young leaders are driving change and creating impact in communities worldwide through innovative programs.',
      content: 'Full article content about youth leadership...',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read'
    },
    {
      id: 'education-innovation',
      title: 'Innovation in Education: Transforming Learning Experiences',
      excerpt: 'Discover how cutting-edge educational approaches are revolutionizing the way we learn and teach.',
      content: 'Full article content about education innovation...',
      author: 'Prof. Emily Rodriguez',
      date: '2024-01-05',
      category: 'Education',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    },
    {
      id: 'global-partnerships',
      title: 'Strengthening Global Partnerships for Social Impact',
      excerpt: 'Building bridges across cultures and continents to create meaningful change through collaborative efforts.',
      content: 'Full article content about global partnerships...',
      author: 'David Kim',
      date: '2023-12-28',
      category: 'Partnerships',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read'
    },
    {
      id: 'mental-health-awareness',
      title: 'Mental Health Awareness in the Digital Age',
      excerpt: 'Addressing mental health challenges and promoting wellbeing in our increasingly connected world.',
      content: 'Full article content about mental health...',
      author: 'Dr. Lisa Thompson',
      date: '2023-12-20',
      category: 'Health',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 min read'
    },
    {
      id: 'climate-action',
      title: 'Climate Action: Small Steps, Big Impact',
      excerpt: 'How individual actions and community initiatives are contributing to global climate solutions.',
      content: 'Full article content about climate action...',
      author: 'Alex Green',
      date: '2023-12-15',
      category: 'Environment',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'Technology', 'Leadership', 'Education', 'Partnerships', 'Health', 'Environment'];

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <AnimatedCard animationType="fadeIn" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Insights, stories, and updates from our global community of changemakers
          </p>
        </div>
      </AnimatedCard>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedCard animationType="slideUp" delay={200} className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
              <AnimatedCard
                onChange={(e) => setSelectedCategory(e.target.value)}
                animation="slideUp"
                delay={index * 100}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </AnimatedCard>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <AnimatedCard
              key={post.id}
              animationType="slideUp"
              delay={index * 100}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </AnimatedCard>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <AnimatedCard animationType="fadeIn" className="text-center py-12">
            <div className="text-gray-500">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          </AnimatedCard>
        )}
      </div>
    </div>
  );
};

export default Blog;