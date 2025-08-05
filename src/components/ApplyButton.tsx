import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

interface ApplyButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ children, className }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store email in localStorage for now
      const existingEmails = JSON.parse(localStorage.getItem('recruitment_notifications') || '[]');
      if (!existingEmails.includes(email)) {
        existingEmails.push(email);
        localStorage.setItem('recruitment_notifications', JSON.stringify(existingEmails));
      }
      
      toast.success('Thank you! We\'ll notify you when recruitment opens.');
      setShowModal(false);
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleApplyClick} className={className}>
        {children}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                We're Not Recruiting Yet
              </h2>
              <p className="text-gray-600">
                Stay in touch and be the first to know when we start recruiting!
              </p>
            </div>

            <form onSubmit={handleNotifySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Please wait...' : 'Notify Me'}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-500">
              We'll only use your email to notify you about recruitment opportunities.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyButton;