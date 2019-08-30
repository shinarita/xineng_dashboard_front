import React from 'react'
import './index.less'
import _ from 'lodash'
import classnames from 'classnames'

const Years = [2019, 2020, 2021]
const Months = Array.from({ length: 12 }).map((v, k) => k)
const getAllDisplayNumbers = () => {
  let allNumbers = []
  const currentYear = parseInt(new Date().getFullYear())
  const currentMonth = parseInt(new Date().getMonth())
  Years.forEach(year => {
    Months.forEach(month => {
      const active = year === currentYear && month === currentMonth
      if (month === 0) {
        allNumbers.push({
          number: year,
          active,
          isYear: true
        })
      } else {
        allNumbers.push({
          number: month + 1,
          active,
          isYear: false
        })
      }
    })
  })
  return allNumbers
}

class Timeline extends React.Component {
  renderBody() {
    const allNumbers = getAllDisplayNumbers()
    return allNumbers.map((item, index) => {
      const { number, active, isYear } = item
      const className = classnames('time-box', { active, isYear })
      return (
        <span key={`${number}${index}`} className={className}>
          {number}
        </span>
      )
    })
  }
  render() {
    return (
      <div className='timeline-bar'>
        {this.renderBody()}
      </div>
    )
  }
}

export default Timeline
