import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'app/store';
import { PostBody } from 'features/posts/PostBody/PostBody';
import { fetchPostsAsync } from 'features/posts/postsSlice';

type PostParams = {
  id: string,
}

export interface PostProps {}

export const Post: React.FC<PostProps> = () => {
  const { id } = useParams<PostParams>();
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const post = posts.find(p => `${p.id}` === id);

  useEffect(() => {
    if (posts.length) return;
    dispatch(fetchPostsAsync());
  });

  return (
    <div>
      <h2>{post?.title}</h2>
      <PostBody text={post?.body} />
    </div>
  );
};
