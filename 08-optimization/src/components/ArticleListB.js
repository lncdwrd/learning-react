import React, { useState, useEffect } from 'react';

const ArticleListB = ({ articleType, getArticle }) => {
  console.log(`Article ${articleType} List renders...`);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getArticle());
  }, [getArticle]);

  return (
    <div>
      <ul>
        {articles.map((item) => (
          <li key={Math.random(item.id)}>{item.data}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleListB;
