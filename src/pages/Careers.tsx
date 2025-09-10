import React from 'react';
import { MapPin, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';
import ProtectedAction from '../components/ProtectedAction';
import AnimatedCard from '../components/AnimatedCard';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

// New component for job cards
const openPositions = [
  {
    id: 1,
    title: "Chief Operations Director (COD)",
    department: "Operations",
    responsibilities: [
      "Manage day-to-day team operations, timelines, and internal coordination",
      "Track tasks and ensure smooth execution of programs",
      "Collaborate with all departments to keep projects running on time",
    ],
  },
  {
    id: 2,
    title: "Chief Communications Officer (CCO)",
    department: "Communications",
    responsibilities: [
      "Write and review all content: captions, posts, internal documents, and scripts",
      "Maintain the tone and voice of PGT across platforms",
      "Collaborate with PR and Design teams for campaigns",
    ],
  },
  {
    id: 3,
    title: "Creative Director (CD)",
    department: "Creative",
    responsibilities: [
      "Design posters, carousels, edit videos, reels, thumbnails, and all brand creatives",
      "Maintain visual identity and consistency across platforms",
      "Support all departments with design and media content",
    ],
  },
  {
    id: 4,
    title: "Chief Strategy Officer (CSO)",
    department: "Strategy",
    responsibilities: [
      "Lead campaign ideas, innovation, and planning",
      "Analyze what's working and suggest improvements",
      "Assist in building long-term strategies for PGT programs",
    ],
  },
  {
    id: 5,
    title: "Public Relations Head (PRH)",
    department: "Public Relations",
    responsibilities: [
      "Represent PGT publicly and build collaborations",
      "Handle outreach to colleges, NGOs, media, and influencers",
      "Support visibility and networking of the brand",
    ],
  },
  {
    id: 6,
    title: "Campus Director (CAP)",
    department: "Campus Relations",
    responsibilities: [
      "Act as the official link between PGT and college campus",
      "Organize on-ground activities and represent PGT at events",
      "Promote awareness and engagement inside campus",
    ],
  },
  {
    id: 7,
    title: "Chief Technical Director (CTD)",
    department: "Technology",
    responsibilities: [
      "Build and manage the official PGT website",
      "Create event registration pages and landing pages",
      "Maintain form integrations, analytics, and digital tools",
    ],
  },
  {
    id: 8,
    title: "General Secretary (GSEC)",
    department: "Administration",
    responsibilities: [
      "Handle official documentation, letters, and internal announcements",
      "Support the Founder in maintaining structure and follow-ups",
      "Keep track of internal workflows and communication logs",
    ],
  },
];

const internshipPrograms = [
  {
    id: 1,
    title: "Marketing Intern",
    department: "Marketing",
    responsibilities: [
      "Assist in creating social media content and campaigns",
      "Support market research and analysis projects",
      "Help with event planning and promotional activities",
    ],
  },
  {
    id: 2,
    title: "Content Writing Intern",
    department: "Communications",
    responsibilities: [
      "Write blog posts, articles, and website content",
      "Create engaging social media captions and posts",
      "Assist in developing internal communication materials",
    ],
  },
  {
    id: 3,
    title: "Graphic Design Intern",
    department: "Creative",
    responsibilities: [
      "Design social media graphics and promotional materials",
      "Create visual content for campaigns and events",
      "Support brand consistency across all platforms",
    ],
  },
  {
    id: 4,
    title: "Web Development Intern",
    department: "Technology",
    responsibilities: [
      "Assist in website development and maintenance",
      "Help with creating landing pages and forms",
      "Support technical documentation and testing",
    ],
  },
  {
    id: 5,
    title: "Research Intern",
    department: "Strategy",
    responsibilities: [
      "Conduct research on industry trends and best practices",
      "Analyze data and prepare reports",
      "Support strategic planning initiatives",
    ],
  },
  {
    id: 6,
    title: "Event Management Intern",
    department: "Operations",
    responsibilities: [
      "Assist in planning and coordinating events",
      "Support logistics and vendor management",
      "Help with post-event analysis and reporting",
    ],
  },
];

const benefits = [
  {
    title: "Global Impact",
    description: "Work on projects that transform lives across 50+ countries",
    icon: "🌍",
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities and skill development",
    icon: "📈",
  },
  {
    title: "Flexible Work",
    description: "Remote-first culture with flexible working arrangements",
    icon: "💻",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health benefits and wellness programs",
    icon: "🏥",
  },
  {
    title: "Team Culture",
    description: "Collaborative, inclusive, and purpose-driven work environment",
    icon: "🤝",
  },
  {
    title: "Learning Budget",
    description: "Annual budget for conferences, courses, and certifications",
    icon: "📚",
  },
];

const Careers: React.FC = () => {
  const applyLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScuNgMbLFhWx-yLSNK-b0JnMeWNdREAYTVi8owvWrxNgXwmRw/viewform";

  return (
    <div className="p-8 space-y-16">
      <h1 className="text-4xl font-bold text-center">Careers at PGT</h1>

      {/* Open Positions */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {openPositions.map((position) => (
            <div key={position.id} className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-bold">{position.title}</h3>
              <p className="text-gray-600">{position.department}</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {position.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Internship Programs */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Internship Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {internshipPrograms.map((program) => (
            <div key={program.id} className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-bold">{program.title}</h3>
              <p className="text-gray-600">{program.department}</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {program.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <button
                onClick={() =>
                  alert(
                    `Thank you for your interest in the ${program.title} role. Applications will open soon!`
                  )
                }
                className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Why Join Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow flex flex-col items-center text-center"
            >
              <span className="text-4xl">{benefit.icon}</span>
              <h3 className="text-xl font-bold mt-2">{benefit.title}</h3>
              <p className="text-gray-600 mt-1">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;