import { fetchProductsAPI } from '@/api/Product';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  /* Product 목록 가져오기 */
  const fetchProductsQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductsAPI
  });

  return { fetchProductsQuery };
};
