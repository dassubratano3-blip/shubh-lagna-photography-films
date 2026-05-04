import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    
    const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none hover:scale-[1.02] active:scale-95";
    
    const variants = {
      primary: "bg-maroon text-white hover:bg-maroon-dark shadow-lg shadow-maroon/20",
      secondary: "bg-sand text-maroon hover:bg-gold-light/30",
      outline: "border-2 border-maroon text-maroon hover:bg-maroon hover:text-white",
      whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/20"
    };

    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4"
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button 
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export const WhatsAppButton = ({ text = "Chat on WhatsApp", className = "", ...props }: ButtonProps & { text?: string }) => {
  return (
    <Button variant="whatsapp" className={`gap-2 ${className}`} onClick={() => window.open('https://wa.me/917365853984', '_blank')} {...props}>
      <MessageCircle className="w-5 h-5" />
      {text}
    </Button>
  );
};
