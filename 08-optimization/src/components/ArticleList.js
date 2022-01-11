import React, { useState, useEffect } from 'react';

const ArticleList = ({ articleType, getArticle }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getArticle());
    console.log(`Article ${articleType} List renders...`);
  }, [getArticle, articleType]);

  return articles.map((item) => (
    <li key={Math.random(item.id)}>{item.data}</li>
  ));
};

export default ArticleList;
