import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

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

  // console.log('formated date:', formatDate)

  return (
    <ul className="fact-card-container">
      {catFactz.map(({ createdAt, text }) => {
        const formatedDate = format(new Date(createdAt), 'MMM-do-y@ h:mmaaa')

        return (
          <li className="fact-card">
            <p className="fact-card__date">{formatedDate}</p>
            <p className="fact-card__text">{text}</p>
          </li>
        )
      })}
    </ul>
  )
}
export default Main
