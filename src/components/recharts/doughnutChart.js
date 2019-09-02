import React from 'react'
import ReactEcharts from "echarts-for-react"
import { getPieChartOption } from './options'
import PropTypes from 'prop-types'
import { toAdaptivePx } from '@utils'

export default class DoughnutChart extends React.Component {
  static propTypes = {
    values: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      width: toAdaptivePx(120)
    }
    this.calcStyle = this.calcStyle.bind(this)
  }

  calcStyle() {
    this.setState({
      width: toAdaptivePx(120)
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.calcStyle)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcStyle)
  }

  render() {
    const { values } = this.props
    const { width } = this.state
    const option = getPieChartOption(values)
    return (
      <ReactEcharts
        option={option}
        style={{
          width: width,
          height: width
        }}
      />
    )
  }
}