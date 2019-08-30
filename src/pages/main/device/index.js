import React from 'react'
// import './index.less'
import { EnergyPanel, EnviromentPanel, AlarmPanel, DevicePanel, FaceRecogPanel, SecurityPanel } from '../components'
import BuildingPanel from './buildingPanel'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getEnergy, getEnv, getDevice, getAlarm, getLight } from '@actions'
import { queryParamsToObject } from '@utils'
import { selectDeviceType } from '@actions'

class Device extends React.Component {
  static propTypes = {
    selectDeviceType: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { location, selectDeviceType } = this.props
    const queryObj = queryParamsToObject(location.search)
    console.log(queryObj)
    if (queryObj.type) {
      selectDeviceType(queryObj.type)
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

export default connect(null,
  dispatch => ({
    getAllDatas: () => {
      dispatch(getLight())
      dispatch(getEnv())
      dispatch(getDevice())
      dispatch(getAlarm())
      dispatch(getEnergy())
    },
    selectDeviceType: deviceType => dispatch(selectDeviceType(deviceType))
  })
)(Device)

