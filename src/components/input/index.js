import React from 'react'
import classnames from 'classnames'
import './index.less';

export default class Input extends React.Component {
  render() {
    const { className, ...rest } = this.props
    const newClassName = classnames('input-ui', className)
    return (
      <input {...rest} className={newClassName} />
    )
  }
}
