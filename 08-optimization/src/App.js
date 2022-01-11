import React, { useState, useCallback } from 'react';
import ArticleList from './components/ArticleList';
import MenuList from './components/MenuList';

const DUMMY_LIST = [
  {
    id: 1,
    data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

function App() {
  console.log('App renders...');

  const [isArticleAVisible, setArticleAVisibility] = useState(false);
  const [isArticleBVisible, setArticleBVisibility] = useState(false);
  const [isMenuVisible, setIsMenuHidden] = useState(false);

  const menuHandler = () => {
    setIsMenuHidden(!isMenuVisible);
  };

  const articleHandlerA = () => {
    setArticleAVisibility(!isArticleAVisible);
  };

  const getArticleA = useCallback(() => {
    return DUMMY_LIST;
  }, []);

  const articleHandlerB = () => {
    setArticleBVisibility(!isArticleBVisible);
  };

  const getArticleB = () => {
    return DUMMY_LIST;
  };

  return (
    <section>
      <h1>A Menu</h1>
      {isMenuVisible && <MenuList />}
      <button onClick={menuHandler}>
        {isMenuVisible ? 'Hide Menu' : 'Show Menu'}
      </button>

      <h1>Article With Callback</h1>
      {isArticleAVisible && (
        <ArticleList articleType="With Callback" getArticle={getArticleA} />
      )}
      <button onClick={articleHandlerA}>
        {isArticleAVisible ? 'Unsubscribe' : 'Subscribe'}
      </button>

      <h1>Article Without Callback</h1>
      {isArticleBVisible && (
        <ArticleList articleType="Without Callback" getArticle={getArticleB} />
      )}
      <button onClick={articleHandlerB}>
        {isArticleBVisible ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </section>
  );
}

export default App;
