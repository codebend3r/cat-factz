import { useEffect, useState } from 'react'
import axios from 'axios'

import './Main.scss'

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
    axios.get('https://cat-fact.herokuapp.com/facts').then(({ data }) => {
      setCatFactz(data)
    })
  }, [])

  return (
    <ul className="fact-card-container">
      {catFactz.map(({ createdAt, text }) => {
        return (
          <li className="fact-card">
            <p className="fact-card__date">{createdAt}</p>
            <p className="fact-card__text">{text}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Main
