import { IUser } from './IUser';

export interface MainProps {
  userData?: IUser;
  sortedUsers: IUser[];
  getMoreData: (id: string) => void;
  clearUserData: () => void;
}
