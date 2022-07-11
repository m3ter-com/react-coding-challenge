import React from 'react';

interface IPostBody {
  text: string;
  summary?: boolean;
}

export const PostBody: React.FC<IPostBody> = ({ text, summary = false }) => {
  const textLines: string[] = text.split('\n');

  if (summary) {
    return <p>{textLines[0]}</p>
  }

  return (
    <>
      {
        textLines.map((line, idx) => <p key={`${idx}_${line}`}>{line}</p>)
      }
    </>
  )
};
