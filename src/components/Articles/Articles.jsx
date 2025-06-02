import Article from "../Article/Article.jsx";

const Articles = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.objectID}>
            <Article article={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
