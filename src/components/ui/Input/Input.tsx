import { forwardRef } from 'react';
import { InputProps } from 'types/InputProps';
import styles from './Input.module.scss';

export const Input = forwardRef(({ labelText, label, register, required, ...props }: InputProps, ref) => {
  return (
    <div className={styles.formField}>
      <label>{labelText}</label>
      <input type='text' {...register(label, { required })} {...props} />
    </div>
  );
});
