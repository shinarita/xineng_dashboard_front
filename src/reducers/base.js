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
    key: 'devices',
    type: Actions.GET_DEVICE
  }, {
    key: 'alarm',
    type: Actions.GET_ALARM
  }, {
    key: 'floorFireAlarms',
    type: Actions.GET_FLOOR_FIRE_ALARMS
  }, {
    key: 'floorIrSensors',
    type: Actions.GET_FLOOR_IR_SENSORS
  }, {
    key: 'floorAirConditioners',
    type: Actions.GET_FLOOR_AIR_CONDITIONERS
  }, {
    key: 'floorElevators',
    type: Actions.GET_FLOOR_ELEVATORS
  }, {
    key: 'floorLocks',
    type: Actions.GET_FLOOR_LOCKS
  }, {
    key: 'floorCameras',
    type: Actions.GET_FLOOR_CAMERAS
  }, {
    key: 'floorLights',
    type: Actions.GET_FLOOR_LIGHTS
  }, {
    key: 'roomDeviceInfo',
    type: Actions.GET_ROOM_DEVICE_INFO
  }, {
    key: 'centralVentilation',
    type: Actions.SWITCH_CENTRAL_VENTILATION
  }, {
    key: 'roomCentralConditioner',
    type: Actions.CONTROL_CENTRAL_CONDITIONER
  }, {
    key: 'roomLight',
    type: Actions.CONTROL_LIGHT
  }, {
    key: 'faceReg',
    type: Actions.GET_FACE_REG
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
