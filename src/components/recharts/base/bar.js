import React from 'react'
import echarts from 'echarts'
import PropTypes from 'prop-types'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/bar'

export default class BarChart extends React.Component {
  static propTypes = {
    option: PropTypes.object.isRequired
  }

  init() {
    const { option } = this.props
    this.chart = echarts.init(this.chartRef)
    this.chart.setOption(option)
    window.addEventListener('resize', this.handleResize.bind(this), false)
  }

  handleResize() {
    this.chart.resize()
  }

  componentDidMount() {
    this.init()
  }

  componentDidUpdate() {
    this.chart.setOption(this.props.option)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  render() {
    return (
      <div ref={(node) => this.chartRef = node} />
    )
  }
}