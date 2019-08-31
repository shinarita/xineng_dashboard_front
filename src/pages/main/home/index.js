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
    const { history } = this.props
    return (
      <div className='home-page-container'>
        <div className='main-top'>
          <div className='top-left'>
            <EnergyPanel homepage />
            <EnviromentPanel homepage />
          </div>
          <div className='top-middle'>
            <AlarmPanel homepage />
            <video width='1028' height='670' autoPlay loop>
              <source src={require('../../../images/video/index.mp4')} type='video/mp4' />
            </video>
          </div>
          <div className='top-right'>
            <SecurityPanel />
            <FaceRecogPanel />
          </div>
        </div>
        <div className='main-footer'>
          <DevicePanel
            homepage
            history={history}
          />
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
