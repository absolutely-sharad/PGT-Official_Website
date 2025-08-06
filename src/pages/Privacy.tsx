import React from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when registering for programs or contacting us',
        'Usage data and analytics from our website and digital platforms',
        'Communication records including emails, messages, and feedback',
        'Program participation data and progress tracking information'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'To deliver our programs and services effectively',
        'To communicate with you about programs, updates, and opportunities',
        'To improve our services and develop new programs',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted partners who help deliver our programs',
        'We may disclose information when required by law or to protect safety',
        'Anonymous, aggregated data may be used for research and impact reporting'
      ]
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All sensitive information is encrypted during transmission and storage',
        'Access to personal data is restricted to authorized personnel only',
        'Regular security audits and updates are conducted to maintain protection'
      ]
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
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>
      </AnimatedCard>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 15, 2025
            </p>
          </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At PGT Global Network, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website, participate in our programs, or interact 
              with our services.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with 
              this policy. We encourage you to read this policy carefully and contact us if you have any questions.
            </p>
          </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                Cookies and Tracking Technologies
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  These technologies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Improve our website functionality and user experience</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences. However, disabling 
                  certain cookies may limit your ability to use some features of our website.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                Your Rights and Choices
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                  <li><strong>Objection:</strong> Object to certain types of processing of your information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for processing where consent is the legal basis</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at privacy@pgtglobal.org. 
                  We will respond to your request within 30 days.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  for which it was collected, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Program participation records: 7 years after program completion</li>
                  <li>Communication records: 3 years from last interaction</li>
                  <li>Website usage data: 2 years from collection</li>
                  <li>Financial records: As required by applicable law</li>
                </ul>
                <p>
                  After the retention period expires, we securely delete or anonymize your information 
                  unless longer retention is required by law.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  As a global organization, we may transfer your personal information to countries outside 
                  your residence. We ensure appropriate safeguards are in place, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adequacy decisions by relevant data protection authorities</li>
                  <li>Standard contractual clauses approved by regulatory bodies</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules for intra-group transfers</li>
                </ul>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Our services are not directed to children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian 
                  and believe your child has provided us with personal information, please contact us 
                  immediately so we can delete such information.
                </p>
                <p>
                  For participants between 13-18 years old, we require parental consent before collecting 
                  any personal information or allowing participation in our programs.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying prominent notices on our platforms</li>
                </ul>
                <p>
                  Your continued use of our services after any changes indicates your acceptance of the 
                  updated Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
            <p className="text-xl text-gray-600">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Officer</h3>
              <div className="space-y-2 text-gray-700">
                <p>Email: privacy@pgtglobal.org</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Response Time: Within 48 hours</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mailing Address</h3>
              <div className="text-gray-700">
                <p>PGT Global Network</p>
                <p>Privacy Department</p>
                <p>123 Innovation Drive</p>
                <p>Toronto, ON M5V 3A8, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;