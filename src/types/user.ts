// user模块中的相关类型定义

// User登录参数
interface UserLoginInfo {
  // 账号
  username: string;
  // 密码
  password: string;
  // 验证码
  captcha: string;
  // 验证码key
  key: string;
}

// User登录返回结果
interface userLoginResult {
  // 用户id
  userId: string;
  // 账号
  account: string;
  // token
  token: string;
  // 账号类型
  type: number;
  // 账号状态
  status: number;
}

// 用户注册
interface UserRegisterInfo {
  // 账号
  account: string;
  // 密码
  password: string;
  // 验证码
  captcha: string;
  // 验证码key
  key: string;
  // 用户类型
  type: number;
}

// 返回验证码
interface CaptchaInfo {
  // 验证码
  captcha: string;
  // 验证码key
  key: string;
}

export type { UserLoginInfo, userLoginResult, UserRegisterInfo, CaptchaInfo };
