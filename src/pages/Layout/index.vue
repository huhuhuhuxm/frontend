<script setup lang="ts">
import { ref } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';

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
      <el-container>
        <el-menu
          default-active="2"
          class="el-menu-vertical"
          :collapse="isCollapse" 
          @open="handleOpen"
          @close="handleClose"
        >
          <el-button class="isCollapse-button" @click="collapseOrUnfold">
            <el-icon v-if="isCollapse"><DArrowRight /></el-icon>
            <el-icon v-else><DArrowLeft /></el-icon>
          </el-button>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
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
