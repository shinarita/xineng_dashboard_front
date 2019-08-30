import { ActionSuffix, Actions } from '@constants'

const initState = {
  type: ''
}
export default (state = initState, action) => {
  switch (action.type) {
    case Actions.SELECT_DEVICE_TYPE:
      return {
        ...state,
        type: action.deviceType
      }
    default:
      return state
  }
}