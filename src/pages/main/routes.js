import Home from './home'
import PageNotFound from './page404'
import Device from './device'

const routes = [
  {
    path: '/',
    component: Home,
    key: 'index',
    exact: true
  },
  {
    path: '/home',
    component: Home,
    key: 'home',
    exact: true
  },
  {
    path: '/devices',
    component: Device,
    key: 'devices',
    exact: true
  },
  {
    path: '*',
    component: PageNotFound
  }
]

export default routes