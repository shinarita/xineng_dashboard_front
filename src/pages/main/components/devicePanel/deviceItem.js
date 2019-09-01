import React from 'react'
import PropTypes from 'prop-types'
import { MiniPanel } from '@components'
import classnames from 'classnames'
import { connect } from 'react-redux'
import {
  selectDeviceType, getFloorFireAlarms, getFloorIrSensors, getFloorAirConditioners,
  getFloorElevators, getFloorLocks, getFloorCameras, getFloorLights
} from '@actions'
import { getFloorDeviceData } from '../../utils'

class DeviceItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    homepage: PropTypes.bool,
    history: PropTypes.object,
    selectDeviceType: PropTypes.func.isRequired,
    currentDeviceType: PropTypes.string.isRequired,
    getFloorFireAlarms: PropTypes.func.isRequired,
    getFloorIrSensors: PropTypes.func.isRequired,
    getFloorAirConditioners: PropTypes.func.isRequired,
    getFloorElevators: PropTypes.func.isRequired,
    getFloorLocks: PropTypes.func.isRequired,
    getFloorCameras: PropTypes.func.isRequired,
    getFloorLights: PropTypes.func.isRequired,
    currentFloor: PropTypes.string.isRequired,
  }

  static defaultProps = {
    history: {}
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { homepage, history, id, selectDeviceType, currentFloor, getFloorFireAlarms, getFloorIrSensors, getFloorAirConditioners,
      getFloorElevators, getFloorLocks, getFloorCameras, getFloorLights } = this.props
    if (homepage) {
      history.push(`/devices?type=${id}`)
    }
    getFloorDeviceData(id, currentFloor, {
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

  render() {
    const { title, icon, items, height, width, id, homepage, currentDeviceType } = this.props
    let className = 'device-item-container'
    if (!homepage) {
      className = classnames('device-item-container', { selected: currentDeviceType === id })
    }
    return (
      <MiniPanel
        className={className}
        cornerSize={{ x: 18, y: 15 }}
        onClick={this.handleClick}
      >
        <div className='item-title'>
          <p className='item-title-text'>{title}</p>
          <img className='item-icon' style={{ width: width + 'px', height: height + 'px' }} src={icon} />
        </div>
        <ul className='subitem-list'>
          {
            items.map(item => {
              const { key, title, unit, value } = item
              return (
                <li className='subitem' key={key}>
                  <span className='subitem-title'>{`${title}：`}</span>
                  <span className='subitem-cont'>{`${(typeof value === 'function' || value === '') ? '--' : value}${unit}`}</span>
                </li>
              )
            })
          }
        </ul>
      </MiniPanel>
    )
  }
}

export default connect(
  state => {
    return {
      currentDeviceType: state.device.type,
      currentFloor: state.floor.data
    }
  },
  dispatch => ({
    selectDeviceType: deviceType => dispatch(selectDeviceType(deviceType)),
    getFloorFireAlarms: floor => dispatch(getFloorFireAlarms(floor)),
    getFloorIrSensors: floor => dispatch(getFloorIrSensors(floor)),
    getFloorAirConditioners: floor => dispatch(getFloorAirConditioners(floor)),
    getFloorElevators: floor => dispatch(getFloorElevators(floor)),
    getFloorLocks: floor => dispatch(getFloorLocks(floor)),
    getFloorCameras: floor => dispatch(getFloorCameras(floor)),
    getFloorLights: floor => dispatch(getFloorLights(floor))
  })
)(DeviceItem)