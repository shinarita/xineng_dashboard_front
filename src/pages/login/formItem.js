import React from 'react'
import { Input } from '@components'
import PropTypes from 'prop-types'

export default class FormItem extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(e) {
    const value = e.target.value
    this.props.onChange(value)
  }

  render() {
    const { label, id, value, type } = this.props
    return (
      <p className='login-form-item'>
        <label className='login-form-label' htmlFor={id}>{label}</label>
        <Input
          onChange={this.handleInputChange}
          id={id}
          className='login-form-input'
          value={value}
          type={type}
        />
      </p>
    )
  }
}