import React from 'react'
import './index.less'
import { EnergyPanel, EnviromentPanel, AlarmPanel, DevicePanel, FaceRecogPanel, SecurityPanel } from '../components'
import { connect } from 'react-redux'
import { getEnergy, getEnv, getDevice, getAlarm, getLight } from '@actions'

class Home extends React.Component {
  componentDidMount() {
    this.props.getAllDatas()
  }
  render() {
    return (
      <div className='home-page-container'>
        <div className='main-top'>
          <div className='top-left'>
            <EnergyPanel showTotal />
            <EnviromentPanel showTotal />
          </div>
          <div className='top-middle'>
            <AlarmPanel showTotal />
          </div>
          <div className='top-right'>
            <SecurityPanel />
            <FaceRecogPanel />
          </div>
        </div>
        <div className='main-footer'>
          <DevicePanel showTotal />
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
    }
  })
)(Home)
