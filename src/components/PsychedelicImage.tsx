import React from "react";

interface PsychedelicImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const PsychedelicImage: React.FC<PsychedelicImageProps> = ({ src, alt, className }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-white/10 group ${className}`}>
      {/* The base image */}
      <img
        src={src}
        alt={alt || "Psychedelic Image"}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* The Psychedelic Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none mix-blend-color opacity-80 animate-psychedelic-slow bg-[linear-gradient(45deg,#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#8b00ff)] bg-[length:400%_400%]" />
      
      <div className="absolute inset-0 pointer-events-none mix-blend-difference opacity-40 animate-psychedelic bg-[radial-gradient(circle_at_center,#00ffff,#ff00ff,#ffff00)] bg-[length:200%_200%]" />
      
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500" />
    </div>
  );
};

export default PsychedelicImage;
