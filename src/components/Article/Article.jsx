import React from "react";

const Article = ({ article: { title, url } }) => {
  return (
    <div>
      <a href={url}>
        <h1>{title}</h1>
      </a>
    </div>
  );
};

export default Article;
