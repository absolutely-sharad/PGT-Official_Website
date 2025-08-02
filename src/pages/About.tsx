import React from 'react';
import { Target, Eye, Heart, Users, Globe, Award } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const About = () => {
  const foundingPrinciples = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every initiative begins with a clear purpose to create meaningful, lasting impact.'
    },
    {
      icon: Users,
      title: 'People-Centered',
      description: 'We believe in the power of human potential and invest in developing individuals.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Our reach extends across continents, connecting communities worldwide.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from programs to partnerships.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About PGT Global Network
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming lives through purpose, growth, and meaningful change since 2019
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedCard animation="slideLeft">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower individuals and organizations globally through innovative programs, 
                  sustainable growth strategies, and purposeful transformation initiatives that 
                  create lasting positive impact in communities worldwide.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="slideRight">
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the leading global network that transforms lives through purpose-driven 
                  growth, creating a world where every individual and organization can reach 
                  their full potential and contribute meaningfully to society.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our work and define who we are
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard animation="slideUp" delay={0}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Purpose</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe that meaningful work begins with a clear purpose. Every initiative 
                  we undertake is driven by the intention to create positive, lasting impact.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="slideUp" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="h-8 w-8 text-green-600 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  We foster continuous learning and development, believing that growth is 
                  essential for both personal fulfillment and organizational success.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="slideUp" delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We catalyze positive change that transforms lives, communities, and organizations, 
                  creating ripple effects that extend far beyond our direct reach.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  A Note from Our Founder
                </h2>
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">PG</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pranav Gujar</h3>
                <p className="text-gray-600 font-medium">Founder & CEO, PGT Global Network</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center italic">
                  "When I founded PGT Global Network six years ago, I had a simple but powerful vision: 
                  to create a platform where purpose meets action, where growth is not just encouraged but 
                  systematically cultivated, and where transformation becomes a way of life.
                </blockquote>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  What started as a small initiative has grown into a global network that has touched over 
                  10,000 lives across 50+ countries. Our journey has been marked by continuous learning, 
                  adaptation, and an unwavering commitment to our core values.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  Today, as we look toward the future, we remain as committed as ever to our mission of 
                  empowering individuals and organizations to reach their full potential. Every program we 
                  launch, every partnership we form, and every life we touch is a step toward building a 
                  world where purposeful growth and meaningful transformation are accessible to all.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  Thank you for being part of this incredible journey. Together, we are not just changing 
                  lives – we are transforming the world, one purpose at a time.
                </p>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 font-medium">With gratitude and excitement for what's ahead,</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">Pranav Gujar</p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Founding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core beliefs that have guided us from day one
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foundingPrinciples.map((principle, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <principle.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                    </div>
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

export default About;