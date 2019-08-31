import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'

class Switch extends React.Component {
  static propTypes = {
    tips: PropTypes.array,
    on: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    tips: ['OFF', 'ON'],
    on: false,
    onChange: null
  }
  constructor(props) {
    super(props)
    this.state = {
      on: props.on
    }
    this.handleSwitch = this.handleSwitch.bind(this)
  }
  handleSwitch() {
    this.setState(prevState => ({
      on: !prevState.on
    }))
    this.props.onChange && this.props.onChange(this.state.on)
  }
  render() {
    const { on } = this.state
    const { tips } = this.props
    return (
      <div className={classnames('switch-container', { on })}>
        <span className='switch-icon' onClick={this.handleSwitch}>
          <img src={require('../../images/icons/icon_switch_1.png')} />
        </span>
        <p className='switch-tips'>
          <span style={{ opacity: on ? 1 : 0 }}>{tips[0]}</span>
          <span style={{ opacity: on ? 0 : 1 }}>{tips[1]}</span>
        </p>
      </div>
    )
  }
}

export default Switch