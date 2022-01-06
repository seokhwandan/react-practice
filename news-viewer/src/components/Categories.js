import React from 'react'
import style, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import './Categories.scss'

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비지니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
]

const Categories = () => {
  return (
    <div className="Categories">
      {categories.map(c => (
        <NavLink
          className="Category"
          key={c.name}
          to={c.name === 'all' ? '/' : `${c.name}`}
        >
          {c.text}
        </NavLink>
      ))}
    </div>
  )
}

export default Categories
