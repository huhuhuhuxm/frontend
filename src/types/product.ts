// product商品系统相关类型
// 商品分类
interface CategoryTreeList {
  catId: number; // 类别 ID
  name: string; // 名称
  parentCid: number; // 父类别 ID
  catLevel: number; // 类别等级
  showStatus: number; // 是否显示状态
  sort: number; // 排序字段
  icon: string; // 图标
  productUnit: string; // 产品单位
  productCount: number; // 产品数量
  createTime: string; // 创建时间
  updateTime: string; // 更新时间
  children?: CategoryTreeList[]; // 子类别数组，递归类型
}

export type { CategoryTreeList };
