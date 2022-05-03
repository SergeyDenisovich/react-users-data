import React from 'react';
import { Button } from 'components/ui/Button';
import styles from './Sidebar.module.scss';
import { AppContext } from 'context';

export const Sidebar = (): JSX.Element => {
  const { setSortBy } = React.useContext(AppContext);

  return (
    <aside className={styles.sidebar}>
      <h3>Сортировка</h3>
      <div>
        <Button onClick={() => setSortBy('byCity')}>по городу</Button>
      </div>
      <div>
        <Button onClick={() => setSortBy('byCompany')}>по компании</Button>
      </div>
    </aside>
  );
};
