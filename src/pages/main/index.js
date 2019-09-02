
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { renderRoutes } from '@utils'
import routes from './routes'
import MainHeader from './header'
import './index.less'
import { resetFloor } from '@actions'
import PropTypes from 'prop-types'

class Main extends React.Component {
  static propTypes = {
    resetFloor: PropTypes.func.isRequired
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== '/devices' && nextProps.location.pathname === '/devices') {
      console.log('342342342')
      this.props.resetFloor()
    }
  }
  render() {
    const { authed } = this.props
    if (authed) {
      return (
        <div className='main-container'>
          <MainHeader pathname={this.props.location.pathname} />
          <div className='main-content'>
            {renderRoutes(routes)}
          </div>
        </div>
      )
    }
    return (
      <Redirect to={{ pathname: '/login' }} />
    )
  }
}

export default connect(
  (state) => {
    return {
      authed: state.auth.authed
    }
  },
  dispatch => ({
    resetFloor: () => { dispatch(resetFloor()) }
  })
)(Main)