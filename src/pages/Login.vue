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
        <!-- <el-button class="el-button-code" type="primary" plain>
          获取验证码
        </el-button> -->
        <el-image class="el-image-code"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA
        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
        KJXq2Ig8bP7H4TXshXsp7FSAAAAAElFTkSuQmCC" alt="验证码">
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
import { reactive, ref } from 'vue';
import { countdownEmits, ElForm, FormRules } from 'element-plus';

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
