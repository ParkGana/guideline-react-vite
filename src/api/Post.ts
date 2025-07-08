import type { PostInfiniteQueryType } from '../types/postType';
import api from './api';

/* Post 목록 가져오기 */
export const fetchPostsAPI = async ({ pageParam = 1 }): Promise<PostInfiniteQueryType> => {
  const res = await api.get(`/posts?_page=${pageParam}&_per_page=10`);
  return {
    data: res.data.data,
    nextPage: res.data.next
  };
};
