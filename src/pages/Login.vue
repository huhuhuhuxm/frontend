<template>
  <el-card class="login-card">
    <div class="login-header">
      <h1>WELCOME</h1>
      <p>
        还没有账户吗?<router-link class="user-register" to="/register">在此注册</router-link>
      </p>
    </div>
    <el-divider>OR</el-divider>
    <el-form :model="form" :rules="rules" ref="loginForm" label-width="0px">
      <!-- 账号 -->
      <el-form-item prop="account">
        <el-input
          class="el-input-id"
          v-model="form.account"
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
        <el-input v-model="form.password" placeholder="密码" show-password>
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="code">
        <el-input
          class="el-input-code"
          v-model="form.code"
          placeholder="验证码"
          clearable
        >
          <template #prefix>
            <el-icon><Key /></el-icon>
          </template>
        </el-input>
        <!-- 图形验证码 -->
        <!-- TODO 先用假数据，后续替换 -->
        <el-image class="el-image-code" @click="getCaptcha" :src="captcha.captcha" alt="验证码">
        </el-image>
      </el-form-item>

      <el-form-item>
        <el-checkbox class="auto-login" v-model="form.autoLogin"
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
import { onMounted, reactive, ref } from 'vue';
import { countdownEmits, ElForm, FormRules } from 'element-plus';
import { generateCaptcha, userLogin, userRegister } from '@/apis/user';
import { CaptchaInfo } from '@/types/user';
interface FormData {
  account: string;
  password: string;
  code: string;
  autoLogin: boolean;
}

const form = reactive<FormData>({
  account: '',
  password: '',
  code: '',
  autoLogin: false,
});

const rules: FormRules = {
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
};

const loginForm = ref<InstanceType<typeof ElForm>>();
const loading = ref(false);

const captcha = reactive<CaptchaInfo>({
  captcha: '',
  key: '',
})

const onSubmit = () => {
  console.log(loginForm.value);
  loginForm.value?.validate((valid) => {
    if (valid) {
      console.log(form.account);

      loading.value = true;
      // 模拟登录逻辑
      setTimeout(() => {
        alert('登录成功');
        loading.value = false;
      }, 1000);
    } else {
      console.log('表单验证失败');
    }
  });
};

// 获取验证码
async function getCaptcha() {
  const result = (await generateCaptcha()).data.data;
  console.log(result);
  captcha.captcha = `data:image/png;base64,${result.captcha}`;
  captcha.key = result.key;
  console.log(captcha);
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
