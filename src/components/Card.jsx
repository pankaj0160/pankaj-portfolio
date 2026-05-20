import React from 'react';

const Card = ({ children, className = '', glow = false }) => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:border-slate-600';
  const glowClasses = glow ? 'hover:shadow-lg hover:shadow-blue-500/20' : '';

  return (
    <div className={`${baseClasses} ${glowClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
