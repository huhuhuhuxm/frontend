// 商品模块->分类相关接口
import { request } from '@/utils';

// 查询出所有商品分类，结果以树形结构返回
export function getCategoryTreeList() {
  return request({
    url: '/product-api/product/v1/category/list/tree',
    method: 'get'
  });
}

// 批量删除分类节点
export function deleteCategoryByIds(categoryIds: number[]) {
  return request({
    url: '/product-api/product/v1/category/deleteCategories',
    method: 'delete',
    data: categoryIds
  });
}