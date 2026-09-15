import React from 'react';
import logoNewWebp from '../assets/images/regenerated_image_1789428985367.webp';

interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'navbar' }) => {
  const heightClass = variant === 'navbar' ? 'h-9 sm:h-11 md:h-12' : 'h-8 sm:h-10';

  return (
    <div className={`inline-flex items-center select-none ${className || ''}`}>
      <picture>
        <source srcSet={logoNewWebp} type="image/webp" />
        <img
          src={logoNewWebp}
          alt="IntelsecSul - Segurança Eletrônica"
          className={`${heightClass} w-auto object-contain drop-shadow-sm transition-transform hover:scale-[1.02]`}
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
};
