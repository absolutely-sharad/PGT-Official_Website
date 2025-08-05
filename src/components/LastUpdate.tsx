import React from 'react';
import { Clock } from 'lucide-react';

const LastUpdate: React.FC = () => {
  const lastUpdateDate = new Date('2025-01-15T10:30:00Z');
  
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
      <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
        <Clock className="h-4 w-4" />
        <span className="text-sm font-medium">
          Last Updated: {lastUpdateDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>
    </div>
  );
};

export default LastUpdate;