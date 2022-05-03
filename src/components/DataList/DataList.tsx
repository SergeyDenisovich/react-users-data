import React from 'react';
import { Button } from 'components/ui/Button';
import { DataItem } from 'components/DataItem';
import { IUser } from 'types/IUser';
import { AppContext } from 'context';

export const DataList = (): JSX.Element => {
  const { sortedUsers, getMoreData } = React.useContext(AppContext);

  return (
    <>
      <h1>Список пользователей</h1>
      {sortedUsers &&
        sortedUsers.map((user: IUser) => {
          const {
            id: userId,
            name: firstName,
            address: { city },
            company: { name: companyName },
          } = user;

          return (
            <div key={user.phone} className='user-card'>
              <DataItem
                fField={'ФИО'}
                fFieldDescription={firstName}
                sField={'город'}
                sFieldDescription={city}
                tField={'компания'}
                tFieldDescription={companyName}
              >
                <Button
                  title='Смотреть/редактировать данные'
                  variant='link'
                  text='upper'
                  onClick={() => getMoreData(userId)}
                >
                  подробнее
                </Button>
              </DataItem>
            </div>
          );
        })}
    </>
  );
};
