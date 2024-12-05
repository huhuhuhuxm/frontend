// 用户模块相关所有请求
import { Result } from '@/types/result';
import { CaptchaInfo, UserLoginInfo, UserRegisterInfo } from '@/types/user';
import { request } from '@/utils';
import exp from 'constants';

// // User登录参数
// interface UserLoginInfo {
//   // 账号
//   username: string;
//   // 密码
//   password: string; 
//   // 验证码
//   captcha: string;
//   // 验证码key
//   key: string;
// }

// 用户登录
export function userLogin(fromData: UserLoginInfo) {
  return request({
    url: '/user-api/user/v1/login',
    method: 'post',
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

// 获取验证码
// export function getCaptcha(): Promise<Result<Captcha>> {
//   return request({
//     url: '/user-api/user/v1/generateCaptcha',
//     method: 'get'
//   }).then(response => ({
//     code: response.data.code,
//     message: response.data.message,
//     data: response.data.data
//   }));
// }