import { Actions } from '@constants'

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