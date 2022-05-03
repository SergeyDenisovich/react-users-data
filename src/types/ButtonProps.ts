import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'disabled' | 'link';
  children: React.ReactNode;
  text?: 'lower' | 'upper';
}
