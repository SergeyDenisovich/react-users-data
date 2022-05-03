import cn from 'classnames';
import styles from './Loader.module.scss';

export const Loader = (): JSX.Element => {
  return (
    <div className={styles.overlay}>
      <div className={cn(styles.scaling_squares_spinner, 'loader')}>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
    </div>
  );
};
