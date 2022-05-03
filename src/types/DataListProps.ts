import { IUser } from './IUser';

export type DataListProps = {
  sortedUsers: IUser[];
  getMoreData: (id: string) => void;
};
