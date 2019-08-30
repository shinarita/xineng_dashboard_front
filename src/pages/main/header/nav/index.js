import React from 'react'
import PropTypes from 'prop-types'
import NavListData from './config'
import NavItem from './navItem'
import './index.less'

export default class HeaderNav extends React.Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired
  }

  renderNavs(direction, pathname) {
    return NavListData.filter(item => item.direction === direction).map(item => {
      const { url, title, direction, key } = item
      return (
        <NavItem
          key={key}
          url={url}
          direction={direction}
          title={title}
          selected={url === pathname}
        />
      )
    })
  }

  render() {
    let { pathname } = this.props
    pathname = pathname === '/' ? '/home' : pathname
    return (
      <ul className='header-nav-bar'>
        {this.renderNavs('right', pathname)}
        <li className='title-gap'>

        </li>
        {this.renderNavs('left', pathname)}
      </ul>
    )
  }
}