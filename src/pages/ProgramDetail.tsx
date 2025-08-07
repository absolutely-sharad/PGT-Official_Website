import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Globe, Target, CheckCircle, Star } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import CountUpNumber from '../components/CountUpNumber';

const ProgramDetail = () => {
  const { programId } = useParams();

  // Mock program data - in a real app, this would come from an API
  const programData: { [key: string]: any } = {
    'd3': {
      name: 'D3 Program',
      fullName: 'Digital Development & Design',
      description: 'A comprehensive 6-month program designed to transform individuals and organizations through digital innovation, technology adoption, and design thinking methodologies.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200',
      duration: '6 months',
      participants: '2,500+',
      countries: '25',
      successRate: '92%',
      overview: 'The D3 Program is our flagship initiative that bridges the gap between traditional business practices and digital transformation. Participants learn cutting-edge technologies, design principles, and innovation strategies that prepare them for the digital economy.',
      objectives: [
        'Master digital literacy and technology adoption',
        'Develop innovative solutions using design thinking',
        'Build sustainable digital business models',
        'Create impactful digital products and services',
        'Lead digital transformation initiatives'
      ],
      curriculum: [
        {
          module: 'Digital Foundations',
          duration: '4 weeks',
          topics: ['Digital Literacy', 'Technology Trends', 'Digital Mindset', 'Online Collaboration Tools']
        },
        {
          module: 'Design Thinking',
          duration: '6 weeks',
          topics: ['Human-Centered Design', 'Prototyping', 'User Experience', 'Design Systems']
        },
        {
          module: 'Development Basics',
          duration: '8 weeks',
          topics: ['Web Development', 'Mobile Apps', 'No-Code Solutions', 'API Integration']
        },
        {
          module: 'Digital Marketing',
          duration: '4 weeks',
          topics: ['Social Media Strategy', 'Content Marketing', 'SEO/SEM', 'Analytics']
        },
        {
          module: 'Innovation & Entrepreneurship',
          duration: '4 weeks',
          topics: ['Startup Methodology', 'Business Models', 'Funding', 'Scaling Strategies']
        }
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'Program Graduate',
          image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'The D3 Program completely transformed my approach to technology. I went from being intimidated by digital tools to launching my own e-commerce business.'
        },
        {
          name: 'Michael Chen',
          role: 'Tech Entrepreneur',
          image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'The hands-on approach and mentorship I received were exceptional. I now run a successful digital agency with 15 employees.'
        }
      ],
      requirements: [
        'Basic computer literacy',
        'Commitment to attend all sessions',
        'Willingness to learn and experiment',
        'Access to computer and internet',
        'English proficiency (intermediate level)'
      ],
      outcomes: [
        'Launch your own digital product or service',
        'Secure employment in tech companies',
        'Lead digital transformation in your organization',
        'Join our global alumni network',
        'Access to ongoing mentorship and resources'
      ]
    }
  };

  const program = programData[programId || 'd3'];

  if (!program) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <Link to="/programs" className="text-blue-600 hover:text-blue-800">
            ← Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {program.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                {program.fullName}
              </p>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                {program.description}
              </p>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/programs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCard animation="slideUp" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{program.duration}</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slideUp" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  <CountUpNumber end={2500} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-600">Participants</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slideUp" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  <CountUpNumber end={25} duration={2000} />
                </div>
                <div className="text-gray-600">Countries</div>
              </div>
            </AnimatedCard>
            <AnimatedCard animation="slideUp" delay={600}>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  <CountUpNumber end={92} suffix="%" duration={2000} />
                </div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedCard animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {program.overview}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Objectives</h3>
                <ul className="space-y-3">
                  {program.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3 mb-8">
                  {program.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Outcomes</h3>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum</h2>
              <p className="text-xl text-gray-600">Comprehensive learning modules designed for maximum impact</p>
            </div>
          </AnimatedCard>

          <div className="space-y-6">
            {program.curriculum.map((module: any, index: number) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{module.module}</h3>
                    <span className="text-blue-600 font-medium">{module.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {module.topics.map((topic: string, topicIndex: number) => (
                      <div key={topicIndex} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Hear from our program graduates</p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.testimonials.map((testimonial: any, index: number) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join thousands of individuals who have experienced growth through the {program.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;