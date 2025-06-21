'use client';

import { useState, useEffect } from 'react';

interface ExpertAvatarProps {
  name: string;
  image: string;
  fallbackGradient: string;
  fallbackInitials: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function ExpertAvatar({ 
  name, 
  image, 
  fallbackGradient, 
  fallbackInitials, 
  className = '',
  size = 'medium'
}: ExpertAvatarProps) {
  const [imageExists, setImageExists] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(image, { method: 'HEAD' });
        setImageExists(response.ok);
      } catch {
        setImageExists(false);
      }
    };
    
    checkImage();
  }, [image]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageExists(false);
    setImageLoaded(false);
  };

  const sizeClasses = {
    small: 'w-16 h-20',
    medium: 'w-20 h-24',
    large: 'w-32 h-40'
  };

  return (
    <div className={`avatar-image ${sizeClasses[size]} ${className}`}>
      {imageExists ? (
        <img
          src={image}
          alt={name}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className="w-full h-full object-cover rounded-lg expert-avatar-img"
          style={{ 
            display: imageLoaded ? 'block' : 'none',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      ) : null}
      
      {/* Fallback背景 - 當圖片不存在或未載入時顯示 */}
      <div
        className={`w-full h-full rounded-lg flex items-center justify-center text-white font-bold ${
          imageExists && imageLoaded ? 'hidden' : 'block'
        }`}
        style={{ 
          background: fallbackGradient,
          fontSize: size === 'large' ? '2rem' : size === 'medium' ? '1.5rem' : '1rem'
        }}
      >
        {fallbackInitials}
      </div>
    </div>
  );
} 