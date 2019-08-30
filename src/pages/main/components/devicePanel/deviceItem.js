import React from 'react'
import PropTypes from 'prop-types'
import { MiniPanel } from '@components'
import { queryParamsToObject } from '@utils'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { selectDeviceType } from '@actions'

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
    currentDeviceType: PropTypes.string.isRequired
  }

  static defaultProps = {
    history: {}
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { homepage, history, id, selectDeviceType } = this.props
    if (homepage) {
      history.push(`/devices?type=${id}`)
      selectDeviceType(id)
    }
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
              const { key, title, unit, count } = item
              return (
                <li className='subitem' key={key}>
                  <span className='subitem-title'>{`${title}：`}</span>
                  <span className='subitem-cont'>{`${count || '--'}${unit}`}</span>
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
    console.log(state)
    return {
      currentDeviceType: state.device.type
    }
  },
  dispatch => ({
    selectDeviceType: deviceType => dispatch(selectDeviceType(deviceType))
  })
)(DeviceItem)