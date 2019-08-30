import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class EnergyItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    count: PropTypes.string,
    unit: PropTypes.string.isRequired
  }

  static defaultProps = {
    className: '',
    count: ''
  }

  renderUnit(unit) {
    if (unit.indexOf('*') > -1) {
      const arr = unit.split('*')
      return (
        <span className='unit'>
          {arr[0]}
          <sup>{arr[1]}</sup>
        </span>
      )
    }
    return (<span className='unit'>{unit}</span>)
  }

  render() {
    const { className, title, icon, count, unit } = this.props
    const newClassName = classnames('energy-item-container', className)
    return (
      <li className={newClassName} >
        <img className='icon' src={require(`../../../../images/icons/icon_${icon}.png`)} />
        <p className='title'>{title}</p>
        <p className='usage-line'>
          <span className='count'>{count || '--'}</span>
          {this.renderUnit(unit)}
        </p>
      </li >
    )
  }
}