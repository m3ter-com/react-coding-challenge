import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { PostBody } from '../PostBody/PostBody';
import { performGetPosts } from '../postsMethods';

export interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  const { posts, isLoading } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(performGetPosts())
  }, [dispatch])

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
