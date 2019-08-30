import { ActionSuffix, Actions } from '@constants'
import Cookies from 'js-cookie'

const initState = {
  authed: false
}
export default (state = initState, action) => {
  switch (action.type) {
    case Actions.LOGIN_INIT:
      return {
        ...state,
        authed: true
      }
    case Actions.LOGIN_REQUEST:
      Cookies.set('username', action.username, { expires: 365, path: '/' })
      return {
        ...state,
        authed: true
      }
    default:
      return state
  }
}