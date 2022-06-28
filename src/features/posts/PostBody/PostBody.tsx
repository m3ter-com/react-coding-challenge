import React from 'react';

export interface PostBodyProps{
  text: string | undefined,
  summary?: boolean
}

export const PostBody: React.FC<PostBodyProps> = ({ text, summary = false }) => {
  if (text) {
    const paragraphs = text.split('\n');

    return (
      <div>
        {
          summary
          ? <p>{ text[0] }</p>
          : paragraphs.map((p, i) => <p key={i}>{p}</p>)
        }
      </div>
    )
  }

  return <></>
};
