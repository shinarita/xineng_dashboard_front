import React from 'react'
import { MiniPanel, SectionTitle, RadiusBarChart } from '@components'
import './index.less'
import EnergyItem from './energyItem'
import ElecUsageItem from './elecUsageItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TotalUsageList, ElecUsageList } from './config'
import _ from 'lodash'

class EnergyPanel extends React.Component {
  static propTypes = {
    showTotal: PropTypes.bool,
    currentFloor: PropTypes.string.isRequired,
    energyData: PropTypes.object.isRequired,
    isFetchingEnergy: PropTypes.bool.isRequired
  }
  static defaultProps = {
    showTotal: false
  }
  getUsageData() {
    const { energyData, showTotal, currentFloor } = this.props
    let { water, money, total, average_electric, average_water, average_by_area } = showTotal ? energyData.total : energyData[currentFloor]
    const countData = { water, money, total, average_electric, average_water, average_by_area }
    return TotalUsageList.map(item => {
      return {
        ...item,
        count: countData[item.key].toString()
      }
    })
  }
  render() {
    const { isFetchingEnergy, energyData } = this.props
    const usageData = isFetchingEnergy || _.isEmpty(energyData) ? TotalUsageList : this.getUsageData()
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
            <RadiusBarChart />
            <ul className='elec-usage-list'>
              {
                ElecUsageList.map(item => {
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