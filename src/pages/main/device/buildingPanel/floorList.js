import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { switchFloor } from '@actions'

const Floors = [
  { key: '3f', enabled: true },
  { key: '4f', enabled: false },
  { key: '5f', enabled: false },
  { key: '6f', enabled: false },
  { key: '7f', enabled: true },
]

class FloorList extends React.Component {
  static propTypes = {
    currentFloor: PropTypes.string.isRequired,
    switchFloor: PropTypes.func.isRequired
  }
  handleChange(floor) {
    this.props.switchFloor(floor)
  }
  render() {
    const { currentFloor } = this.props
    return (
      <ul className='building-floor-list-container'>
        {
          Floors.map(item => {
            const { key, enabled } = item
            const className = classnames('floor-item', {
              selected: currentFloor === key,
              disabled: !enabled
            })
            return (
              <li
                key={key}
                className={className}
                onClick={this.handleChange.bind(this, key)}
              >
                {key.split('').reverse().join('').toUpperCase()}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default connect(
  state => {
    console.log(state)
    return {
      currentFloor: state.floor.data
    }
  },
  dispatch => ({
    switchFloor: floor => dispatch(switchFloor(floor))
  })
)(FloorList)