/* eslint-disable react/prop-types */
const Article = ({ article }) => {
  return (
    <article className="articleRowContainer">
      <div>
        <h3>{article.title}</h3>
        {article?.description}
      </div>
    </article>
  )
}

export default Article
