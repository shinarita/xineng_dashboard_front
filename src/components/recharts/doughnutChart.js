import React from 'react'
import ReactEcharts from "echarts-for-react"
import { getPieChartOption } from './options'
import PropTypes from 'prop-types'
import { toAdaptivePx } from '@utils'

export default class DoughnutChart extends React.Component {
  static propTypes = {
    values: PropTypes.object.isRequired
  }

  render() {
    const style = {
      width: toAdaptivePx(120),
      height: toAdaptivePx(120)
    }
    const { values, total } = this.props
    const option = getPieChartOption(values)
    return (
      <ReactEcharts
        option={option}
        style={style}
      />
    )
  }
}