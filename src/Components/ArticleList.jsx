/* eslint-disable react/prop-types */
import Article from './Article'

const ArticleList = ({ articles }) => {
  const renderArticles = articles.map((article) => {
    return <Article key={article.key} article={article} />
  })
  return <div className="articleContainer">{renderArticles}</div>
}

export default ArticleList
