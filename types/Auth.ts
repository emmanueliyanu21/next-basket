export type LoginProps = {
    name: string,
    password: string
}

export type RegisterProps = {
    name: string,
    email: string,
    password: string
}

export type loginDataProps = {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string
  }

export type AuthState = {
    login: loginDataProps,
    loading: boolean,
    register: string,
    error: string,
    success: string
}