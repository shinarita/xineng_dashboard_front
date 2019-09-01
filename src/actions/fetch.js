import { Actions } from '@constants'

const _getAction = (type, url, method = 'get', params, data) => {
  return {
    type,
    payload: {
      method,
      url,
      params,
      data
    }
  }
}
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
      }
    ]
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

export const getFloorFireAlarms = (floor) => {
  return _getAction(Actions.GET_FLOOR_FIRE_ALARMS, 'dashboard/fire_detector', 'get', { floor })
}

export const getFloorIrSensors = (floor) => {
  return _getAction(Actions.GET_FLOOR_IR_SENSORS, 'dashboard/ir_sensors', 'get', { floor })
}

export const getFloorAirConditioners = (floor) => {
  return _getAction(Actions.GET_FLOOR_AIR_CONDITIONERS, 'dashboard/air_condition', 'get', { floor })
}

export const getFloorElevators = (floor) => {
  return _getAction(Actions.GET_FLOOR_ELEVATORS, 'dashboard/elevator', 'get', { floor })
}

export const getFloorLocks = (floor) => {
  return _getAction(Actions.GET_FLOOR_LOCKS, 'dashboard/acs', 'get', { floor })
}

export const getFloorCameras = (floor) => {
  return _getAction(Actions.GET_FLOOR_CAMERAS, 'dashboard/cameres', 'get', { floor })
}

export const getFloorLights = (floor) => {
  return _getAction(Actions.GET_FLOOR_LIGHTS, 'dashboard/lights', 'get', { floor })
}

export const getRoomDeviceInfo = room => {
  return _getAction(Actions.GET_ROOM_DEVICE_INFO, '/dashboard/room', 'get', { room })
}

export const switchCentralVentilation = (on) => {
  return _getAction(Actions.SWITCH_CENTRAL_VENTILATION, 'control/fan', 'patch', undefined, { on })
}

export const controlRoomAc = ({ run, room }) => {
  console.log(run, room)
  return _getAction(Actions.CONTROL_CENTRAL_CONDITIONER, 'control/air_condition', 'patch', undefined, {
    room_no: room,
    run: run,
    mode: 'cold',
    temperature: 26
  })
}

export const controlLight = ({ room, level, action }) => {
  console.log(room)
  return _getAction(Actions.CONTROL_LIGHT, 'control/light', 'patch', undefined, {
    room_no: room,
    level,
    action
  })
}