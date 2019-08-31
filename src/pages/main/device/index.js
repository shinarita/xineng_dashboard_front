import React from 'react'
// import './index.less'
import { EnergyPanel, EnviromentPanel, AlarmPanel, DevicePanel, FaceRecogPanel, SecurityPanel } from '../components'
import BuildingPanel from './buildingPanel'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  getEnergy, getEnv, getDevice, getAlarm, getFloorFireAlarms, getFloorIrSensors, getFloorAirConditioners,
  getFloorElevators, getFloorLocks, getFloorCameras, getFloorLights
} from '@actions'
import { queryParamsToObject } from '@utils'
import { selectDeviceType } from '@actions'
import { getFloorDeviceData } from '../utils'

class Device extends React.Component {
  static propTypes = {
    selectDeviceType: PropTypes.func.isRequired,
    getFloorFireAlarms: PropTypes.func.isRequired,
    getFloorIrSensors: PropTypes.func.isRequired,
    getFloorAirConditioners: PropTypes.func.isRequired,
    getFloorElevators: PropTypes.func.isRequired,
    getFloorLocks: PropTypes.func.isRequired,
    getFloorCameras: PropTypes.func.isRequired,
    getFloorLights: PropTypes.func.isRequired,
    currentFloor: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { location, selectDeviceType, currentFloor, getFloorFireAlarms, getFloorIrSensors, getFloorAirConditioners,
      getFloorElevators, getFloorLocks, getFloorCameras, getFloorLights } = this.props
    const queryObj = queryParamsToObject(location.search)
    if (queryObj.type) {
      getFloorDeviceData(queryObj.type, currentFloor, {
        selectDeviceType,
        getFloorFireAlarms,
        getFloorIrSensors,
        getFloorAirConditioners,
        getFloorElevators,
        getFloorLocks,
        getFloorCameras,
        getFloorLights
      })
    }
    this.props.getAllDatas()
  }
  render() {
    return (
      <div className='home-page-container'>
        <div className='main-top'>
          <div className='top-left'>
            <EnergyPanel />
            <EnviromentPanel />
          </div>
          <div className='top-middle'>
            <AlarmPanel />
            <BuildingPanel />
          </div>
          <div className='top-right'>
            <SecurityPanel />
            <FaceRecogPanel />
          </div>
        </div>
        <div className='main-footer'>
          <DevicePanel />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    currentFloor: state.floor.data,
  }),
  dispatch => ({
    getAllDatas: () => {
      dispatch(getEnv())
      dispatch(getDevice())
      dispatch(getAlarm())
      dispatch(getEnergy())
    },
    selectDeviceType: deviceType => dispatch(selectDeviceType(deviceType)),
    getFloorFireAlarms: floor => dispatch(getFloorFireAlarms(floor)),
    getFloorIrSensors: floor => dispatch(getFloorIrSensors(floor)),
    getFloorAirConditioners: floor => dispatch(getFloorAirConditioners(floor)),
    getFloorElevators: floor => dispatch(getFloorElevators(floor)),
    getFloorLocks: floor => dispatch(getFloorLocks(floor)),
    getFloorCameras: floor => dispatch(getFloorCameras(floor)),
    getFloorLights: floor => dispatch(getFloorLights(floor))
  })
)(Device)

