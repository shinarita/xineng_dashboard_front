import React from 'react'
import { MiniPanel, Switch } from '@components'
import PropTypes from 'prop-types'
import './index.less'
import FloorList from './floorList'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { RoomPolygons, DeviceStatusimages, MointorPositions, ElevatorPositions } from './config'
import { DeviceTypes } from '@constants'
import { getRoomDeviceInfo, controlRoomAc, controlLight } from '@actions'
import { toAdaptivePx } from '@utils'
import _ from 'lodash'

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
    isFetchingRoomInfo: PropTypes.bool.isRequired,
    controlRoomAc: PropTypes.func.isRequired,
    controlLight: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: '',
      isFetching: false
    }
    this.handleChangeAc = this.handleChangeAc.bind(this)
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
      <svg className='floor-svg-container' viewBox={RoomPolygons[currentFloor]['viewBox']} version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g id="svg" transform="translate(1, 0)" stroke="none" strokeWidth="1" fill="none">
          {
            RoomPolygons[currentFloor]['positions'].map(item => {
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
  handleChangeAc(on) {
    const { currentRoom } = this.state
    const { controlRoomAc } = this.props
    controlRoomAc({
      room: currentRoom,
      run: on
    })
  }
  handleChangeLight(isMainLight, on) {
    const { currentRoom } = this.state
    const { controlLight } = this.props
    controlLight({
      room: currentRoom,
      level: isMainLight ? '0' : '1',
      action: on ? '1' : '0'
    })
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
              <Switch
                tips={['OFF', `${ac_value}\u2103`]}
                on={ac_on}
                onChange={this.handleChangeAc}
              />
            </li>
            <li className='device-info-item'>
              <span className='title'>主灯：</span>
              <Switch
                on={main_light}
                onChange={this.handleChangeLight.bind(this, true)}
              />
            </li>
            {
              aux_light
                ? (
                  <li className='device-info-item'>
                    <span className='title'>辅灯：</span>
                    <Switch
                      on={aux_light}
                      onChange={this.handleChangeLight.bind(this, false)}
                    />
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
      let returnData = []
      Object.keys(data).forEach(key => {
        const roomInfo = RoomPolygons[currentFloor]['positions'].find(item => item.room === key)
        if (roomInfo) {
          returnData.push(
            {
              room: key,
              icon: DeviceStatusimages[currentDeviceType][data[key].toString()],
              iconPosition: roomInfo.iconPosition
            }
          )
        }
      })
      return returnData
    }
    const { currentDeviceType, floorAirConditioners, floorCameras, floorFireAlarms, floorIrSensors,
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
    const { currentDeviceType } = this.props
    return (
      <div className='device-icon-container'>
        {
          data.map(item => {
            const { room, iconPosition, icon } = item
            return (
              <img
                className={classnames('device-icon', `icon-${currentDeviceType}`)}
                key={room}
                src={icon}
                style={{
                  top: `${toAdaptivePx(iconPosition.top)}`,
                  left: `${toAdaptivePx(iconPosition.left)}`
                }}
              />
            )
          })
        }
      </div>
    )
  }
  renderMonitorIconPanel() {
    const { currentFloor } = this.props
    return (
      <div className='monitor-icons-panel'>
        {
          MointorPositions[currentFloor].map(item => {
            const { id, x, y } = item
            return (
              <img
                key={id}
                src={require('./images/icon_monitor.png')}
                style={{
                  top: `${toAdaptivePx(y)}`,
                  left: `${toAdaptivePx(x)}`
                }}
              />
            )
          })
        }
      </div>
    )
  }
  renderElevatorIcons() {
    const { currentFloor, floorElevators } = this.props
    if (_.isEmpty(floorElevators)) {
      return null
    }
    return (
      <div className='elevator-icons-panel'>
        {
          ElevatorPositions[currentFloor].map(item => {
            const { id, x, y } = item
            let iconName = 'elevator_off'
            if (floorElevators[id].floor.toString() === currentFloor.substr(0, 1)) {
              iconName = 'elevator_on'
            }
            return (
              <img
                key={id}
                src={require(`./images/${iconName}.png`)}
                style={{
                  top: `${toAdaptivePx(y)}`,
                  left: `${toAdaptivePx(x)}`
                }}
              />
            )
          })
        }
      </div>
    )
  }
  renderIcons() {
    const { currentDeviceType } = this.props
    switch (currentDeviceType) {
      case DeviceTypes.camera:
        return this.renderMonitorIconPanel()
      case DeviceTypes.elevator:
        return this.renderElevatorIcons()
      default:
        return this.renderDeviceIconPanel()
    }
  }
  render() {
    const { currentFloor } = this.props
    return (
      <MiniPanel className='building-panel-container'>
        <FloorList />
        <div className={classnames('building-body', { f3: currentFloor === '3f', f7: currentFloor === '7f' })}>
          {this.renderFloorSvg()}
          {this.renderRoomInfoPanel()}
          {this.renderIcons()}
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
      floorElevators: state.floorElevators.data || {},
      floorLocks: state.floorLocks.data.detail || {},
      floorCameras: state.floorCameras.data.detail || {},
      floorLights: state.floorLights.data.detail || {},
      roomDeviceInfo: state.roomDeviceInfo.data,
      isFetchingRoomInfo: state.roomDeviceInfo.isFetching
    }
  },
  dispatch => ({
    getRoomDeviceInfo: room => dispatch(getRoomDeviceInfo(room)),
    controlRoomAc: options => dispatch(controlRoomAc(options)),
    controlLight: options => dispatch(controlLight(options))
  })
)(BuildingPanel)