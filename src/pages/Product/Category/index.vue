<script setup lang="ts">
import { getCategoryTreeList } from '@/apis/product/cagegory';
import { CategoryTreeList } from '@/types/product';
import { computed, onMounted, reactive, ref } from 'vue';
import type { ComponentSize } from 'element-plus';

const treeProps = reactive({
  checkStrictly: false,
});

// 表格数据
const tableData = reactive<Array<CategoryTreeList>>([]);

// 分页相关配置
const total = ref(tableData.length); // 总数据条数（模拟
console.log(tableData.length);
console.log(tableData);
const pageSize = ref(10); // 每页条数
const currentPage = ref(1); // 当前页码

// 分页外观大小 default | small | large
const size: ComponentSize = 'default';

//分页是否显示
const disabled = ref(false);

// 计算当前页的数据
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  console.log(start, end);
  return tableData.slice(start, end);
});

// 获取商品分类树形列表
function getTreeList() {
  getCategoryTreeList()
    .then((res) => {
      tableData.splice(0, tableData.length, ...res.data.data);
      console.log(tableData.length);
      total.value = tableData.length;
    })
    .catch((error) => {
      console.log(error);
    });
}
// 挂载完毕
onMounted(() => {
  // 获取商品分类树形列表
  getTreeList();
});
</script>

<template>
  <div class="table-all">
    <!-- 表格 -->
    <el-radio-group v-model="treeProps.checkStrictly">
      <el-radio-button :value="true" label="单选" />
      <el-radio-button :value="false" label="全选" />
    </el-radio-group>
    <el-table
      class="table-box"
      :data="paginatedData"
      :tree-props="treeProps"
      row-key="catId"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="catId" label="分类id" />
      <el-table-column prop="name" label="分类名称" />
      <el-table-column prop="icon" label="图标" />
      <el-table-column prop="catLevel" label="层级" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateTime" label="更新时间" />
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="pagination"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 50, 100]"
      :size="size"
      :disabled="disabled"
      background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    />
  </div>
  <div class="pagination"></div>
</template>

<style scoped lang="scss">
// 导入外部css样式
@use './index.scss';
</style>
