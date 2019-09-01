import { DeviceTypes } from '@constants'

export const getFloorDeviceData = (type, currentFloor, functions, isChange = true) => {
  isChange && functions.selectDeviceType(type)
  switch (type) {
    case DeviceTypes.fireAlarm:
      functions.getFloorFireAlarms(currentFloor)
      break
    case DeviceTypes.irSensors:
      functions.getFloorIrSensors(currentFloor)
      break
    case DeviceTypes.centralAc:
      functions.getFloorAirConditioners(currentFloor)
      break
    case DeviceTypes.elevator:
      functions.getFloorElevators(currentFloor)
      break
    case DeviceTypes.lock:
      functions.getFloorLocks(currentFloor)
      break
    case DeviceTypes.camera:
      functions.getFloorCameras(currentFloor)
      break
    case DeviceTypes.light:
      functions.getFloorLights(currentFloor)
      break
  }
}