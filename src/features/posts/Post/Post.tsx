import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { useParams } from 'react-router-dom';

import { PostBody } from '../PostBody/PostBody';

export interface PostProps { }

export const Post: React.FC<PostProps> = () => {
  // TODO: Get the ID from the router params (e.g. /posts/12 => 12) and get the
  // post from the Redux store that matches the ID to replace this test data.
  const { id } = useParams<{ id: string }>();
  const { posts } = useSelector((state: RootState) => state.posts);
  const post = posts.filter(item => item.id === parseInt(id))[0];

  return (
    <div>
      <h2>{post.title}</h2>
      <PostBody text={post.body} id={parseInt(id)} />
    </div>
  );
};
