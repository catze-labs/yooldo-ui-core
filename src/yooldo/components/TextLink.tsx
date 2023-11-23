import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { ComponentPropsWithRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

export interface TextLinkProps
  extends Omit<ComponentPropsWithRef<'a'>, 'children'> {
  external?: boolean;
  label: string;
  color?: 'white' | 'sunset' | 'blue' | 'green';
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    { external = false, label, className, href, color = 'white', ...props },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={cn([
          'yl-relative yl-flex yl-items-center yl-gap-2',
          className,
        ])}
        href={href || ''}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        <span
          className={cn([
            'hover:underline',
            color === 'white' &&
              'yl-text-yooldo-black dark:yl-text-yooldo-white',
            color === 'sunset' &&
              'yl-text-yooldo-sunset dark:yl-text-yooldo-sunset',
            color === 'blue' &&
              'yl-text-yooldo-another-blue dark:yl-text-yooldo-another-blue',
            color === 'green' &&
              'yl-text-yooldo-another-green dark:yl-text-yooldo-another-green',
          ])}
        >
          {label}
        </span>
        <ChevronRightIcon
          className={cn([
            'yl-w-5 dark:yl-text-white',
            color === 'white' &&
              'yl-text-yooldo-black dark:yl-text-yooldo-white',
            color === 'sunset' &&
              'yl-text-yooldo-sunset dark:yl-text-yooldo-sunset',
            color === 'blue' &&
              'yl-text-yooldo-another-blue dark:yl-text-yooldo-another-blue',
            color === 'green' &&
              'yl-text-yooldo-another-green dark:yl-text-yooldo-another-green',
          ])}
        />
      </a>
    );
  },
);
