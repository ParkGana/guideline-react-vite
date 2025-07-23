import api from './api';
import type { ProductType } from '@/types/productType';

/* Product 목록 가져오기 */
export const fetchProductsAPI = async (): Promise<ProductType[]> => {
  try {
    const res = await api.get('/products');
    return res.data;
  } catch (e: any) {
    throw e.response.data;
  }
};

/* Product 상세 정보 가져오기 */
export const fetchProductAPI = async (id: string): Promise<ProductType> => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (e: any) {
    throw e.response.data;
  }
};
