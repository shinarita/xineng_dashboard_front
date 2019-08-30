import React from 'react'
import { MiniPanel, SectionTitle } from '@components'
import './index.less'
import classnames from 'classnames'
const MonitorLength = 4

export default class SecurityPanel extends React.Component {
  render() {
    return (
      <MiniPanel className='security-panel-container' title='安防'>
        <SectionTitle title='视频监控' className='section-title' />
        <div className='monitor-container'>
          <img className='monitor-img' src={require('../../../../images/main/monitor.png')} />
          <ul className='monitor-list'>
            {
              Array.from({ length: MonitorLength }).map((v, k) => k + 1).map(item => {
                return (
                  <li key={item} className={classnames('monitor-number', { selected: item === 1 })}>
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </MiniPanel>
    )
  }
}