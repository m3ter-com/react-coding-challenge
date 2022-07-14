import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from 'app/store';
import { PostBody } from 'features/posts/PostBody/PostBody';
import { selectPostById } from 'features/posts/postsSlice';

export interface PostProps {}

interface PostParams {
  id: string;
}

export const Post: React.FC<PostProps> = (): JSX.Element => {
  const { id } = useParams<PostParams>();
  const post = useAppSelector((state) => selectPostById(state, id));

  if (!post) {
    return (
      <div>
        <p>{`Post with id: ${id} not found`}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <PostBody text={post.body} />
    </div>
  );
};
