import React from 'react';
import { Form } from 'components/Form';
import { DataList } from 'components/DataList';
import styles from './Main.module.scss';
import { AppContext } from 'context';

export const Main = () => {
  const { userData, sortedUsers } = React.useContext(AppContext);

  return (
    <main className={styles.main}>
      {!userData?.name ? <DataList /> : <Form />}

      {sortedUsers && sortedUsers.length > 0 && !userData?.name && (
        <div className={styles.mainTotal}>Найдено {sortedUsers.length} пользователей</div>
      )}
    </main>
  );
};
