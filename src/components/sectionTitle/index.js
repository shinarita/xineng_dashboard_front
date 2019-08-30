import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less';

export default class SectionTitle extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
  }
  static defaultProps = {
    className: ''
  }
  render() {
    const { className, title } = this.props
    const newClassName = classnames('section-title', className)
    return (
      <p className={newClassName}>
        <span className='front-icon'>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className='title'>
          {title}
        </span>
      </p>
    )
  }
}