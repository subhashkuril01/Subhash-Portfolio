import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  href, 
  onClick, 
  type = 'button',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
    outline: "border border-primary/50 text-white hover:bg-primary/10"
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], className));

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
