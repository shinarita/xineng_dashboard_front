import React from 'react'
// import './index.less'
import { EnergyPanel, EnviromentPanel, AlarmPanel, DevicePanel, FaceRecogPanel, SecurityPanel } from '../components'
import BuildingPanel from './buildingPanel'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  getEnergy, getEnv, getDevice, getAlarm, getFaceReg, getFloorFireAlarms, getFloorIrSensors, getFloorAirConditioners,
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
    currentDeviceType: PropTypes.string.isRequired
  }
  getDeviceData(deviceType, floor) {
    const { selectDeviceType, getFloorFireAlarms, getFloorIrSensors, getFloorAirConditioners,
      getFloorElevators, getFloorLocks, getFloorCameras, getFloorLights } = this.props
    getFloorDeviceData(deviceType, floor, {
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
  componentDidMount() {
    const { location, currentFloor } = this.props
    const queryObj = queryParamsToObject(location.search)
    if (queryObj.type) {
      this.getDeviceData(queryObj.type, currentFloor)
    }
    this.props.getAllDatas()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentFloor !== nextProps.currentFloor
      || this.props.currentDeviceType !== nextProps.currentDeviceType
    ) {
      this.getDeviceData(nextProps.currentDeviceType, nextProps.currentFloor)
    }
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
    currentDeviceType: state.device.type,
  }),
  dispatch => ({
    getAllDatas: () => {
      dispatch(getEnv())
      dispatch(getDevice())
      dispatch(getAlarm())
      dispatch(getEnergy())
      dispatch(getFaceReg())
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

