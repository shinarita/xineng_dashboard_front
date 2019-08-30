
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { renderRoutes } from '@utils'
import routes from './routes'
import MainHeader from './header'
import './index.less'

class Main extends React.Component {
  render() {
    const { authed } = this.props
    if (authed) {
      return (
        <div className='main-container'>
          <MainHeader pathname={this.props.location.pathname}/>
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
  }
)(Main)