import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPostsAPI } from '../../api/Post';

export const usePost = () => {
  /* Post 목록 가져오기 */
  const fetchPostsQuery = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsAPI,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  return { fetchPostsQuery };
};
