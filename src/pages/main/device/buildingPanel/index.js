import React from 'react'
import { MiniPanel } from '@components'
import './index.less'
import FloorList from './floorList'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { F3Polygons, RoomServiceList } from './config'

export default class BuildingPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: ''
    }
  }
  handleClickRoom(room) {
    this.setState({
      currentRoom: room
    })
  }
  render() {
    const { currentRoom } = this.state
    return (
      <MiniPanel className='building-panel-container'>
        <FloorList />
        <div className='building-body'>
          <div className='svg-container'>
            <svg width="740px" height="577px" viewBox="0 0 740 577" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <g id="svg" transform="translate(1, 0)" stroke="none" strokeWidth="1" fill="none">
                {
                  F3Polygons.map(item => {
                    const { room, points } = item
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
          </div>
          {
            currentRoom
              ? (
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
              : null
          }
          <div className='device-icon-container'>
            {
              F3Polygons.map(item => {
                const { room, iconPositon } = item
                return (
                  <img
                    className='device-icon'
                    key={room}
                    src={require('../../../../images/icons/building_elevator_on.png')}
                    style={{
                      top: `${iconPositon.top}px`,
                      left: `${iconPositon.left}px`
                    }}
                  />
                )
              })
            }
          </div>
        </div>
      </MiniPanel >
    )
  }
}