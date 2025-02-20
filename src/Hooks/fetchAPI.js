/* eslint-disable no-undef */
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const RequestConfig = {
  method: 'get',
  url: 'https://api.wikimedia.org/core/v1/wikipedia/en/search/page',
  headers: {
    'Authorization': process.env.API_KEY
  },
  params: {
    'q': 'solar system',
    'limit': 1
  }
}

const data = await axios(RequestConfig)

console.log(data.status)
