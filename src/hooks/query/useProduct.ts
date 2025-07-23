import { fetchProductAPI } from '@/api/Product';
import { useQuery } from '@tanstack/react-query';

export const useProduct = (id: string) => {
  /* Product 상세 정보 가져오기 */
  const fetchProductQuery = useQuery({
    queryKey: ['product'],
    queryFn: () => fetchProductAPI(id)
  });

  return { fetchProductQuery };
};
