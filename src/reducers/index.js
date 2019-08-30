import * as reducers from './base'
import auth from './auth'
import floor from './floor'
import device from './device'

module.exports = {
  auth,
  floor,
  device,
  ...reducers
}