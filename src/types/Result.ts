// 统一返回类型
export interface Result<T> {
  code: number;
  message: string;
  data: T;
}