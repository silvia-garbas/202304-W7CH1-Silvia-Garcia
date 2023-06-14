export type User = {
  id: string;
  userName: string,
  email: string,
  passwd: string
}

export type UserLogin = {

  user: string, // UserName/email
  passwd: string

}
