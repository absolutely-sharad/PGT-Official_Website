import React from 'react';
import { Users, Globe, Award, TrendingUp, Heart, Star } from 'lucide-react';
import CountUpNumber from '../components/CountUpNumber';
import AnimatedCard from '../components/AnimatedCard';
import AnimatedSectionBackground from '../components/AnimatedSectionBackground';

const Impact = () => {
  const impactStats = [
    {
      icon: Users,
      number: 10000,
      suffix: '+',
      label: 'Lives Transformed',
      description: 'Individuals who have participated in our programs and experienced meaningful growth',
      color: 'text-blue-600'
    },
    {
      icon: Globe,
      number: 50,
      suffix: '+',
      label: 'Countries Reached',
      description: 'Global presence spanning across continents, connecting diverse communities',
      color: 'text-green-600'
    },
    {
      icon: Award,
      number: 25,
      suffix: '+',
      label: 'Awards & Recognition',
      description: 'International recognition for our innovative approaches and impact',
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      number: 89,
      suffix: '%',
      label: 'Success Rate',
      description: 'Participants who achieved their personal and professional goals',
      color: 'text-orange-600'
    },
    {
      icon: Heart,
      number: 500,
      suffix: '+',
      label: 'Community Partners',
      description: 'Organizations and institutions collaborating with us worldwide',
      color: 'text-pink-600'
    },
    {
      icon: Star,
      number: 4.9,
      suffix: '/5',
      decimals: 1,
      label: 'Satisfaction Score',
      description: 'Average rating from participants across all our programs',
      color: 'text-yellow-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'D3 Program Graduate',
      country: 'Canada',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The D3 Program completely transformed my approach to technology. I went from being intimidated by digital tools to launching my own e-commerce business. The support and guidance I received were exceptional.',
      impact: 'Launched successful online business'
    },
    {
      name: 'Michael Chen',
      role: 'VoA Initiative Leader',
      country: 'Singapore',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Through the Voice of Action initiative, I found my voice as a community leader. The program gave me the tools and confidence to advocate for positive change in my community.',
      impact: 'Led 3 community improvement projects'
    },
    {
      name: 'Maria Rodriguez',
      role: 'MotivMinds Participant',
      country: 'Mexico',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'MotivMinds helped me overcome years of self-doubt and anxiety. The mental health support and resilience training I received have been life-changing. I now help others on their wellness journey.',
      impact: 'Became a certified wellness coach'
    },
    {
      name: 'David Okafor',
      role: 'HED Program Scholar',
      country: 'Nigeria',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The HED Program opened doors I never thought possible. The scholarship and mentorship helped me pursue my masters degree and now I\'m working on groundbreaking research in renewable energy.',
      impact: 'Earned Masters degree with distinction'
    },
    {
      name: 'Lisa Anderson',
      role: 'Seminarix Workshop Leader',
      country: 'Australia',
      image: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Seminarix gave me the platform to share my expertise while learning from incredible professionals worldwide. The networking opportunities have been invaluable for my career growth.',
      impact: 'Expanded professional network by 300%'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Multi-Program Participant',
      country: 'Egypt',
      image: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'I\'ve participated in multiple PGT programs over the years. Each one has added new dimensions to my personal and professional growth. The community aspect is truly special.',
      impact: 'Founded nonprofit organization'
    }
  ];

  const programImpact = [
    {
      program: 'D3 Program',
      participants: '2,500+',
      successStories: 'Started 150+ businesses',
      globalReach: '25 countries',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      program: 'VoA Initiative',
      participants: '1,800+',
      successStories: 'Led 300+ community projects',
      globalReach: '20 countries',
      color: 'bg-green-100 text-green-800'
    },
    {
      program: 'Seminarix',
      participants: '5,000+',
      successStories: '90% career advancement',
      globalReach: '35 countries',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      program: 'MotivMinds',
      participants: '3,200+',
      successStories: '85% improved wellbeing',
      globalReach: '30 countries',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      program: 'HED Program',
      participants: '1,200+',
      successStories: '95% graduation rate',
      globalReach: '15 countries',
      color: 'bg-pink-100 text-pink-800'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Measuring success through the lives we've transformed and the communities we've empowered
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six years of dedication translated into measurable, meaningful change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUpNumber 
                    end={stat.number} 
                    suffix={stat.suffix || ''} 
                    decimals={stat.decimals || 0}
                    duration={2500}
                  />
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program-Specific Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program creates unique value and measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programImpact.map((program, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${program.color}`}>
                  {program.program}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Participants</span>
                    <span className="font-semibold text-gray-900">{program.participants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Stories</span>
                    <span className="font-semibold text-gray-900">{program.successStories}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Global Reach</span>
                    <span className="font-semibold text-gray-900">{program.globalReach}</span>
                  </div>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices of Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people whose lives have been transformed through our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 font-semibold text-sm">
                    Impact: {testimonial.impact}
                  </p>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="relative py-16 text-white overflow-hidden">
        <AnimatedSectionBackground variant="green" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our 2030 Vision
            </h2>
            <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
              Building on our success, we're committed to expanding our impact and reaching even more lives
            </p>
          </AnimatedCard>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <AnimatedCard animation="slideUp" delay={0}>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUpNumber end={100} suffix="K+" duration={3000} />
                </div>
                <div className="text-green-100 text-sm font-medium">Lives to Transform</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slideUp" delay={200}>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUpNumber end={100} duration={3000} />
                </div>
                <div className="text-green-100 text-sm font-medium">Countries to Reach</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slideUp" delay={400}>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUpNumber end={1} suffix="M+" duration={3000} />
                </div>
                <div className="text-green-100 text-sm font-medium">Indirect Beneficiaries</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slideUp" delay={600}>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUpNumber end={50} suffix="+" duration={3000} />
                </div>
                <div className="text-green-100 text-sm font-medium">New Programs</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;