import React from 'react';

interface PostBodyProps {
  summary?: boolean;
  text: string;
  id?: number;
}

// TODO: Create a type for the props.
export const PostBody: React.FC<PostBodyProps> = ({ text, summary = false, id }) => {
  // TODO: Split the text into paragraphs (<p> tags) around new lines (`\n`) rather than using a <pre>
  // TODO: If summary is true, only output the first paragraph.
  const split = text.split(/\r?\n/);
  return (
    <div>
      {summary ? <p>{split[0]}</p> : split.map(item => <p key={`${id}+${item}`} style={{ whiteSpace: "pre-line" }}>{item}</p>)}
    </div>
  )
};
