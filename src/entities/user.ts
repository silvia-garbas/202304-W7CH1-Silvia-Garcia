export type User = {
  id: string;
  userName: string;
  email: string;
  passwd: string;
};

export type UserLogin = {
  user: String; // UserName/email
  passwd: string;
};
