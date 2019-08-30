import { Actions } from '@constants'

export const loginRequest = (username) => {
  return {
    type: Actions.LOGIN_REQUEST,
    username
  }
}