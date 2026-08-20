'use client';

import type { ReactNode } from 'react';
import styles from './Button.module.css';

/*
  The only file in phase 1 carrying "use client". It is Shipped because it
  carries an onClick, which means everything it imports ships to the browser
  with it. It imports one stylesheet and nothing else, and it must stay that
  way: see the Import Law in website-architecture.
*/

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outlined' | 'ghost' | 'accent';
  size?: 'default' | 'large';
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'default',
  disabled = false,
}: ButtonProps) {
  const classes = [styles.button, styles[variant]];
  if (size === 'large') classes.push(styles.large);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes.join(' ')}
    >
      {children}
    </button>
  );
}
