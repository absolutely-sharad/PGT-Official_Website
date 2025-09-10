import React from "react";
import { toast } from "react-hot-toast";
import { supabase } from "../supabaseClient";
import AnimatedCard from "../components/AnimatedCard";

// ✅ Open Positions Data
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

// ✅ Internship Programs Data
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

// ✅ Benefits Data
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

const Careers = ({ user }) => {
  // ✅ Handle Apply Clicks
  const handleApply = async (positionTitle, positionType) => {
    if (!user) return;

    if (positionType === "Internship Program") {
      toast.info(
        "Internship opportunities will come soon. Keep checking this page for updates!"
      );
      return;
    }

    try {
      await supabase.from("user_activities").insert({
        user_id: user.id,
        activity_type: `Applied for ${positionType}`,
        activity_data: {
          position_title: positionTitle,
          position_type: positionType,
        },
      });
      toast.success("Redirecting to application form...");
    } catch (error) {
      console.error("Error logging activity:", error);
      toast.error("Error logging activity. Redirecting anyway...");
    }

    // ✅ Redirect only for Open Positions
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScuNgMbLFhWx-yLSNK-b0JnMeWNdREAYTVi8owvWrxNgXwmRw/viewform",
      "_blank"
    );
  };

  return (
    <div className="bg-gray-50">
      {/* ✅ Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to join our growing team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <AnimatedCard key={position.id} animation="slideUp" delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {position.department}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleApply(position.title, "Open Position")
                    }
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto"
                  >
                    Apply Now
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Internship Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain valuable experience and kickstart your career with our
              internship opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPrograms.map((position, index) => (
              <AnimatedCard key={position.id} animation="slideUp" delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {position.department}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleApply(position.title, "Internship Program")
                    }
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-auto"
                  >
                    Apply Now
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique benefits of working with PGT Global Network
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
