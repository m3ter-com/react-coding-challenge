import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostBody } from '../PostBody/PostBody';
import { PostsType, getPosts } from '../postsSlice';
import { RootState } from '../../../app/store';

export interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return isLoading ? (
    <p>Loading…</p>
  ) : (
    <ul>
      {posts.map((post: PostsType) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <PostBody summary text={post.body} />
        </li>
      ))}
    </ul>
  );
};
