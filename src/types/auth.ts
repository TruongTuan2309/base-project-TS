export type User = {
  email: string
  password: string
  confirm_password: string
  accessToken: string
  role: string
}
export type RegisterType = Pick<User, 'email' | 'password' | 'confirm_password'>
export type LoginType = Pick<User, 'email' | 'password'>
export type ResetType = Pick<User, 'confirm_password' | 'password'>
export type ForgotPasswordType = Pick<User, 'email'>
