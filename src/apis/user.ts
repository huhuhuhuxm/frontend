// 用户模块相关所有请求
import { UserRegisterInfo } from '@/types/user';
import { request } from '@/utils';

// 用户登录
export function userLogin(fromData:any) {
  console.log('用户登录'+ JSON.stringify(fromData));
  return request({
    url: '/user-api/user/v1/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: fromData
  })
}

// 用户注册
export function userRegister(fromData: UserRegisterInfo) {
  return request({
    url: '/user-api/user/v1/register',
    method: 'post',
    data: fromData
  })
}

// 生成验证码
export function generateCaptcha(){
  return request({
    url: '/user-api/user/v1/generateCaptcha',
    method: 'get'
  })
}