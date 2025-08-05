import React from 'react';
import { ArrowRight, Users, Target, Zap, Brain, GraduationCap } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import ApplyButton from '../components/ApplyButton';

const Programs = () => {
  const programs = [
    {
      id: 'd3',
      name: 'D3 Program',
      fullName: 'Digital Development & Design',
      icon: Target,
      description: 'Comprehensive digital transformation initiative focusing on technology adoption, digital literacy, and innovation-driven growth.',
      features: [
        'Digital Skills Training',
        'Technology Integration',
        'Innovation Workshops',
        'Startup Incubation',
        'Digital Marketing',
        'E-commerce Solutions'
      ],
      impact: '2,500+ participants across 15 countries',
      duration: '6-month intensive program',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'voa',
      name: 'VoA Initiative',
      fullName: 'Voice of Action',
      icon: Users,
      description: 'Empowering communities through advocacy, leadership development, and social action programs that create lasting change.',
      features: [
        'Community Leadership',
        'Advocacy Training',
        'Social Impact Projects',
        'Youth Development',
        'Women Empowerment',
        'Civic Engagement'
      ],
      impact: '1,800+ community leaders trained',
      duration: '4-month leadership program',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'seminarix',
      name: 'Seminarix',
      fullName: 'Seminar & Workshop Series',
      icon: GraduationCap,
      description: 'Educational seminars and workshops designed to enhance skills, knowledge, and professional development across various domains.',
      features: [
        'Professional Development',
        'Industry Workshops',
        'Expert Speakers',
        'Networking Events',
        'Certification Programs',
        'Mentorship Matching'
      ],
      impact: '5,000+ attendees annually',
      duration: 'Monthly events & quarterly intensives',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'motivminds',
      name: 'MotivMinds',
      fullName: 'Motivation & Mindset Development',
      icon: Brain,
      description: 'Psychological wellness and motivation programs focusing on mental health, resilience, and personal growth.',
      features: [
        'Mental Health Support',
        'Resilience Building',
        'Stress Management',
        'Goal Setting',
        'Mindfulness Training',
        'Peer Support Groups'
      ],
      impact: '3,200+ individuals supported',
      duration: '3-month wellness journey',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'hed',
      name: 'HED Program',
      fullName: 'Higher Education Development',
      icon: Zap,
      description: 'Comprehensive higher education support program focusing on academic excellence, career guidance, and research opportunities.',
      features: [
        'Academic Mentoring',
        'Research Opportunities',
        'Career Guidance',
        'Scholarship Programs',
        'University Partnerships',
        'Study Abroad Support'
      ],
      impact: '1,200+ students supported',
      duration: '2-year academic support',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive initiatives designed to transform lives and communities through purposeful growth
            </p>
          </div>
        </div>
      </section>
      </AnimatedCard>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformative Programs for Every Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital transformation to personal development, our programs are designed to meet diverse needs and create lasting impact.
            </p>
          </div>
          </AnimatedCard>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <AnimatedCard key={program.id} animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={index * 200}>
              <div key={program.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <program.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{program.name}</h3>
                      <p className="text-lg text-gray-600">{program.fullName}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                        <p className="text-gray-600">{program.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                        <p className="text-gray-600">{program.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <ApplyButton className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ApplyButton>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedCard animation="fadeIn">
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join a Program?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Take the next step in your transformation journey. Our programs are designed to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplyButton className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </ApplyButton>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
      </AnimatedCard>
    </div>
  );
};

export default Programs;