import React from 'react';
import { PostBody } from 'features/posts/PostBody/PostBody';
import { useSelector } from 'react-redux';
import { postSelector } from '../postsSlice';
import { useParams } from 'react-router-dom';

export interface PostProps {}

export const Post: React.FC<PostProps> = () => {
  const posts = useSelector(postSelector);
  const { id } = useParams<{id: string}>();
  const post = posts.find((post) => {
    return post.id.toString() === id
  })

  return (
    <div>
      <h2>{post?.title}</h2>
      <PostBody text={post?.body} />
    </div>
  );
};
