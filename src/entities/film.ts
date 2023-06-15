import { User } from './user';

export type Film = {
  id: string;
  author: string;
  title: string;
  owner: User;
};
