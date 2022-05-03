import { ButtonProps } from 'types/ButtonProps';

import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({
  variant = 'primary',
  text = 'lower',
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        {
          [styles.primary]: variant === 'primary',
          [styles.success]: variant === 'success',
          [styles.disabled]: variant === 'disabled',
          [styles.link]: variant === 'link',
        },
        {
          [styles.lower]: text === 'lower',
          [styles.upper]: text === 'upper',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
