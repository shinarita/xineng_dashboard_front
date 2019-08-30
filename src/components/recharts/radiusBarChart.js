import React from 'react'
import ReactEcharts from "echarts-for-react"
import { RadiusBarChartOption } from './options'

export default class RadiusBarChart extends React.Component {
  render() {
    return (
      <ReactEcharts
        option={RadiusBarChartOption}
        style={{height: '116px', width: '116px'}}
      />
    )
  }
}