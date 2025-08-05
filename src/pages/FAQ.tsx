import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'programs', name: 'Programs' },
    { id: 'application', name: 'Application Process' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'partnership', name: 'Partnerships' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'general',
      question: 'What is PGT Global Network?',
      answer: 'PGT Global Network is a purpose-driven organization focused on transforming lives through innovative programs in digital development, community leadership, education, and personal growth. We operate across 50+ countries and have impacted over 10,000 individuals since our founding in 2019.'
    },
    {
      id: 2,
      category: 'programs',
      question: 'What programs does PGT offer?',
      answer: 'We offer five main programs: D3 (Digital Development & Design), VoA (Voice of Action) Initiative, Seminarix workshops, MotivMinds wellness program, and HED (Higher Education Development) program. Each program is designed to address specific aspects of personal and professional growth.'
    },
    {
      id: 3,
      category: 'application',
      question: 'How do I apply for a program?',
      answer: 'You can apply for our programs through our website\'s Programs page. Each program has specific eligibility criteria and application deadlines. The application process typically involves filling out an online form, submitting required documents, and participating in an interview process.'
    },
    {
      id: 4,
      category: 'programs',
      question: 'Are the programs free?',
      answer: 'Most of our programs are offered free of charge as part of our mission to make transformative education accessible to all. Some specialized workshops or certification programs may have nominal fees to cover materials and certification costs.'
    },
    {
      id: 5,
      category: 'general',
      question: 'In which countries does PGT operate?',
      answer: 'PGT Global Network operates in over 50 countries across North America, Europe, Asia-Pacific, Africa, and Latin America. We have regional offices in Toronto (Canada), Singapore, London (UK), and Lagos (Nigeria), with local partnerships in many other countries.'
    },
    {
      id: 6,
      category: 'application',
      question: 'What are the eligibility criteria for programs?',
      answer: 'Eligibility criteria vary by program. Generally, we look for individuals who are committed to personal growth, have a passion for making positive impact, and meet specific age or educational requirements for certain programs. Detailed criteria are listed on each program\'s page.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'Do I need technical skills for the D3 Program?',
      answer: 'No prior technical experience is required for the D3 Program. We start with basics and gradually build up skills. The program is designed for beginners and includes comprehensive training in digital literacy, basic programming, and digital marketing.'
    },
    {
      id: 8,
      category: 'programs',
      question: 'How long do the programs last?',
      answer: 'Program durations vary: D3 Program (6 months), VoA Initiative (4 months), MotivMinds (3 months), HED Program (2 years), and Seminarix workshops (1 day to 1 week). Each program includes follow-up support and alumni network access.'
    },
    {
      id: 9,
      category: 'general',
      question: 'How can I volunteer with PGT?',
      answer: 'We welcome volunteers! You can apply through our Careers page or contact us directly. Volunteer opportunities include program facilitation, mentorship, content creation, translation services, and local community outreach. We provide training and support for all volunteers.'
    },
    {
      id: 10,
      category: 'partnership',
      question: 'How can my organization partner with PGT?',
      answer: 'We\'re always open to meaningful partnerships. Organizations can partner with us for program delivery, funding, resource sharing, or joint initiatives. Contact us at partnerships@pgtglobal.org with your proposal and we\'ll schedule a discussion.'
    },
    {
      id: 11,
      category: 'application',
      question: 'What happens after I complete a program?',
      answer: 'Program graduates join our global alumni network, receive certificates of completion, and gain access to ongoing mentorship, job placement assistance, and advanced learning opportunities. Many alumni become mentors for new participants or start their own community initiatives.'
    },
    {
      id: 12,
      category: 'technical',
      question: 'What technology do I need to participate?',
      answer: 'Most programs require a computer or smartphone with internet access. For virtual sessions, you\'ll need video conferencing capabilities. We provide technical support and can arrange device lending for participants who need assistance.'
    },
    {
      id: 13,
      category: 'general',
      question: 'Is PGT a non-profit organization?',
      answer: 'Yes, PGT Global Network operates as a non-profit organization dedicated to social impact. We are funded through grants, donations, corporate partnerships, and social enterprise initiatives. All funds are reinvested into our programs and global expansion.'
    },
    {
      id: 14,
      category: 'programs',
      question: 'Can I participate in multiple programs?',
      answer: 'Yes, participants can enroll in multiple programs, though we recommend completing one program before starting another to ensure you can fully commit to each experience. Some programs have prerequisites or recommended sequences.'
    },
    {
      id: 15,
      category: 'application',
      question: 'What if I don\'t get accepted into a program?',
      answer: 'If you\'re not accepted initially, we provide feedback and guidance for future applications. You can reapply in the next cycle, and we often recommend preparatory resources or alternative programs that might be a better fit for your current situation.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our programs, application process, and organization
            </p>
          </div>
        </div>
      </section>
      </AnimatedCard>

      {/* Search and Filter */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <AnimatedCard key={item.id} animation="slideUp" delay={index * 100}>
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                </AnimatedCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
              <HelpCircle className="ml-2 h-5 w-5" />
            </a>
            <a
              href="mailto:support@pgtglobal.org"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;