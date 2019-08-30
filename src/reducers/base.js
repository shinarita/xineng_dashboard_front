import { ActionSuffix, Actions } from '@constants'
const { REQUEST, SUCCESS, FAILURE } = ActionSuffix

const reducerOptions = [
  {
    key: 'env',
    type: Actions.GET_ENV
  }, {
    key: 'energy',
    type: Actions.GET_ENERGY
  }, {
    key: 'device',
    type: Actions.GET_DEVICE
  }, {
    key: 'alarm',
    type: Actions.GET_ALARM
  }
]

const reducers = (function (reducerOptions) {
  let reducers = {}
  reducerOptions.forEach(item => {
    const { key, type } = item
    const initState = {
      isFetching: false,
      data: {},
      error: ''
    }
    reducers[key] = (state = initState, action) => {
      switch (action.type) {
        case `${type}_${REQUEST}`:
          return {
            ...state,
            isFetching: true
          }
        case `${type}_${SUCCESS}`:
          return {
            ...state,
            data: action.data,
            isFetching: false
          }
        case `${type}_${FAILURE}`:
          return {
            ...state,
            error: action.error,
            isFetching: false
          }
        default:
          return state
      }
    }
  })
  return reducers
})(reducerOptions)

module.exports = reducers
