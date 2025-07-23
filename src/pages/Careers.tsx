import React from 'react';
import { MapPin, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';
import ProtectedAction from '../components/ProtectedAction';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const Careers = () => {
  const { user } = useAuth();

  const handleApply = async (positionTitle: string, positionType: 'job' | 'internship') => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('applications')
        .insert({
          user_id: user.id,
          position_title: positionTitle,
          position_type: positionType,
          application_data: {
            applied_at: new Date().toISOString(),
            source: 'website'
          }
        });

      if (error) throw error;

      // Log activity
      await supabase
        .from('user_activities')
        .insert({
          user_id: user.id,
          activity_type: `Applied for ${positionType}`,
          activity_data: {
            position_title: positionTitle,
            position_type: positionType
          }
        });

      toast.success('Application submitted successfully!');
    } catch (error) {
      toast.error('Error submitting application');
      console.error('Error:', error);
    }
  };
  const openPositions = [
    {
      id: 1,
      title: 'Program Coordinator - D3 Initiative',
      department: 'Programs',
      location: 'Remote / Toronto, Canada',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Lead the coordination and implementation of our Digital Development & Design program across multiple regions.',
      requirements: [
        'Bachelor\'s degree in relevant field',
        'Experience in program management',
        'Strong communication skills',
        'Passion for digital transformation'
      ],
      applyLink: 'https://forms.google.com/careers/program-coordinator'
    },
    {
      id: 2,
      title: 'Community Engagement Specialist',
      department: 'Community Relations',
      location: 'Remote / Singapore',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Build and maintain relationships with community partners and stakeholders across our global network.',
      requirements: [
        'Experience in community outreach',
        'Excellent interpersonal skills',
        'Multilingual capabilities preferred',
        'Understanding of social impact initiatives'
      ],
      applyLink: 'https://forms.google.com/careers/community-specialist'
    },
    {
      id: 3,
      title: 'Content Creator & Digital Marketing',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Create compelling content and manage digital marketing campaigns to amplify our global impact.',
      requirements: [
        'Proven content creation experience',
        'Social media marketing expertise',
        'Video editing and graphic design skills',
        'Understanding of nonprofit sector'
      ],
      applyLink: 'https://forms.google.com/careers/content-creator'
    }
  ];

  const internshipPrograms = [
    {
      id: 1,
      title: 'Summer Research Internship',
      duration: '3 months',
      location: 'Remote',
      department: 'Research & Development',
      description: 'Conduct research on global education trends and contribute to program development.',
      stipend: 'Paid',
      deadline: 'March 31, 2025',
      applyLink: 'https://forms.google.com/internships/summer-research',
      requirements: [
        'Currently enrolled in undergraduate/graduate program',
        'Strong research and analytical skills',
        'Interest in education and social impact',
        'Excellent written communication'
      ]
    },
    {
      id: 2,
      title: 'Digital Marketing Internship',
      duration: '6 months',
      location: 'Remote',
      department: 'Marketing',
      description: 'Support digital marketing initiatives and social media campaigns.',
      stipend: 'Paid',
      deadline: 'April 15, 2025',
      applyLink: 'https://forms.google.com/internships/digital-marketing',
      requirements: [
        'Knowledge of social media platforms',
        'Basic design skills (Canva, Photoshop)',
        'Creative thinking and problem-solving',
        'Enthusiasm for social causes'
      ]
    },
    {
      id: 3,
      title: 'Program Support Internship',
      duration: '4 months',
      location: 'Hybrid',
      department: 'Programs',
      description: 'Assist in program coordination and participant engagement activities.',
      stipend: 'Paid',
      deadline: 'May 1, 2025',
      applyLink: 'https://forms.google.com/internships/program-support',
      requirements: [
        'Strong organizational skills',
        'Experience with virtual collaboration tools',
        'Passion for education and development',
        'Ability to work in diverse teams'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Global Impact',
      description: 'Work on projects that transform lives across 50+ countries',
      icon: '🌍'
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and skill development',
      icon: '📈'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible working arrangements',
      icon: '💻'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health benefits and wellness programs',
      icon: '🏥'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative, inclusive, and purpose-driven work environment',
      icon: '🤝'
    },
    {
      title: 'Learning Budget',
      description: 'Annual budget for conferences, courses, and certifications',
      icon: '📚'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Be part of a global network that's transforming lives through purpose, growth, and meaningful change
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about creating positive change and building a better future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <ProtectedAction
                      onAction={() => handleApply(position.title, 'job')}
                      fallback={
                        <button className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed inline-flex items-center">
                          Sign in to Apply
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </button>
                      }
                    >
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                        Apply Now
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </button>
                    </ProtectedAction>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your career with hands-on experience in social impact and global development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {internshipPrograms.map((internship) => (
              <div key={internship.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {internship.stipend}
                  </span>
                  <span className="text-sm text-gray-500">{internship.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{internship.title}</h3>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {internship.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {internship.department}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Deadline: {internship.deadline}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {internship.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <ProtectedAction
                  onAction={() => handleApply(internship.title, 'internship')}
                  fallback={
                    <button className="w-full bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed inline-flex items-center justify-center">
                      Sign in to Apply
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </button>
                  }
                >
                  <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center">
                    Apply for Internship
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </button>
                </ProtectedAction>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures we find the right fit for both you and our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application through our online form</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Our team reviews your application and qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Virtual or in-person interview with the hiring team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome</h3>
              <p className="text-gray-600 text-sm">Join our team and start making an impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Don't see a position that fits? We're always looking for passionate individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@pgtglobal.org"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Send Us Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;