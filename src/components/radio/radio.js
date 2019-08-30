import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.less'

export default class Radio extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'warning'])
  }
  static defaultProps = {
    checked: false,
    type: 'primary'
  }
  handleChange(e) {
    this.props.onChange(e)
  }
  render() {
    const { label, value, checked, type } = this.props
    const newClassName = classnames('radio-container', {
      primary: type === 'primary',
      warning: type === 'warning'
    })
    return (
      <label htmlFor={value} className={newClassName}>
        <span className='radio-body'>
          <input
            type='radio'
            value={value}
            name={name}
            id={value}
            checked={checked}
            onChange={this.handleChange.bind(this)}
            className={classnames('radio-input', { checked })}
          />
          <span className={classnames('radio-ui', { checked })} />
        </span>

        <span className='input-label'>
          {label}
        </span>
      </label>
    )
  }
}