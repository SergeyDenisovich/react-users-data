import { forwardRef } from 'react';
import { TextAreaProps } from 'types/TextAreaProps';
import styles from './TextArea.module.scss';

export const TextArea = forwardRef(({ labelText, label, register, ...props }: TextAreaProps, ref) => {
  return (
    <div className={styles.formField}>
      <label>{labelText}</label>
      <textarea {...register(label)} {...props}></textarea>
    </div>
  );
});
