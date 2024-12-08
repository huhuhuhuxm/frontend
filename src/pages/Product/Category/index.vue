<script setup lang="ts">
import { getCategoryTreeList } from '@/apis/product/cagegory';
import { CategoryTreeList } from '@/types/product';
import { onMounted, reactive } from 'vue';

interface User {
  id: number;
  date: string;
  name: string;
  address: string;
  hasChildren?: boolean;
  children?: User[];
}

const treeProps = reactive({
  checkStrictly: false,
});

// 确定哪些行可以不能选中
const selectable = (row: User) => ![1, 31].includes(row.id);

// console.log(await getCategoryTreeList());
// 测试数据
const tableData = reactive<Array<CategoryTreeList>>([
  {
    catId: 1,
    name: 'Category 1',
    parentCid: 0,
    catLevel: 1,
    showStatus: 1,
    sort: 1,
    icon: 'icon-url',
    productUnit: 'unit',
    productCount: 10,
    createTime: '2024-01-01T00:00:00Z',
    updateTime: '2024-01-02T00:00:00Z',
    children: [
      {
        catId: 2,
        name: 'Subcategory 1',
        parentCid: 1,
        catLevel: 2,
        showStatus: 1,
        sort: 2,
        icon: 'sub-icon-url',
        productUnit: 'sub-unit',
        productCount: 5,
        createTime: '2024-01-01T12:00:00Z',
        updateTime: '2024-01-02T12:00:00Z',
      },
    ],
  },
]);

// 获取商品分类树形列表
function getTreeList() {
  getCategoryTreeList().then((res) => {
    console.log(res.data.data);
    tableData.splice(0, tableData.length, ...res.data.data);
  });
}
// 挂载完毕
onMounted(() => {
  getTreeList();
});


</script>

<template>
  <div>
    <el-radio-group v-model="treeProps.checkStrictly">
      <el-radio-button :value="true" label="true" />
      <el-radio-button :value="false" label="false" />
    </el-radio-group>
    <el-table
      :data="tableData"
      :tree-props="treeProps"
      row-key="catId"
    >
      <el-table-column type="selection" width="55" :selectable="selectable" />
      <el-table-column prop="catId" label="catId" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="icon" label="icon" />
    </el-table>
  </div>
</template>

<style scoped lang="scss">
// 导入外部css样式
@use './index.scss';
</style>
