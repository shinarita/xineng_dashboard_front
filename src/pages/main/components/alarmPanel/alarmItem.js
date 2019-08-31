import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { MiniPanel } from '@components'

export default class AlarmItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.string
  }
  static defaultProps = {
    count: ''
  }
  constructor(props) {
    super(props)
    this.state = {
      highlight: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.count !== '' && this.props.count < nextProps.count && !this.state.highlight) {
      this.setState({
        highlight: true
      })
    }
  }
  handleClick() {
    this.setState({
      highlight: false
    })
  }
  render() {
    const { title, count } = this.props
    const { highlight } = this.state
    return (
      <MiniPanel
        className={classnames('alarm-item-container', { selected: highlight })}
        cornerSize={{ x: 18, y: 15 }}
        onClick={this.handleClick}
      >
        <p className='title'>
          {title}
        </p>
        <p className='alarm-count-line'>
          <span className='count'>
            {count || '--'}
          </span>
          <span className='unit'>
            条
          </span>
        </p>
      </MiniPanel>
    )
  }
}