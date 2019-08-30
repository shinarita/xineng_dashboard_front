import React from 'react'
import { MiniPanel } from '@components'
import './index.less'

const PersonList = [
  { id: '1', name: 'xxxx1', time: '12:00', room: '503', url: '' },
  { id: '2', name: 'xxxx2', time: '12:00', room: '503', url: '' },
  { id: '3', name: 'xxxx3', time: '12:00', room: '503', url: '' },
  { id: '4', name: 'xxxx4', time: '12:00', room: '503', url: '' },
  { id: '5', name: 'xxxx5', time: '12:00', room: '503', url: '' }
]

export default class FaceRecogPanel extends React.Component {
  renderFirstPerson() {
    const { name, time, room, url } = PersonList[0]
    return (
      <div className='current-person-show-panel'>
        <img className='face-img' src={require('../../../../images/main/face.png')} />
        <ul className='person-info-list'>
          <li className='info-item'>
            <span className='label'>姓名：</span>
            <span className='value'>{name}</span>
          </li>
          <li className='info-item'>
            <span className='label'>到访时间：</span>
            <span className='value'>{time}</span>
          </li>
          <li className='info-item'>
            <span className='label'>到访地点：</span>
            <span className='value'>{room}</span>
          </li>
        </ul>
      </div>
    )
  }
  renderPersonList() {
    return (
      <div className='person-list-container'>
        <span className='icon-previous' />
        <span className='icon-next' />
        <ul className='person-list'>
          {
            PersonList.map((person, index) => {
              const { id, name, time, room, url } = person
              return (
                <li key={id} className='person-info'>
                  <img className='face-img' src={require('../../../../images/main/face.png')} />
                  <span className='name'>{name}</span>
                  <span className='time'>{time}</span>
                  <span className='room'>{room}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  render() {
    return (
      <MiniPanel title='人脸识别' className='face-regco-container'>
        {this.renderFirstPerson()}
        {this.renderPersonList()}
      </MiniPanel>
    )
  }
}