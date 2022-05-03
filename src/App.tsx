import { useEffect, useState } from 'react';
import { IUser } from 'types/IUser';
import axios, { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { Sidebar } from 'components/Sidebar';
import { Loader } from 'components/Loader/Loader';
import { Main } from 'components/Main';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { AppContext } from 'context';

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [sortBy, setSortBy] = useState('');
  const [userData, setUserData] = useState<IUser>();

  useEffect(() => {
    axios
      .get('https://626119a9e7361dff91ff44b3.mockapi.io/users')
      .then((response: AxiosResponse) => setUsers(response.data));
  }, [userData]);

  const sortedUsers = useMemo(() => {
    if (sortBy === '') {
      return users;
    }

    if (sortBy === 'byCity') {
      return users.sort((firstUser: IUser, secondUser: IUser) =>
        firstUser.address.city.localeCompare(secondUser.address.city)
      );
    }

    if (sortBy === 'byCompany') {
      return users.sort((firstUser: IUser, secondUser: IUser) =>
        firstUser.company.name.localeCompare(secondUser.company.name)
      );
    }
  }, [users, sortBy]);

  const getMoreData = (id: string) => {
    setUserData(users.find((user) => user.id === id));
  };

  const clearUserData = () => {
    setUserData({} as IUser);
  };

  return (
    <div className='container'>
      <ErrorBoundary>
        <AppContext.Provider value={{ setSortBy, userData, sortedUsers, getMoreData, clearUserData }}>
          {sortedUsers && sortedUsers.length === 0 ? (
            <Loader />
          ) : (
            <>
              <Sidebar />

              <Main />
            </>
          )}
        </AppContext.Provider>
      </ErrorBoundary>
    </div>
  );
};
