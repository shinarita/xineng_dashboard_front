import React from 'react'
import PropTypes from 'prop-types'
import { MiniPanel } from '@components'

export default class DeviceItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  render() {
    const { title, icon, items, height, width } = this.props
    return (
      <MiniPanel className='device-item-container' cornerSize={{ x: 18, y: 15 }}>
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