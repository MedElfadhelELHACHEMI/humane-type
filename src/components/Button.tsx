import React, { ButtonHTMLAttributes } from 'react';

/**
 * Button component props extending the standard button HTML attributes
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'text';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Custom class name
   */
  className?: string;
}

/**
 * A customizable button component
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded font-medium focus:outline-none';
  
  // Size classes
  const sizeClasses = {
    small: 'px-2.5 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    text: 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
