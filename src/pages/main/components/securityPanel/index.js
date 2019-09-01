import React from 'react'
import { MiniPanel } from '@components'
import './index.less'
import classnames from 'classnames'
// import './assets/adapter'
// import './assets/h5splayer'
// import './assets/h5splayerhelper'
const MonitorLength = 4

const config = {
  videoid: 'video1',
  protocol: 'rtsp', //http: or https:
  host: '', //localhost:8080
  rootpath: '/', // '/'
  token: 'token1',
  hlsver: 'v1', //v1 is for ts, v2 is for fmp4
  session: 'c1782caf-b670-42d8-ba90-2244d0b0ee83'
}
export default class SecurityPanel extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <MiniPanel className='security-panel-container' title='视频监控'>
        <div className='monitor-container'>
          <video data-v-6f922fe9="" id="hvideo11" autoPlay="" webkit-playsinline=""
            playsInline="" className="h5video"
            poster="http://nbiot.huangloong.com:8088/api/v1/GetImage?token=token1&amp;session=null"
            src="blob:http://nbiot.huangloong.com:8088/3ffbe61f-e8a5-4823-9626-612789047dcd"></video>
          {/* <video
            id="hvideo11" autoPlay
            playsInline name="h5video"
            poster={require('../../../../images/main/monitor.png')}
            src="blob:http://nbiot.huangloong.com:8088/1cd665ea-b4c9-443b-961c-6f7417c87a1f">
          </video> */}
          {/* <img className='monitor-img' src={require('../../../../images/main/monitor.png')} /> */}
        </div>
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
      </MiniPanel>
    )
  }
}