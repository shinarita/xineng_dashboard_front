import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Radio } from '@components'
import { switchCentralVentilation } from '@actions'
import { connect } from 'react-redux'

class EnvItem extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    unit: PropTypes.string.isRequired,
    switchCentralVentilation: PropTypes.func.isRequired
  }

  static defaultProps = {
    className: '',
    value: ''
  }

  renderTitle(title) {
    if (title.indexOf('*') > -1) {
      const arr = title.split('*')
      return (
        <p className='title'>
          {arr[0]}
          <sub>{arr[1]}</sub>
        </p>
      )
    }
    return (
      <p className='title'>{title}</p>
    )
  }

  renderUsageLine() {
    const { unit, value } = this.props
    return (
      <p className='usage-line'>
        <span className='value'>{value || '--'}</span>
        {this.renderUnit(unit)}
      </p>
    )
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
    return (
      <span className='unit'>{unit}</span>
    )
  }
  handleClickFan(value) {
    this.props.switchCentralVentilation(value === 'on')
  }
  renderFanLine() {
    const { value } = this.props
    return (
      <Radio.Group
        items={[
          { label: '开', value: 'on', type: 'warning' },
          { label: '关', value: 'off', type: 'primary' }
        ]}
        name='fan'
        defaultChecked={value === 'true' ? 'on' : 'off'}
        className='fan-radio-group'
        onChange={this.handleClickFan.bind(this)}
      />
    )
  }

  render() {
    const { type, title } = this.props
    return (
      <div className='env-item-container'>
        <div className={classnames('env-icon', type)} />
        <div className='env-usage-desc'>
          {this.renderTitle(title)}
          {
            type !== 'fan'
              ? this.renderUsageLine()
              : this.renderFanLine()
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  switchCentralVentilation: on => dispatch(switchCentralVentilation(on))
})

export default connect(null, mapDispatchToProps)(EnvItem)
