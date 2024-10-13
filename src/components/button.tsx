import React from 'react';
import { Ref } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva('inline-flex items-center justify-center text-white py-2 [&>[data-icon]]:h-4 [&>[data-icon]]:fill-current', {
  variants: {
    variant: {
      primary: 'bg-indigo-700 rounded',
    },
    size: {
      sm: 'text-sm px-3.5 py-2.5',
      md: 'text-md gap-2 px-4 py-2.5',
      lg: 'text-lg px-5 py-2.5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

function _Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const { className, size, variant, children, disabled } = props;

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(_Button);

export { Button };
