import React from 'react';
import { Share2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface ShareButtonProps {
  title: string;
  url?: string;
  text?: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ 
  title, 
  url = window.location.href, 
  text,
  className = "flex items-center text-blue-600 hover:text-blue-800 font-medium"
}) => {
  const handleShare = async () => {
    const shareData = {
      title: title,
      text: text || `Check out this blog post I found: ${title}`,
      url: url,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        toast.success('Content shared successfully!');
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        // Fallback to clipboard
        try {
          await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
          toast.success('Link copied to clipboard!');
        } catch (clipboardError) {
          toast.error('Unable to share content');
        }
      }
    }
  };

  return (
    <button onClick={handleShare} className={className}>
      <Share2 className="h-4 w-4 mr-2" />
      Share
    </button>
  );
};

export default ShareButton;