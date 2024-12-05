<template>
  <el-card class="login-card">
    <div class="login-header">
      <h1>WELCOME</h1>
      <p>
        还没有账户吗?<router-link class="user-register" to="/register"
          >在此注册</router-link
        >
      </p>
    </div>
    <el-divider>OR</el-divider>
    <el-form
      :model="userLoginInfo"
      :rules="rules"
      ref="loginForm"
      label-width="0px"
    >
      <!-- 账号 -->
      <el-form-item prop="account">
        <el-input
          class="el-input-id"
          v-model="userLoginInfo.account"
          placeholder="账号"
          clearable
        >
          <template #prefix>
            <el-icon><UserFilled /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input
          v-model="userLoginInfo.password"
          placeholder="密码"
          show-password
        >
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="captcha">
        <el-input
          class="el-input-code"
          v-model="userLoginInfo.captcha"
          placeholder="验证码"
          clearable
        >
          <template #prefix>
            <el-icon><Key /></el-icon>
          </template>
        </el-input>
        <!-- 图形验证码 -->
        <el-image
          class="el-image-code"
          @click="getCaptcha"
          :src="captcha.captchaBase64"
          alt="验证码"
        >
        </el-image>
      </el-form-item>

      <el-form-item>
        <el-checkbox class="auto-login" v-model="isAutoLogin.autoLogin"
          >自动登录</el-checkbox
        >
        <RouterLink class="forgot-password" to="#">忘记密码?</RouterLink>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-button"
          type="primary"
          :loading="loading"
          @click="onSubmit"
        >
          登入
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, toRaw } from 'vue';
import { ElForm, FormRules } from 'element-plus';
import { generateCaptcha, userLogin } from '@/apis/user';
import { UserLoginInfo } from '@/types/user';
import router from '@/router';
import { setToken } from '@/utils/token';

// 登录用户表单信息
const userLoginInfo = reactive<UserLoginInfo>({
  // 账号
  account: '',
  // 密码
  password: '',
  // 验证码
  captcha: '',
  // 验证码key
  key: '',
});

// 是否自动登录 默认值为false
const isAutoLogin = reactive({
  autoLogin: 'false',
});

// 表单规则校验
const rules: FormRules = {
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
};

const loginForm = ref<InstanceType<typeof ElForm>>();
const loading = ref(false);

// 验证码
const captcha = reactive({
  captchaBase64: '',
});

// 提交表单
function onSubmit() {
  // 刷新验证码
  getCaptcha();
  // 清空表单
  loginForm.value?.resetFields();
  // 用户登录
  userLogin(userLoginInfo)
    .then((res) => {
      if (res.data.code === 200) {
        console.log('登录成功:', res);
        // 登录成功后保存token到本地
        setToken(res.data.data.token);
        // 登录成功后跳转到首页
        router.push('/');
        // 提交成功表单后重置表单
        loginForm.value?.resetFields();
      } else if (res.data.code === 218) {
        // 验证码错误
        console.log('验证码错误:', res.data.message);
      } else if (res.data.code === 210) {
        console.log('账号未注册:', res.data.message);
      } else if (res.data.code === 215) {
        console.log('密码错误:', res.data.message);
      } else if (res.data.code === 2012) {
        console.log('服务异常:', res.data.message);
      }
    })
    .catch((error) => {
      console.log('登录失败:'); // 请求失败，打印错误信息
    });
}

// 获取验证码
async function getCaptcha() {
  const result = (await generateCaptcha()).data.data;
  captcha.captchaBase64 = `data:image/png;base64,${result.captcha}`;
  userLoginInfo.key = result.key;
}

// 挂载完毕
onMounted(() => {
  // 获取验证码
  getCaptcha();
});
</script>

<style scoped lang="scss">
.login-card {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
}

.forgot-password {
  display: block;
  text-align: right;
  margin-left: auto;
  color: #409eff;
  cursor: pointer;
  &:hover {
    color: #74b6fc; /* 鼠标悬停时字体颜色变浅 */
    text-decoration: underline; /* 鼠标悬停时显示下划线 */
  }
}

.el-input-code {
  width: 66%;
}

.el-image-code {
  margin-left: auto;
}

.user-register {
  color: #409eff;
  cursor: pointer;
  &:hover {
    color: #74b6fc; /* 鼠标悬停时字体颜色变浅 */
    text-decoration: underline; /* 鼠标悬停时显示下划线 */
  }
}

.auto-login {
  margin-right: auto;
}

.login-button {
  width: 100%;
}
</style>
