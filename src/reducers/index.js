import * as reducers from './base'
import auth from './auth'
import floor from './floor'
console.log('reducers', reducers)

module.exports = {
  auth,
  floor,
  ...reducers
}