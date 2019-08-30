import { Actions } from '@constants'

export * from './auth'

export const getAllDatas = () => {
  return {
    type: Actions.GET_ALL_DATAS,
    payload: [
      {
        method: 'get',
        url: 'dashboard/energy',
        subType: Actions.GET_ENERGY
      }, {
        method: 'get',
        url: 'dashboard/env',
        subType: Actions.GET_ENV
      }, {
        method: 'get',
        url: 'dashboard/device',
        subType: Actions.GET_DEVICE
      }, {
        method: 'get',
        url: 'dashboard/alarm',
        subType: Actions.GET_ALARM
      }, {
        method: 'get',
        url: 'dashboard/light',
        subType: Actions.GET_LIGHT
      }
    ]
  }
}

const _getAction = (type, url, method = 'get') => {
  return {
    type,
    payload: {
      method,
      url
    }
  }
}

export const getEnergy = () => {
  return _getAction(Actions.GET_ENERGY, 'dashboard/energy')
}
export const getEnv = () => {
  return _getAction(Actions.GET_ENV, 'dashboard/env')
}
export const getDevice = () => {
  return _getAction(Actions.GET_DEVICE, 'dashboard/device')
}
export const getAlarm = () => {
  return _getAction(Actions.GET_ALARM, 'dashboard/alarm')
}
export const getLight = () => {
  return _getAction(Actions.GET_LIGHT, 'dashboard/light')
}

export const switchFloor = (floor) => {
  return {
    type: Actions.SWITCH_FLOOR,
    floor
  }
}

export const selectDeviceType = deviceType => {
  return {
    type: Actions.SELECT_DEVICE_TYPE,
    deviceType
  }
}