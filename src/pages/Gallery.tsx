import React, { useState } from 'react';
import { Play, X, Image, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'D3 Program Workshop',
      category: 'programs',
      date: '2024-03-15',
      location: 'Toronto, Canada',
      description: 'Participants engaging in hands-on digital transformation workshop'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'VoA Leadership Summit',
      category: 'events',
      date: '2024-02-28',
      location: 'Singapore',
      description: 'Annual Voice of Action leadership summit bringing together community leaders'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Seminarix Conference',
      category: 'programs',
      date: '2024-01-20',
      location: 'London, UK',
      description: 'Professional development conference with industry experts'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'MotivMinds Wellness Workshop',
      category: 'programs',
      date: '2024-04-10',
      location: 'Melbourne, Australia',
      description: 'Mental health and wellness workshop focusing on resilience building'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'HED Program Graduation',
      category: 'achievements',
      date: '2024-05-15',
      location: 'New York, USA',
      description: 'Graduation ceremony for Higher Education Development program participants'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Global Network Meeting',
      category: 'team',
      date: '2024-06-01',
      location: 'Dubai, UAE',
      description: 'Annual global team meeting bringing together staff from all regions'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Community Impact Project',
      category: 'community',
      date: '2024-03-25',
      location: 'Lagos, Nigeria',
      description: 'Local community project implementation in partnership with local organizations'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Impact Stories Documentary',
      category: 'achievements',
      date: '2024-04-30',
      location: 'Various Locations',
      description: 'Documentary showcasing transformation stories from program participants'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Innovation Lab',
      category: 'programs',
      date: '2024-02-14',
      location: 'Berlin, Germany',
      description: 'Innovation laboratory where participants develop solutions to real-world problems'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Volunteer Appreciation',
      category: 'team',
      date: '2024-01-30',
      location: 'Mumbai, India',
      description: 'Celebrating our dedicated volunteers who make our programs possible'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Partnership Announcement',
      category: 'events',
      date: '2024-06-20',
      location: 'São Paulo, Brazil',
      description: 'Announcement of new strategic partnerships with educational institutions'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Digital Literacy Training',
      category: 'community',
      date: '2024-05-05',
      location: 'Cairo, Egypt',
      description: 'Digital literacy training session for underserved communities'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Media', count: mediaItems.length },
    { id: 'programs', label: 'Programs', count: mediaItems.filter(item => item.category === 'programs').length },
    { id: 'events', label: 'Events', count: mediaItems.filter(item => item.category === 'events').length },
    { id: 'achievements', label: 'Achievements', count: mediaItems.filter(item => item.category === 'achievements').length },
    { id: 'team', label: 'Team', count: mediaItems.filter(item => item.category === 'team').length },
    { id: 'community', label: 'Community', count: mediaItems.filter(item => item.category === 'community').length }
  ];

  const filteredItems = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Capturing moments of transformation, growth, and community across our global network
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="h-12 w-12 text-white" />
                    ) : (
                      <Image className="h-12 w-12 text-white" />
                    )}
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 right-2">
                    {item.type === 'video' ? (
                      <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Video
                      </div>
                    ) : (
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Photo
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedMedia.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedMedia.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;