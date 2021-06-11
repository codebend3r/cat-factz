import { useEffect, useState } from 'react'
import axios from 'axios'

import './main.scss'

const FOO = '44245687419d4dd2a3708a567af2b161'

// fetching from API
// using axios
// using fetch

// responsive design
// CSS breakpoints

const Main = () => {
  const [catFactz, setCatFactz] = useState([])

  // useEffect accepts two parameters
  // 1 - a function
  // 2 - array of dependencies
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2021-05-11&sortBy=publishedAt&apiKey=${FOO}`
      )
      .then(({ data }) => {
        setCatFactz(data.articles)
      })
  }, [])

  return (
    <ul className="fact-card-container">
      {catFactz.map(({ author, title, description }) => {
        return (
          <li className="fact-card">
            <p className="fact-card__author">{author}</p>
            <p className="fact-card__title">{title}</p>
            <p className="fact-card__description">{description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Main
