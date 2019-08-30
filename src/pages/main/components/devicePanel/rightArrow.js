import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class RightArrow extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }
  render() {
    const { disabled, onClick } = this.props
    return (
      <div className={classnames('right-arrow-container', { disabled })} onClick={disabled ? null : onClick}>
        <img className='righttop-corner' src={require('../../../../images/common/righttop.png')} />
        <img className='rightbottom-corner' src={require('../../../../images/common/rightbottom.png')} />
        <img className='icon-switch' src={require('../../../../images/icons/icon_switch.png')} />
      </div>
    )
  }
}