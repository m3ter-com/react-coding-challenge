import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { PostBody } from '../PostBody/PostBody';

export interface PostProps {}
interface PostParams {
  id: string;
}

export const Post: React.FC<PostProps> = () => {
  // TODO: Get the ID from the router params (e.g. /posts/12 => 12) and get the
  // post from the Redux store that matches the ID to replace this test data.
  const { id } = useParams<PostParams>();
  console.log(id);

  const post = useMemo(
    () => ({
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    }),
    []
  );

  return (
    <div>
      <h2>{post.title}</h2>
      <PostBody text={post.body} />
    </div>
  );
};
