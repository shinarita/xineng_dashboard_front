import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less';

export default class MiniPanel extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    cornerSize: PropTypes.object
  }
  static defaultProps = {
    title: '',
    className: '',
    cornerSize: {
      x: 51,
      y: 45
    }
  }
  render() {
    const { className, children, title, cornerSize, ...rest } = this.props
    const newClassName = classnames('mini-panel-ui', className)
    const cornerSizeStyle = {
      height: `${cornerSize.y}px`,
      width: `${cornerSize.x}px`
    }
    return (
      <div className={newClassName} {...rest}>
        <img style={cornerSizeStyle} className='lefttop-corner-bg' src={require('../../images/common/lefttop.png')} />
        <img style={cornerSizeStyle} className='righttop-corner-bg' src={require('../../images/common/righttop.png')} />
        <img style={cornerSizeStyle} className='leftbottom-corner-bg' src={require('../../images/common/leftbottom.png')} />
        <img style={cornerSizeStyle} className='rightbottom-corner-bg' src={require('../../images/common/rightbottom.png')} />
        {
          title
            ? (
              <p className='panel-title'>{title}</p>
            )
            : null
        }
        {children}
      </div>
    )
  }
}