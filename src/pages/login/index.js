/* eslint no-unused-labels:0  */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import './index.less'
import FormItem from './formItem'
import { Button, MiniPanel } from '@components'
import { loginRequest } from '@actions'

class Login extends React.Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    authed: PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLogin() {
    this.props.loginRequest({
      username: 'admin'
    })
  }
  handleInputChange(key, value) {
    this.setState({
      [`${key}`]: value
    })
  }
  render() {
    const { authed } = this.props
    if (authed) {
      return (
        <Redirect to={{ pathname: '/' }} />
      )
    }
    const { password, username } = this.state
    return (
      <div className='login-container'>
        <header className='logo-header'>
          <img className='deco-left' src={require('../../images/login/deco_left.png')} />
          <div className='deco-center'>
            <p className='website-title'>锡能大厦智能楼宇管理系统</p>
          </div>
          <img className='deco-right' src={require('../../images/login/deco_right.png')} />
        </header>
        <p className='english-title-box'>
          XINENG MANSION BUILDING AUTOMATION SYSTEM
        </p>
        <div className='main-content-container'>
          <MiniPanel className='login-form-container'>
            <FormItem
              value={username}
              id='username'
              label='用户名'
              onChange={this.handleInputChange.bind(this, 'username')}
              type='text'
            />
            <FormItem
              value={password}
              id='password'
              label='密码'
              onChange={this.handleInputChange.bind(this, 'password')}
              type='password'
            />
            <Button
              className='btn-login'
              name='登录'
              onClick={this.handleLogin}
            />
          </MiniPanel>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      authed: state.auth.authed
    }
  },
  (dispatch) => ({
    loginRequest: ({ username }) => { dispatch(loginRequest(username)) }
  }))(Login)
