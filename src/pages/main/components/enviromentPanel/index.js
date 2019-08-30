import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { MiniPanel } from '@components'
import EnvItem from './envItem'
import './index.less'
import { EnvList } from './config'
import { connect } from 'react-redux'
import _ from 'lodash'


class EnviromentPanel extends React.Component {
  static propTypes = {
    homepage: PropTypes.bool,
    currentFloor: PropTypes.string.isRequired,
    envData: PropTypes.object.isRequired,
    isFetchingEnv: PropTypes.bool.isRequired
  }
  static defaultProps = {
    homepage: false
  }
  getUsageData() {
    const { envData, homepage, currentFloor } = this.props
    let { temperature, humidity, lux, pm25, co2, fan } = homepage ? envData.total : envData[currentFloor]
    const valueData = { temperature, humidity, lux, pm25, co2, fan }
    return EnvList.map(item => {
      return {
        ...item,
        value: valueData[item.key].toString()
      }
    })
  }
  render() {
    const { isFetchingEnv, envData } = this.props
    const data = isFetchingEnv || _.isEmpty(envData) ? EnvList : this.getUsageData()
    return (
      <MiniPanel title='环境' className='env-panel-container'>
        <ul className='env-list'>
          {
            data.map(item => {
              const { key, title, unit, value } = item
              return (
                <EnvItem
                  key={key}
                  type={key}
                  title={title}
                  unit={unit}
                  value={value}
                />
              )
            })
          }
        </ul>
      </MiniPanel>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentFloor: state.floor.data,
    envData: state.env.data,
    isFetchingEnv: state.env.isFetching
  }
}

export default connect(mapStateToProps)(EnviromentPanel)