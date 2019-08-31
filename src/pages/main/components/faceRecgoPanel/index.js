import React from 'react'
import { MiniPanel } from '@components'
import classnames from 'classnames'
import './index.less'

const PersonInfoHeight = 40
// 列表页可以展示的陌生人信息的条数
const ShownNumber = 5

const PersonList = [
  { id: '1', name: 'xxxx1', type: '内部人员', time: '12:00', room: '503', url: '', phone: '123456789', profession: '工程师' },
  { id: '2', name: 'xxxx2', type: '内部人员', time: '12:00', room: '503', url: '', phone: '123456789', profession: '工程师' },
  { id: '3', name: 'xxxx3', type: '内部人员', time: '12:00', room: '503', url: '', phone: '123456789', profession: '工程师' },
  { id: '4', name: 'xxxx4', type: '内部人员', time: '12:00', room: '503', url: '', phone: '123456789', profession: '工程师' },
  { id: '5', name: 'xxxx5', type: '内部人员', time: '12:00', room: '503', url: '', phone: '123456789', profession: '工程师' }
]

export default class FaceRecogPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  renderFirstPerson() {
    const { currentIndex } = this.state
    const { name, time, room, url, type, phone, profession } = PersonList[currentIndex]
    return (
      <div className='current-person-show-panel'>
        <p className='person-name-line'>
          <span className='name'>{name}</span>
          <span className='type'>{type}</span>
        </p>
        <div className='person-visit-panel'>
          <img className='face-img' src={require('../../../../images/main/face.png')} />
          <ul className='person-info-list'>
            <li className='info-item'>
              <span className='label'>电话：</span>
              <span className='value'>{phone}</span>
            </li>
            <li className='info-item'>
              <span className='label'>到访时间：</span>
              <span className='value'>{time}</span>
            </li>
            <li className='info-item'>
              <span className='label'>身份：</span>
              <span className='value'>{profession}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  handleSelect(index) {
    this.setState({
      currentIndex: index
    })
  }
  renderPersonList() {
    const { currentIndex } = this.state
    return (
      <div className='person-list-container'>
        <ul className='person-list'>
          {
            PersonList.map((person, index) => {
              const { id, name, type, room, url } = person
              return (
                <li
                  key={id}
                  className={classnames('person-info', { selected: currentIndex === index })}
                  onClick={this.handleSelect.bind(this, index)}
                >
                  <img className='face-img' src={require('../../../../images/main/face.png')} />
                  <span className='name'>{name}</span>
                  <span className='time'>{type}</span>
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
        <div className='face-rego-content'>
          {this.renderFirstPerson()}
          {this.renderPersonList()}
        </div>
      </MiniPanel>
    )
  }
}