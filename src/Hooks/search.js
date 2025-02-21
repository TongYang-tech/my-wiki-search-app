/* eslint-disable no-undef */
import axios from 'axios'

const API_KEY = import.meta.env.API_KEY

const search = async (searchTerm) => {
  const RequestConfig = {
    method: 'get',
    url: 'https://api.wikimedia.org/core/v1/wikipedia/en/search/page',
    headers: {
      'Authorization': API_KEY
    },
    params: {
      'q': searchTerm,
      'limit': 50
    }
  }
  try {
    const response = await axios(RequestConfig)
    return response.data?.pages
  } catch (err) {
    console.log(`error message: ${err.message}`)
  }
}

export default search
