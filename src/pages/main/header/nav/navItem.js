import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

class NavItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    direction: PropTypes.string
  }
  static defaultProps = {
    selected: false,
    direction: 'left'
  }
  render() {
    const { title, url, selected, direction } = this.props
    const className = classnames('header-nav-item', {
      selected,
      left: direction === 'left',
      right: direction === 'right'
    })
    return (
      <li className={className}>
        <Link to={url} className='nav-title'>
          {title}
        </Link>
      </li>
    )
  }
}

export default NavItem