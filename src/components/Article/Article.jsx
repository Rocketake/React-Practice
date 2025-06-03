import React from "react";

const Article = ({ article }) => {
  return (
    <a
      href={article.url ?? article.story_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1>{article.title ?? article.story_title}</h1>
    </a>
  );
};

export default Article;
