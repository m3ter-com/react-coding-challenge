import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/store';
import { PostBody } from 'features/posts/PostBody/PostBody';
import { getPosts, selectAllPosts } from 'features/posts/postsSlice';

export interface PostsProps {}

export const Posts: React.FC<PostsProps> = (): JSX.Element => {
  const { posts, isLoading, error } = useAppSelector(selectAllPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to fetch posts</p>;
  }

  return (
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
