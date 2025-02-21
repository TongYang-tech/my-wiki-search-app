import { useState } from 'react'
import search from '../Hooks/search'
import SearchBar from './SearchBar'
import ArticleList from './ArticleList'

const App = () => {
  const [articles, setArticles] = useState([])

  const handleSearch = async (searchTerm) => {
    const response = await search(searchTerm)
    setArticles(response)
  }

  return (
    <>
      <main>
        <SearchBar onSearch={handleSearch} />
      </main>
      <section>
        <ArticleList articles={articles} />
      </section>
    </>
  )
}

export default App
