/* eslint-disable react/prop-types */
import { useState } from 'react'

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
      <input
        type="search"
        name="searchTerm"
        id="searchTerm"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchBar
