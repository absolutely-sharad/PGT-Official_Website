import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const BlogCard = ({ post }) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // Load likes from localStorage
        const storedLikes = JSON.parse(localStorage.getItem(`blog-likes-${post.id}`)) || { count: 0, liked: false };
        setLikes(storedLikes.count);
        setIsLiked(storedLikes.liked);
    }, [post.id]);

    const handleLike = () => {
        const newLikes = isLiked ? likes - 1 : likes + 1;
        const newIsLiked = !isLiked;
        setLikes(newLikes);
        setIsLiked(newIsLiked);

        // Save to localStorage
        localStorage.setItem(`blog-likes-${post.id}`, JSON.stringify({ count: newLikes, liked: newIsLiked }));
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            {/* ... other blog card content ... */}
            <div className="flex items-center justify-end mt-4">
                <button onClick={handleLike} className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart size={20} className={isLiked ? 'text-red-500 fill-current' : ''} />
                    <span>{likes}</span>
                </button>
            </div>
        </div>
    );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in Education',
      excerpt: 'Exploring how technology is reshaping the educational landscape and creating new opportunities for learners worldwide.',
      author: 'Pranav Gujar',
      date: '2024-06-15',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'future-digital-transformation-education'
    },
    {
      id: 2,
      title: 'Building Resilient Communities Through Leadership',
      excerpt: 'How our VoA Initiative is empowering local leaders to create lasting change in their communities.',
      author: 'Sarah Johnson',
      date: '2024-06-10',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'building-resilient-communities-leadership'
    },
    {
      id: 3,
      title: 'Mental Health in the Digital Age',
      excerpt: 'Understanding the importance of mental wellness and how our MotivMinds program addresses modern challenges.',
      author: 'Dr. Maria Rodriguez',
      date: '2024-06-05',
      category: 'Wellness',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'mental-health-digital-age'
    },
    {
      id: 4,
      title: 'Innovation in Higher Education',
      excerpt: 'How the HED Program is revolutionizing access to quality higher education across developing nations.',
      author: 'Prof. David Chen',
      date: '2024-05-28',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'innovation-higher-education'
    },
    {
      id: 5,
      title: 'The Power of Professional Development',
      excerpt: 'Seminarix workshops are creating new pathways for career advancement and skill development.',
      author: 'Lisa Anderson',
      date: '2024-05-20',
      category: 'Professional Development',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'power-professional-development'
    },
    {
      id: 6,
      title: 'Global Impact: Our Journey So Far',
      excerpt: 'Reflecting on six years of transformation and the communities we\'ve touched across 50+ countries.',
      author: 'Pranav Gujar',
      date: '2024-05-15',
      category: 'Impact',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'global-impact-journey'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'Education', name: 'Education', count: blogPosts.filter(post => post.category === 'Education').length },
    { id: 'Leadership', name: 'Leadership', count: blogPosts.filter(post => post.category === 'Leadership').length },
    { id: 'Wellness', name: 'Wellness', count: blogPosts.filter(post => post.category === 'Wellness').length },
    { id: 'Professional Development', name: 'Professional Development', count: blogPosts.filter(post => post.category === 'Professional Development').length },
    { id: 'Impact', name: 'Impact', count: blogPosts.filter(post => post.category === 'Impact').length }
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
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;