import axios, { AxiosRequestConfig } from 'axios'
import { Toast } from 'vant'

const baseURL = ''

const service = axios.create({
  baseURL: baseURL, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = ''
    // }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    Toast.clear()
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        // store.dispatch('FedLogOut').then(() => {
        //   location.reload()
        // })
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
