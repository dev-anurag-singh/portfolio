import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[40px] text-lg font-medium transition-all duration-300 focus:outline-none',
  {
    variants: {
      variant: {
        default:
          'relative bg-[linear-gradient(45deg,#5DFFFF,#AE0CA7,#5DFFFF)] bg-[length:200%_100%] text-white hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:bg-[right_center]',
      },
      size: {
        default: 'h-11 px-7 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button ref={ref} className={buttonVariants({ className })} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
