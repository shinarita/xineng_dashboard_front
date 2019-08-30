import React from 'react'
import LeftArrow from './leftArrow'
import RightArrow from './rightArrow'
import DeviceItem from './deviceItem'
import './index.less'
import { DeviceList } from './config'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

const ItemWidth = 242 + 12;
const Total = DeviceList.length
const MaxShownNumber = 7

class DevicePanel extends React.Component {
  static propTypes = {
    showTotal: PropTypes.bool,
    currentFloor: PropTypes.string.isRequired,
    deviceData: PropTypes.object.isRequired,
    isFetchingDevice: PropTypes.bool.isRequired
  }
  static defaultProps = {
    showTotal: false
  }
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      left: 0
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }
  handleNext() {
    this.setState(prevState => ({
      index: prevState.index + 1,
      left: prevState.left - ItemWidth
    }))
  }
  handlePrevious() {
    this.setState(prevState => ({
      index: prevState.index - 1,
      left: prevState.left + ItemWidth
    }))
  }
  getDeviceData() {
    const { deviceData, showTotal, currentFloor } = this.props
    let { fire_alarm, ir_sensors, central_ac, elevator, acs, camera, light } = showTotal ? deviceData.total : deviceData[currentFloor]
    const valueData = { fire_alarm, ir_sensors, central_ac, elevator, acs, camera, light }
    return DeviceList.map(device => {
      const { key, items } = device
      const data = valueData[key]
      return {
        ...device,
        items: items.map(item => {
          return {
            ...item,
            count: data[item.key]
          }
        })
      }
    })
  }
  render() {
    const { index, left } = this.state
    const leftDisabled = index === 0
    const rightDisabled = index >= (Total - MaxShownNumber)
    const { isFetchingDevice, deviceData } = this.props
    const data = isFetchingDevice || _.isEmpty(deviceData) ? DeviceList : this.getDeviceData()
    return (
      <div className='device-panel-container'>
        <LeftArrow disabled={leftDisabled} onClick={this.handlePrevious} />
        <div className='device-list-container'>
          <ul className='device-list' style={{ left: `${left}px` }}>
            {
              data.map(item => {
                const { key, items, title, icon, height, width } = item
                return (
                  <DeviceItem
                    key={key}
                    title={title}
                    items={items}
                    icon={icon}
                    height={height}
                    width={width}
                  />
                )
              })
            }
          </ul>
        </div>
        <RightArrow disabled={rightDisabled} onClick={this.handleNext} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentFloor: state.floor.data,
    deviceData: state.device.data,
    isFetchingDevice: state.device.isFetching
  }
}
export default connect(mapStateToProps)(DevicePanel)