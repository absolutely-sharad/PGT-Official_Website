import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@pgtglobal.org',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'mailto:contact@pgtglobal.org'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our team during business hours',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Global Network HQ',
      description: 'Schedule a visit to our headquarters',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'We\'re available during these hours for immediate assistance',
      action: '#'
    }
  ];

  const offices = [
    {
      region: 'North America',
      city: 'Toronto, Canada',
      address: '123 Innovation Drive, Toronto, ON M5V 3A8',
      phone: '+1 (416) 555-0123',
      email: 'northamerica@pgtglobal.org'
    },
    {
      region: 'Asia Pacific',
      city: 'Singapore',
      address: '456 Business Park, Singapore 018956',
      phone: '+65 6555 0123',
      email: 'asiapacific@pgtglobal.org'
    },
    {
      region: 'Europe',
      city: 'London, UK',
      address: '789 Innovation Hub, London EC2A 4DP',
      phone: '+44 20 7555 0123',
      email: 'europe@pgtglobal.org'
    },
    {
      region: 'Africa',
      city: 'Lagos, Nigeria',
      address: '321 Development Center, Lagos 100001',
      phone: '+234 1 555 0123',
      email: 'africa@pgtglobal.org'
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
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                  {info.action !== '#' && (
                    <a
                      href={info.action}
                      className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                    >
                      Contact Now
                      <Send className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedCard animation="slideLeft">
              <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-left"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-left"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-left"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Media & Press</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical text-left"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      ✅ Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
            </AnimatedCard>

            {/* Contact Information */}
            <AnimatedCard animation="slideRight">
              <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any questions you might have. 
                We look forward to hearing from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">General Inquiries</h3>
                    <p className="text-gray-600">contact@pgtglobal.org</p>
                    <p className="text-gray-500 text-sm">For general questions and information</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Program Inquiries</h3>
                    <p className="text-gray-600">programs@pgtglobal.org</p>
                    <p className="text-gray-500 text-sm">Questions about our programs and initiatives</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Partnership Opportunities</h3>
                    <p className="text-gray-600">partnerships@pgtglobal.org</p>
                    <p className="text-gray-500 text-sm">Collaboration and partnership inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Media & Press</h3>
                    <p className="text-gray-600">media@pgtglobal.org</p>
                    <p className="text-gray-500 text-sm">Press inquiries and media requests</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Response Promise</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• General inquiries: Within 24 hours</li>
                  <li>• Program questions: Within 48 hours</li>
                  <li>• Partnership proposals: Within 1 week</li>
                  <li>• Urgent matters: Same day response</li>
                </ul>
              </div>
            </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across four continents, we're always close to our communities
            </p>
          </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{office.region}</h3>
                <h4 className="text-blue-600 font-semibold mb-4">{office.city}</h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-blue-600">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-blue-600">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for quick answers? Check out our comprehensive FAQ section.
          </p>
          <a
            href="/faq"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View FAQ
            <Send className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;