import axios from 'axios'
import { ActionSuffix } from '@constants'
import { queryObjectToParams } from '@utils'

const ApiRoot = '/api/'
const _getFetchOption = (payload) => {
  let { method, data, params, url } = payload
  let fetchOption = {
    method,
    url: `${ApiRoot}${url}`
  }
  if (params) {
    fetchOption = Object.assign({}, fetchOption, {
      url: `${ApiRoot}${url}?${queryObjectToParams(params)}`
    })
  } else if (data) {
    fetchOption = Object.assign({}, fetchOption, {
      data
    })
  }
  return fetchOption
}
function createFetchMiddleware() {
  return ({ dispatch }) => next => (action) => {
    if (!action || !action.payload) {
      return next(action)
    }
    const { REQUEST, SUCCESS, FAILURE } = ActionSuffix
    const { payload, type } = action
    if (Array.isArray(payload)) {
      let fetchOptions = payload.map(item => {
        const { subType } = item
        dispatch({
          type: `${subType}_${REQUEST}`
        })
        return axios(_getFetchOption(item))
      })
      return axios.all(fetchOptions)
        .then((responses) => {
          responses.forEach((res, index) => {
            console.log(res)
            dispatch({
              type: `${payload[index]['subType']}_${SUCCESS}`,
              data: res.data
            })
          })
        })
        .catch(errors => {
          payload.forEach(item => {
            dispatch({
              type: `${item['subType']}_${FAILURE}`,
              error: '请求错误，请检查。'
            })
          })
        })
    } else {
      let fetchOption = _getFetchOption(payload)
      return axios(fetchOption)
        .then(({ data, status, statusText, headers, config, request }) => {
          if (status >= 200 && status < 400) {
            dispatch({
              type: `${type}_${SUCCESS}`,
              data
            })
          } else {
            throw new Error('请求错误，请检查。')
          }
        })
        .catch(error => {
          dispatch({
            type: `${type}_${FAILURE}`,
            error: '请求错误，请检查。'
          })
        })
    }


  }
}
const fetchMiddleware = createFetchMiddleware()
export default fetchMiddleware
