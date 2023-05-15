import React from 'react';

const Article = ({ title, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

export default Article;
