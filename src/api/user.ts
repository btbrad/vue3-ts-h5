import qs from 'qs'
// axios
import request from '@/utils/request'
//user api

// 用户信息
export function getUserInfo(params: any) {
  return request({
    url: '/user/userinfo',
    method: 'get',
    data: qs.stringify(params),
  })
}
