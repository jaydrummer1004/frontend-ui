import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const badgeVariants = cva('font-normal rounded-full inline-flex items-center justify-center', {
  variants: {
    variant: {
      neutral: 'bg-gray-50 border border-neutral-200',
      destructive: 'bg-red-50',
      success: 'bg-green-50',
      warning: 'bg-yellow-50',
      brand: 'bg-indigo-50',
    },
    size: {
      sm: 'text-xs px-1.5 py-0.5',
      md: 'text-sm px-2 py-0.5',
      lg: 'text-sm px-2.5 py-1',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'sm'
  }
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

function _Badge(props: BadgeProps, ref: React.Ref<HTMLSpanElement>) {
  const { children, variant, size } = props;

  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }))}
    >
      {children}
    </span>
  );
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(_Badge);

export { Badge };
