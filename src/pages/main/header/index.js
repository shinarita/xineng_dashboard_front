import React from 'react'
import './index.less'
import HeaderNav from './nav'
import Timeline from './timeline'
import PropTypes from 'prop-types'

class MainHeader extends React.Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired
  }
  render() {
    return (
      <header className='main-header-container'>
        <p className='title'>
          锡能大厦智能控制系统
        </p>
        <HeaderNav pathname={this.props.pathname} />
        <Timeline />
      </header>
    )
  }
}

export default MainHeader
