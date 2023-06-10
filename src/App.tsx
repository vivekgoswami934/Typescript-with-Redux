import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addArticle, removeArticle } from './Redux/actionCreator';
import { ArticleState, IArticle } from './constraints/type';
import { Article } from './components/Article';
import { useCallback } from 'react';
import { AddArticle } from './components/AddArticle';

function App() {
  const articles: readonly IArticle[] = useSelector((state: ArticleState) => state.articles);

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>

      <AddArticle saveArticle={saveArticle} />

      {articles?.map((article: IArticle) => (
        <Article key={article.id} article={article} removeArticle={removeArticle} />
      ))}
    </main>
  );
}

export default App;
