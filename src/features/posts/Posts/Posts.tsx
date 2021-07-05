import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostBody } from '../PostBody/PostBody';
import { fetchPostData, postSelector } from '../postsSlice';

export interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  const isLoading = false;
  
  useEffect(() => {
    dispatch(fetchPostData());
  })

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
