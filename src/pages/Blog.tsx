import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const BlogCard = ({ post }) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        // Load likes from localStorage
        const storedLikes = JSON.parse(localStorage.getItem(`blog-likes-${post.id}`)) || { count: 0, liked: false };
        setLikes(storedLikes.count);
        setIsLiked(storedLikes.liked);
    }, [post.id]);

    const handleLike = () => {
        const newLikes = isLiked ? likes - 1 : likes + 1;
        const newIsLiked = !isLiked;
        setLikes(newLikes);
        setIsLiked(newIsLiked);

        // Save to localStorage
        localStorage.setItem(`blog-likes-${post.id}`, JSON.stringify({ count: newLikes, liked: newIsLiked }));
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            {/* ... other blog card content ... */}
            <div className="flex items-center justify-end mt-4">
                <button onClick={handleLike} className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart size={20} className={isLiked ? 'text-red-500 fill-current' : ''} />
                    <span>{likes}</span>
                </button>
            </div>
        </div>
    );
};

export default BlogCard;