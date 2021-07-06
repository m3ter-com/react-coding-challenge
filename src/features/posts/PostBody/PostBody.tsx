import React from 'react';

interface IPostBodyProps {
  text: string,
  summary?: boolean,
}

export const PostBody: React.FC<IPostBodyProps> = ({ text, summary = false }) => {
  const textArray = text.split("\n")

  return summary 
  ? 
    <p>
      {textArray[0]}
    </p>
  : 
    <>
      {textArray.map((splitText) => <p>{splitText}</p>)}
    </>
    
};
