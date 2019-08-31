import React from 'react'
import ReactEcharts from "echarts-for-react"
import { getPieChartOption } from './options'
import PropTypes from 'prop-types'

export default class DoughnutChart extends React.Component {
  static propTypes = {
    values: PropTypes.object.isRequired
  }
  render() {
    const { values, total } = this.props
    const option = getPieChartOption(values)
    return (
      <ReactEcharts
        option={option}
        style={{ height: '120px', width: '120px' }}
      />
    )
  }
}