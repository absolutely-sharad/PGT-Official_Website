import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Zap, Users, Globe, Award } from 'lucide-react';
import CountUpNumber from '../components/CountUpNumber';
import AnimatedCard from '../components/AnimatedCard';

const Home = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Purpose',
      description: 'Every initiative we undertake is driven by a clear purpose to create meaningful impact.',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We foster continuous learning and development for individuals and organizations.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Transformation',
      description: 'We catalyze positive change that transforms lives and communities.',
      color: 'text-purple-600'
    }
  ];

  const impactStats = [
    { number: 10000, label: 'Lives Impacted', icon: Users, suffix: '+' },
    { number: 50, label: 'Countries Reached', icon: Globe, suffix: '+' },
    { number: 25, label: 'Awards Won', icon: Award, suffix: '+' },
    { number: 6, label: 'Years of Excellence', icon: TrendingUp }
  ];

  const programs = [
    {
      name: 'D3 Program',
      description: 'Comprehensive development initiative focusing on digital transformation.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'VoA Initiative',
      description: 'Voice of Action - empowering communities through advocacy and action.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Seminarix',
      description: 'Educational seminars and workshops for skill development.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Marquee / News Ticker */}
      <div className="fixed top-0 left-0 w-full bg-blue-100 py-2 px-4 text-sm text-blue-800 font-medium overflow-hidden whitespace-nowrap z-50">
        <marquee behavior="scroll" direction="left" scrollamount="5" onMouseOver={(e) => e.stop()} onMouseOut={(e) => e.start()}>
          <span className="mx-4">
            <Link to="/blog" className="hover:underline">
              📢 New Blog Posted — Read Now! Click here →
            </Link>
          </span>
          <span className="mx-4">
            <Link to="/careers" className="hover:underline">
              🚀 Recruitment Drive Live — Apply Now! Click here →
            </Link>
          </span>
        </marquee>
      </div>

      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="relative text-white">
          {/* Animated Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path
                fill="url(#grad1)"
                fillOpacity="1"
                d="M0,192L60,165.3C120,139,240,85,360,101.3C480,117,600,203,720,234.7C840,267,960,245,1080,208C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transforming Lives Through
                <span className="block text-yellow-300">Purpose & Growth</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
                Empowering individuals and organizations worldwide through innovative programs,
                sustainable growth, and purposeful transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/programs"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three fundamental principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 ${value.color}`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Global Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Six years of dedication, innovation, and transformation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} animation="zoomIn" delay={index * 150}>
                <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <CountUpNumber 
                    end={stat.number} 
                    suffix={stat.suffix || ''} 
                    duration={2500}
                  />
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative initiatives designed to create lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    to="/programs"
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Join thousands of individuals and organizations who have experienced growth through our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;