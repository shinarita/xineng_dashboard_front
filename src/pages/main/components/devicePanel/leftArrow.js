import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class LeftArrow extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }
  render() {
    const { disabled, onClick } = this.props
    return (
      <div className={classnames('left-arrow-container', { disabled })} onClick={disabled ? null : onClick}>
        <img className='lefttop-corner' src={require('../../../../images/common/lefttop.png')} />
        <img className='leftbottom-corner' src={require('../../../../images/common/leftbottom.png')} />
        <img className='icon-switch' src={require('../../../../images/icons/icon_switch.png')} />
      </div>
    )
  }
}