export type ErrorField = {
  name: string,
  message: string,
  type: string,
}

export type RegisterUserData = {
  email: string,
  password: string,
  passwordConfirmation: string,
  mobilPhone?: string,
}


export type LoginUserData = {
  email: string,
  password: string,
}
