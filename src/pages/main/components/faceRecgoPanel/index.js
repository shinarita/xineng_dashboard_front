import React from 'react'
import { MiniPanel } from '@components'
import classnames from 'classnames'
import './index.less'

const PersonInfoHeight = 40
// 列表页可以展示的陌生人信息的条数
const ShownNumber = 3

const PersonList = [
  { id: '1', name: 'xxxx1', time: '12:00', room: '503', url: '' },
  { id: '2', name: 'xxxx2', time: '12:00', room: '503', url: '' },
  { id: '3', name: 'xxxx3', time: '12:00', room: '503', url: '' },
  { id: '4', name: 'xxxx4', time: '12:00', room: '503', url: '' },
  { id: '5', name: 'xxxx5', time: '12:00', room: '503', url: '' }
]

export default class FaceRecogPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 1
    }
    this.handleGoDown = this.handleGoDown.bind(this)
    this.handleGoUp = this.handleGoUp.bind(this)
  }
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
  handleGoUp() {
    this.setState(
      prevState => ({
        currentIndex: prevState.currentIndex - 1
      })
    )
  }
  handleGoDown() {
    this.setState(
      prevState => ({
        currentIndex: prevState.currentIndex + 1
      })
    )
  }
  renderPersonList() {
    const { currentIndex } = this.state
    const goUpDisabled = currentIndex === 1
    const goDownDisabled = currentIndex + ShownNumber > PersonList.length
    return (
      <div className='person-list-container'>
        <span className={classnames('icon-previous', { disabled: goUpDisabled })} onClick={goUpDisabled ? null : this.handleGoUp} />
        <span className={classnames('icon-next', { disabled: goDownDisabled })} onClick={goDownDisabled ? null : this.handleGoDown} />
        <ul className='person-list' style={{ top: `-${PersonInfoHeight * (currentIndex - 1)}px` }}>
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