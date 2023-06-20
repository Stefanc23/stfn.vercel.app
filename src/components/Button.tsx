import React from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'solid',
  children,
  className,
  highlight = false,
  onClick,
  ...rest
}) => {
  return (
    <div className="relative group">
      {highlight && (
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary to-secondary blur opacity-75 md:opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
      )}
      <button
        type={type}
        onClick={onClick}
        className={`relative text-sm md:text-xl rounded-sm cursor-pointer min-w-[120px] w-fit px-4 py-1.5 flex justify-center items-center ${
          variant === 'solid'
            ? 'bg-primary text-dark hover:bg-gradient-to-br hover:from-primary hover:to-secondary'
            : 'bg-transparent text-primary border-2 border-primary hover:bg-secondary-300/50 hover:dark:bg-secondary-800/50'
        } ${className}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;