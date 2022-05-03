import { DataItemProps } from 'types/DataItemProps';
import styles from './DataItem.module.scss';

export const DataItem = ({
  children,
  fField,
  sField,
  tField,
  fFieldDescription,
  sFieldDescription,
  tFieldDescription,
}: DataItemProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <div className={styles.card__info}>
        <span>{fField}:</span>
        <span>
          <b>{fFieldDescription}</b>
        </span>
      </div>
      <div className={styles.card__info}>
        <span>{sField}:</span>
        <span>
          <b>{sFieldDescription}</b>
        </span>
      </div>
      <div className={styles.card__info}>
        <span>{tField}:</span>
        <span>
          <b>{tFieldDescription}</b>
        </span>
      </div>
      {children}
    </article>
  );
};
