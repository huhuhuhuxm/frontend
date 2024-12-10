<script setup lang="ts">
import { ref } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';
import { useRoute, useRouter } from 'vue-router';

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 左侧菜单栏折叠或展开
function collapseOrUnfold() {
  isCollapse.value = !isCollapse.value;
}

// 路由激活与跳转
const router = useRouter();

// 菜单点击事件
const handleSelect = (index:string) => {
  router.push(index); // 跳转到指定路径
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <router-link to="/">
          <el-image
            class="logo"
            src="https://element-plus.org/images/element-plus-logo.svg"
            fit="scale-down"
          />
        </router-link>
      </el-header>
      <el-container class="menu-container">
        <el-menu
          default-active="2"
          class="el-menu-vertical"
          :collapse="isCollapse"
          :collapse-transition="false"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-button class="isCollapse-button" @click="collapseOrUnfold">
            <el-icon v-if="isCollapse"><DArrowRight /></el-icon>
            <el-icon v-else><DArrowLeft /></el-icon>
          </el-button>
          <!-- 首页 -->
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <template #title> 首页 </template>
          </el-menu-item>
          <!-- 商品管理 -->
          <el-sub-menu index="/product">
            <template #title>
              <el-icon><ShoppingTrolley /></el-icon>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/product/category">
              <el-icon><Operation /></el-icon>
              <span>分类维护</span>
            </el-menu-item>
          </el-sub-menu>

          
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>

        <!-- </el-aside> -->

        <el-main class="el-main">
          <!-- <div class="content"> -->
            <!-- 显示子路由页面 -->
            <router-view />
          <!-- </div> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
// 导入外部css样式
@use './index.scss';
</style>
