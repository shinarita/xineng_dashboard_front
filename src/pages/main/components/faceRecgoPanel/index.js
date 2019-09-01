import React from 'react'
import { MiniPanel } from '@components'
import classnames from 'classnames'
import './index.less'
import { getFaceReg } from '@actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

const getFormattedTime = (time) => {
  const timeStr = time.split('T')[1]
  return `${timeStr.substr(0, 2)}:${timeStr.substr(2, 2)}`
}
class FaceRecogPanel extends React.Component {
  static propTypes = {
    personList: PropTypes.array.isRequired,
    getFaceReg: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getFaceReg()
    }, 5 * 60 * 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getPersonType(internal) {
    return internal ? '内部人员' : '外部人员'
  }
  renderFirstPerson() {
    const { currentIndex } = this.state
    const { name, time, url, internal, tel, tag } = this.props.personList[currentIndex] || {
      name: '--',
      time: '',
      tel: '--',
      tag: '--'
    }
    return (
      <div className='current-person-show-panel'>
        <p className='person-name-line'>
          <span className='name'>{name}</span>
          <span className='type'>{this.getPersonType(internal)}</span>
        </p>
        <div className='person-visit-panel'>
          <img className='face-img' src={require('../../../../images/main/face.png')} />
          <ul className='person-info-list'>
            <li className='info-item'>
              <span className='label'>电话：</span>
              <span className='value'>{tel}</span>
            </li>
            <li className='info-item'>
              <span className='label'>到访时间：</span>
              <span className='value'>{time ? getFormattedTime(time) : '--'}</span>
            </li>
            <li className='info-item'>
              <span className='label'>身份：</span>
              <span className='value'>{tag}</span>
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
    const { personList } = this.props
    return (
      <div className='person-list-container'>
        <ul className='person-list'>
          {
            personList.map((person, index) => {
              const { name, internal, location, url } = person
              return (
                <li
                  key={name}
                  className={classnames('person-info', { selected: currentIndex === index })}
                  onClick={this.handleSelect.bind(this, index)}
                >
                  <img className='face-img' src={require('../../../../images/main/face.png')} />
                  <span className='name'>{name}</span>
                  <span className='type'>{this.getPersonType(internal)}</span>
                  <span className='room'>{location}</span>
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

export default connect(
  state => {
    if (_.isEmpty(state.faceReg.data) || state.faceReg.isFetching) {
      return {
        personList: []
      }
    }
    return {
      personList: state.faceReg.data
    }
  },
  dispatch => ({
    getFaceReg: () => dispatch(getFaceReg())
  })
)(FaceRecogPanel)