import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less';

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  }
  render() {
    const { className, name, ...rest } = this.props
    const newClassName = classnames('button-ui', className)
    return (
      <button {...rest} className={newClassName} >
        {name}
      </button>
    )
  }
}