import { InputHTMLAttributes } from 'react';

export interface InputTextInterface extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  label: string;
  id: string;
  disabled?: boolean;
}
