// 封装token相关的方法
const TOKEN_KEY = 'token';
// 存入token
function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

// 获取token
function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// 删除token
function delToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export { setToken, getToken, delToken };
