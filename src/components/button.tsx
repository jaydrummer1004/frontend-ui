import React from 'react';
import { Ref } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'inline-flex items-center rounded justify-center font-medium [&>[data-icon]]:size-[1em] [&>[data-icon]]:fill-current focus-visible:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-700 hover:bg-indigo-800 text-white focus:bg-indigo-800 active:bg-indigo-800',
      },
      size: {
        md: 'text-sm gap-1 px-3.5 py-2.5',
        lg: 'text-base gap-1.5 px-4 py-2',
        xl: 'text-base gap-1.5 px-5 py-3',
        xxl: 'text-lg gap-2.5 px-6 py-4',
      },
      iconOnly: {
        true: 'gap-2',
        false: '',
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: 'md',
        className: 'p-2.5'
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'p-3'
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'p-3.5'
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'p-4'
      }
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

function _Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const { className, size, iconOnly, variant, children, disabled } = props;

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, iconOnly }), className)}
    >
      {children}
    </button>
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(_Button);

export { Button };
