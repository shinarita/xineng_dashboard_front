import React from 'react'
import { MiniPanel, Switch } from '@components'
import PropTypes from 'prop-types'
import './index.less'
import FloorList from './floorList'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Polygons, DeviceStatusimages } from './config'
import { DeviceTypes } from '@constants'
import { getRoomDeviceInfo } from '@actions'

class BuildingPanel extends React.Component {
  static propTypes = {
    currentFloor: PropTypes.string.isRequired,
    currentDeviceType: PropTypes.string.isRequired,
    floorFireAlarms: PropTypes.object.isRequired,
    floorIrSensors: PropTypes.object.isRequired,
    floorAirConditioners: PropTypes.object.isRequired,
    floorElevators: PropTypes.object.isRequired,
    floorLocks: PropTypes.object.isRequired,
    floorCameras: PropTypes.object.isRequired,
    floorLights: PropTypes.object.isRequired,
    getRoomDeviceInfo: PropTypes.func.isRequired,
    isFetchingRoomInfo: PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: '',
      isFetching: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currentFloor !== nextProps.currentFloor) {
      this.setState({
        currentRoom: ''
      })
    }
    if (this.props.isFetchingRoomInfo && !nextProps.isFetchingRoomInfo) {
      this.setState({
        isFetching: false
      })
    }
  }
  handleClickRoom(room) {
    this.setState({
      currentRoom: room,
      isFetching: true
    })
    this.props.getRoomDeviceInfo(room)
  }
  renderFloorSvg() {
    const { currentRoom } = this.state
    const { currentFloor } = this.props
    return (
      <svg width="740px" height="577px" viewBox="-1 -3 740 577" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g id="svg" transform="translate(1, 0)" stroke="none" strokeWidth="1" fill="none">
          {
            Polygons[currentFloor].map(item => {
              const { room, points, rect } = item
              if (rect) {
                const [x, y, width, height] = points.split(' ')
                return (
                  <rect
                    className={classnames({ selected: currentRoom === room })}
                    key={room}
                    id={room}
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    onClick={this.handleClickRoom.bind(this, room)}
                  >
                  </rect>
                )
              }
              return (
                <polygon
                  className={classnames({ selected: currentRoom === room })}
                  key={room}
                  id={room}
                  points={points}
                  onClick={this.handleClickRoom.bind(this, room)}
                >
                </polygon>
              )
            })
          }
        </g>
      </svg>
    )
  }
  renderRoomInfoPanel() {
    const { currentRoom, isFetching } = this.state
    const { roomDeviceInfo } = this.props
    if (currentRoom && !isFetching) {
      const { ac_on, ac_value, acs_lock, aux_light, ir_sensor, main_light } = roomDeviceInfo
      return (
        <MiniPanel className='room-info-constainer' title={currentRoom} cornerSize={{ x: 40, y: 34 }}>
          <ul className='room-info-list'>
            <li className='device-info-item ac'>
              <span className='title'>空调：</span>
              <Switch tips={['OFF', `${ac_value}\u2103`]} on={ac_on} />
            </li>
            <li className='device-info-item'>
              <span className='title'>主灯：</span>
              <Switch on={main_light} />
            </li>
            {
              aux_light
                ? (
                  <li className='device-info-item'>
                    <span className='title'>辅灯：</span>
                    <Switch on={aux_light} />
                  </li>
                )
                : null
            }
            <li className='device-info-item'>
              <span className='title'>门锁：</span>
              <span className='status'>{acs_lock ? '开启' : '关闭'}</span>
            </li>
            <li className='device-info-item'>
              <span className='title'>插座：</span>
              <span className='status'>{'有电'}</span>
            </li>
            <li className='device-info-item'>
              <span className='title'>人体感应：</span>
              <span className='status'>{ir_sensor ? '有人' : '无人'}</span>
            </li>
          </ul>
        </MiniPanel>
      )
    }
    return null
  }
  getDeviceIconData() {
    const getData = (data) => {
      const { currentDeviceType, currentFloor } = this.props
      return Object.keys(data).map(key => {
        return {
          room: key,
          icon: DeviceStatusimages[currentDeviceType][data[key].toString()],
          iconPosition: Polygons[currentFloor].find(item => item.room === key).iconPosition
        }
      })
    }
    const { currentDeviceType, floorAirConditioners, floorCameras, floorElevators, floorFireAlarms, floorIrSensors,
      floorLights, floorLocks } = this.props
    let data = []
    switch (currentDeviceType) {
      // case DeviceTypes.fireAlarm:
      //   getFloorFireAlarms(currentFloor)
      //   break
      case DeviceTypes.irSensors:
        data = getData(floorIrSensors)
        break
      case DeviceTypes.centralAc:
        data = getData(floorAirConditioners)
        break
      // case DeviceTypes.elevator:
      //   getFloorElevators(currentFloor)
      //   break
      case DeviceTypes.lock:
        data = getData(floorLocks)
        break
      case DeviceTypes.camera:
        data = getData(floorCameras)
        break
      case DeviceTypes.light:
        data = getData(floorLights)
        break
    }
    return data
  }
  renderDeviceIconPanel() {
    const data = this.getDeviceIconData()
    return (
      <div className='device-icon-container'>
        {
          data.map(item => {
            const { room, iconPosition, icon } = item
            return (
              <img
                className='device-icon'
                key={room}
                // src={require('./images/elevator_on.png')}
                src={icon}
                style={{
                  top: `${iconPosition.top}px`,
                  left: `${iconPosition.left}px`
                }}
              />
            )
          })
        }
      </div>
    )
  }
  render() {
    const { currentFloor } = this.props
    return (
      <MiniPanel className='building-panel-container'>
        <FloorList />
        <div className={classnames('building-body', { f3: currentFloor === '3f', f7: currentFloor === '7f' })}>
          {this.renderFloorSvg()}
          {this.renderRoomInfoPanel()}
          {this.renderDeviceIconPanel()}
        </div>
      </MiniPanel >
    )
  }
}

export default connect(
  state => {
    return {
      currentFloor: state.floor.data,
      currentDeviceType: state.device.type,
      floorFireAlarms: state.floorFireAlarms.data.detail || {},
      floorIrSensors: state.floorIrSensors.data.detail || {},
      floorAirConditioners: state.floorAirConditioners.data.detail || {},
      floorElevators: state.floorElevators.data.detail || {},
      floorLocks: state.floorLocks.data.detail || {},
      floorCameras: state.floorCameras.data.detail || {},
      floorLights: state.floorLights.data.detail || {},
      roomDeviceInfo: state.roomDeviceInfo.data,
      isFetchingRoomInfo: state.roomDeviceInfo.isFetching
    }
  },
  dispatch => ({
    getRoomDeviceInfo: room => dispatch(getRoomDeviceInfo(room))
  })
)(BuildingPanel)