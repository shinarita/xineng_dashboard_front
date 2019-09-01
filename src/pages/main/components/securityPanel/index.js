/* eslint-disable*/
import React from 'react'
import { MiniPanel } from '@components'
import './index.less'
import classnames from 'classnames'
import '../../../../lib/adapter'
import { H5sPlayerWS, H5sPlayerHls, H5sPlayerRTC } from '../../../../lib/h5splayer'
import { H5siOS, H5sPlayerCreate } from '../../../../lib/h5splayerhelper'
const MonitorLength = 4

const config = {
  videoid: 'video1',
  protocol: 'http:', //http: or https:
  host: 'nbiot.huangloong.com:8088', //localhost:8080
  rootpath: '/', // '/'
  token: 'token1',
  hlsver: 'v1', //v1 is for ts, v2 is for fmp4
  session: 'session1'
}
export default class SecurityPanel extends React.Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    this.h5handler = new H5sPlayerWS(config);
    this.h5handler.connect()
  }
  componentWillUnmount(){
    this.h5handler.disconnect()
    this.h5handler=null
  }
  render() {
    return (
      <MiniPanel className='security-panel-container' title='视频监控'>
        <div className='monitor-container'>
          <video className="h5video" id='video1' autoPlay playsInline></video>
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