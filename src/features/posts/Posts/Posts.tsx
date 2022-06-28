import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from 'app/store';
import { PostBody } from 'features/posts/PostBody/PostBody';
import { fetchPostsAsync } from 'features/posts/postsSlice';

export interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.posts.isLoading);
  const posts = useSelector((state: RootState) => state.posts.posts);

  useEffect(() => {
    if (posts.length) return;
    dispatch(fetchPostsAsync());
  });
  

  return isLoading ? (
    <p>'Loading…'</p>
  ) : (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <PostBody summary text={post.body} />
        </li>
      ))}
    </ul>
  );
};
