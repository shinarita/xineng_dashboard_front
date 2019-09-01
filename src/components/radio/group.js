import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Radio from './radio'

export default class Group extends React.Component {
  static propTypes = {
    defaultChecked: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired
  }
  static defaultProps = {
    defaultChecked: '',
    onChange: null,
    className: ''
  }
  constructor(props) {
    super(props)
    this.state = {
      checked: props.defaultChecked
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.defaultChecked !== nextProps.defaultChecked) {
      this.setState({
        checked: nextProps.defaultChecked
      })
    }
  }
  handleChange(e) {
    const value = e.target.value
    if (this.state.checked === value) {
      return
    }
    this.setState({
      checked: value
    })
    this.props.onChange && this.props.onChange(value)
  }
  render() {
    const { items, name, className } = this.props
    const { checked } = this.state
    const newClassName = classnames('radio-group', className)
    return (
      <div className={newClassName}>
        {
          items.map(item => {
            const { label, value, type } = item
            return (
              <Radio
                key={value}
                label={label}
                value={value}
                name={name}
                onChange={this.handleChange.bind(this)}
                checked={checked === value}
                type={type}
              />
            )
          })
        }
      </div>
    )
  }
}