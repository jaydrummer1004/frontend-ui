import React from 'react';
import { Ref } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'inline-flex items-center rounded justify-center font-medium [&>[data-icon]]:fill-current focus-visible:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-700 hover:bg-indigo-800 text-white focus:bg-indigo-800 active:bg-indigo-800 shadow-sm',
        secondary: 'bg-white border-[0.5px] border-solid border-neutral-200 text-neutral-900 shadow-sm',
        tertiary: 'bg-white text-indigo-700',
        destructive: 'bg-red-600 text-white',
        linkPrimary: 'text-indigo-700',
        linkSecondary: 'text-neutral-900'
      },
      size: {
        md: 'text-sm gap-1 px-3.5 py-2.5 [&>[data-icon]]:size-4',
        lg: 'text-base gap-1.5 px-4 py-2.5 [&>[data-icon]]:size-4',
        xl: 'text-base gap-1.5 px-5 py-3 [&>[data-icon]]:size-4',
        xxl: 'text-lg gap-2.5 px-6 py-4 [&>[data-icon]]:size-5',
      },
      iconOnly: {
        true: 'gap-2',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: ['linkSecondary', 'linkPrimary'],
        className: 'p-0',
      },
      {
        variant: ['primary', 'secondary', 'tertiary', 'destructive'],
        size: 'lg',
        className: 'px-4 py-2.5',
      },
      {
        variant: ['primary', 'secondary', 'tertiary', 'destructive'],
        size: 'xl',
        className: 'px-5 py-3',
      },
      {
        variant: ['primary', 'secondary', 'tertiary', 'destructive'],
        size: 'xxl',
        className: 'px-6 py-4',
      },
      {
        variant: ['primary', 'secondary', 'tertiary', 'destructive', 'linkPrimary', 'linkSecondary'],
        iconOnly: true,
        size: 'md',
        className: 'p-2.5 gap-2 ',
      },
      {
        variant: ['primary', 'secondary', 'tertiary', 'destructive', 'linkPrimary', 'linkSecondary'],
        iconOnly: true,
        size: 'lg',
        className: 'p-3 gap-2',
      },
      {
        variant: ['primary', 'secondary', 'tertiary', 'destructive', 'linkPrimary', 'linkSecondary'],
        iconOnly: true,
        size: 'xl',
        className: 'p-3.5',
      },
      {
        variant: ['primary', 'secondary', 'tertiary', 'destructive', 'linkPrimary', 'linkSecondary'],
        iconOnly: true,
        size: 'xxl',
        className: 'p-4 gap-2',
      },
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
