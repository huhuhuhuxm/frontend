<script setup lang="ts"></script>

<template>
  <div class="common-layout">
    <el-container >
      <el-header class="el-header">
        <router-link to="/">
          <el-image class="logo"
            src="https://element-plus.org/images/element-plus-logo.svg"
            fit="scale-down"
          />
        </router-link>
      </el-header>
      <el-container>
        <el-aside class="el-aside" width="200px">
          
        </el-aside>
        <el-main>
          <div class="content">
            layout .....
            <!-- 显示子路由页面 -->
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
// 导入外部css样式
@use './index.scss';
</style>
