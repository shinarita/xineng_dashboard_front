import React from 'react'
import ReactEcharts from "echarts-for-react"
import { getRadiusBarChartOption } from './options'
import PropTypes from 'prop-types'

export default class RadiusBarChart extends React.Component {
  static propTypes = {
    values: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
  }
  render() {
    const { values, total } = this.props
    const option = getRadiusBarChartOption(values, total)
    return (
      <ReactEcharts
        option={option}
        style={{ height: '116px', width: '116px' }}
      />
    )
  }
}