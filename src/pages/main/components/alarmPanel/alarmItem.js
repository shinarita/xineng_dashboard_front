import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { MiniPanel } from '@components'

export default class AlarmItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.string
  }
  static defaultProps = {
    count: ''
  }
  render() {
    const { title, count } = this.props
    return (
      <MiniPanel className='alarm-item-container' cornerSize={{ x: 18, y: 15 }}>
        <p className='title'>
          {title}
        </p>
        <p className='alarm-count-line'>
          <span className='count'>
            {count || '--'}
          </span>
          <span className='unit'>
            条
          </span>
        </p>
      </MiniPanel>
    )
  }
}