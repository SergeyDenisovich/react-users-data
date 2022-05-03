import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from './InputProps';

export interface TextAreaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  labelText: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}
