import React from 'react';

interface PostBodyProps {
  text: string;
  summary?: boolean;
}

export const PostBody: React.FC<PostBodyProps> = (props): JSX.Element => {
  const { text, summary = false } = props;

  const splitText = text.split('\n');

  if (splitText.length > 0 && summary) {
    return <p>{splitText[0]}</p>;
  }

  return (
    <>
      {splitText.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </>
  );
};
