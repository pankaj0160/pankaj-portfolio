import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-slate-100 border border-slate-600',
    ghost: 'bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;