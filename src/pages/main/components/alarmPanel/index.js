import React from 'react'
import AlarmItem from './alarmItem'
import './index.less'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { AlarmList } from './config'
import { getAlarm } from '@actions'

class AlarmPanel extends React.Component {
  static propTypes = {
    homepage: PropTypes.bool,
    currentFloor: PropTypes.string.isRequired,
    alarmData: PropTypes.object.isRequired,
    isFetchingAlarm: PropTypes.bool.isRequired,
    getAlarm: PropTypes.func.isRequired
  }
  static defaultProps = {
    homepage: false
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getAlarm()
    }, 60 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  getData() {
    const { alarmData, homepage, currentFloor } = this.props
    let { short_circuit, leak, over_heat, surge, more_less_vol, overload, circuit_fire } = homepage ? alarmData.total : alarmData[currentFloor]
    const countData = { short_circuit, leak, over_heat, surge, more_less_vol, overload, circuit_fire }
    return AlarmList.map(item => {
      return {
        ...item,
        count: countData[item.key].toString()
      }
    })
  }
  render() {
    const { isFetchingAlarm, alarmData, currentFloor, homepage } = this.props
    const data = isFetchingAlarm || _.isEmpty(alarmData) || !alarmData[homepage ? 'total' : currentFloor] ? AlarmList : this.getData()
    return (
      <ul className='alarm-panel-container'>
        {
          data.map(item => {
            const { key, title, count } = item
            return (
              <li key={key}>
                <AlarmItem title={title} count={count} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentFloor: state.floor.data,
    alarmData: state.alarm.data,
    isFetchingAlarm: state.alarm.isFetching
  }
}

const mapDispatchToProps = dispatch => ({
  getAlarm: () => {
    dispatch(getAlarm())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AlarmPanel)