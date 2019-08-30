/**
 * 将请求参数字符串转为对象 query params to object
 */
export const queryParamsToObject = (params = '') => {
  params = params.replace('?', '')
  return params.split('&').reduce((result, str) => {
      const [key, value] = str.split('=')
      return {
          ...result,
          [key]: value
      }
  }, {})
}
/**
* 将请求参对象数转为字符串 query object to params
*/
export const queryObjectToParams = (data = {}) => {
  return Object.keys(data).reduce((arr, k) => {
      arr.push(`&${k}=${data[k]}`)
      return arr
  }, []).join('').replace('&', '?')
}
