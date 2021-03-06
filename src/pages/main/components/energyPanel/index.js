import React from 'react'
import { MiniPanel, SectionTitle, DoughnutChart } from '@components'
import './index.less'
import EnergyItem from './energyItem'
import ElecUsageItem from './elecUsageItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TotalUsageList, ElecUsageList } from './config'
import _ from 'lodash'

class EnergyPanel extends React.Component {
  static propTypes = {
    homepage: PropTypes.bool,
    currentFloor: PropTypes.string.isRequired,
    energyData: PropTypes.object.isRequired,
    isFetchingEnergy: PropTypes.bool.isRequired
  }
  static defaultProps = {
    homepage: false
  }
  getUsageData() {
    const { energyData, homepage, currentFloor } = this.props
    let { water, money, total, average_electric, average_water, average_by_area } = homepage ? energyData.total : energyData[currentFloor]
    const countData = { water, money, total, average_electric, average_water, average_by_area }
    return TotalUsageList.map(item => {
      return {
        ...item,
        count: countData[item.key].toString()
      }
    })
  }
  getUsageDirectionData() {
    const { energyData, homepage, currentFloor } = this.props
    let { ac_main, ac_inner, total, socket, light, kitchen } = homepage ? energyData.total : energyData[currentFloor]
    const countData = { ac_main, ac_inner, total, socket, light, kitchen }
    return ElecUsageList.map(item => {
      return {
        ...item,
        usage: countData[item.key],
        total: total
      }
    })
  }
  getChartData(usageDirectionData) {
    let data = {}
    usageDirectionData.forEach(item => {
      data[item.key] = [item.usage, item.total - item.usage]
    })
    return data
  }
  render() {
    const { isFetchingEnergy, energyData, currentFloor, homepage } = this.props
    let usageData = TotalUsageList
    let usageDirectionData = ElecUsageList
    if (!isFetchingEnergy && !_.isEmpty(energyData) && !!energyData[homepage ? 'total' : currentFloor]) {
      usageData = this.getUsageData()
      usageDirectionData = this.getUsageDirectionData()
    }
    const chartData = this.getChartData(usageDirectionData)
    return (
      <MiniPanel title='能源' className='energy-panel-container'>
        <div className='total-usage-container'>
          <SectionTitle title='总体指标' className='section-title' />
          <ul className='total-usage-list'>
            {
              usageData.map(item => {
                const { title, key, icon, unit, count } = item
                return (
                  <EnergyItem
                    key={key}
                    title={title}
                    icon={icon}
                    unit={unit}
                    count={count}
                  />
                )
              })
            }
          </ul>
        </div>
        <div className='elec-usage-container'>
          <SectionTitle title='用电流向' className='section-title' />
          <div className='elec-usage-show-panel'>
            <DoughnutChart
              values={chartData}
            />
            <ul className='elec-usage-list'>
              {
                usageDirectionData.map(item => {
                  const { key, title, color, usage, total } = item
                  return (
                    <ElecUsageItem
                      key={key}
                      color={color}
                      title={title}
                      usage={usage}
                      total={total}
                    />)
                })
              }
            </ul>
          </div>
        </div>
      </MiniPanel>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentFloor: state.floor.data,
    energyData: state.energy.data,
    isFetchingEnergy: state.energy.isFetching
  }
}
export default connect(mapStateToProps)(EnergyPanel)