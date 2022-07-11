import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/store';

import { PostBody } from '../PostBody/PostBody';

export interface PostProps {}
interface PostParams {
  id: string;
}

export const Post: React.FC<PostProps> = () => {
  const { id } = useParams<PostParams>();
  const post = useAppSelector((state) => state.posts.posts.find(post => post.id === Number(id)));

  if (!post) {
    return null;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <PostBody text={post.body} />
    </div>
  );
};
