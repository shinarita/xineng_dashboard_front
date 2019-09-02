import { ActionSuffix, Actions } from '@constants'

const initState = {
  data: '3f'
}
export default (state = initState, action) => {
  switch (action.type) {
    case Actions.RESET_FLOOR:
      return initState
    case Actions.SWITCH_FLOOR:
      return {
        ...state,
        data: action.floor
      }
    default:
      return state
  }
}