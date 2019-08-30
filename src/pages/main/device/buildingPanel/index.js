import React from 'react'
import { MiniPanel } from '@components'
import PropTypes from 'prop-types'
import './index.less'
import FloorList from './floorList'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { RoomServiceList, Polygons } from './config'

class BuildingPanel extends React.Component {
  static propTypes = {
    currentFloor: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: ''
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currentFloor !== nextProps.currentFloor) {
      this.setState({
        currentRoom: ''
      })
    }
  }
  handleClickRoom(room) {
    this.setState({
      currentRoom: room
    })
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
    const { currentRoom } = this.state
    if (currentRoom) {
      return (
        <MiniPanel className='room-info-constainer' title={currentRoom} cornerSize={{ x: 40, y: 34 }}>
          <ul className='room-info-list'>
            {
              RoomServiceList.map(item => {
                const { key, title } = item
                return (
                  <li className='device-info-item' key={key}>
                    <span className='title'>{`${title}：`}</span>
                    <span className='status'>{'--'}</span>
                  </li>
                )
              })
            }
          </ul>
        </MiniPanel>
      )
    }
    return null
  }
  renderDeviceIconPanel() {
    const { currentFloor } = this.props
    return (
      <div className='device-icon-container'>
        {
          Polygons[currentFloor].map(item => {
            const { room, iconPositon } = item
            return (
              <img
                className='device-icon'
                key={room}
                src={require('./images/elevator_on.png')}
                style={{
                  top: `${iconPositon.top}px`,
                  left: `${iconPositon.left}px`
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
          {/* {this.renderDeviceIconPanel()} */}
        </div>
      </MiniPanel >
    )
  }
}

export default connect(
  state => {
    return {
      currentFloor: state.floor.data
    }
  }
)(BuildingPanel)