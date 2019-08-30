import React from 'react'
import PropTypes from 'prop-types'

const FullPercentLineWidth = 64;

export default class ElecUsageItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    usage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }
  render() {
    const { title, color, usage, total } = this.props
    const currentPercentLeft = parseInt((usage / total) * FullPercentLineWidth)
    return (
      <div className='elec-usage-item-container'>
        <span className={`color-dot`} style={{ background: color }} />
        <span className='title'>{title}</span>
        <div className='usage-percent-line' style={{ width: `${FullPercentLineWidth}px` }}>
          <span className='current-percent' style={{ left: `${currentPercentLeft}px` }} />
        </div>
        <span className='total-txt'>{total}</span>
      </div>
    )
  }
}