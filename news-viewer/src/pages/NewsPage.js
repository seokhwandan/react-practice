import React from 'react'
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'
import { useParams } from 'react-router-dom'

const NewsPage = () => {
  const { category } = useParams()
  if (!category) {
    return (
      <div className="NewsPage">
        <Categories />
        <NewsList category={'all'} />
      </div>
    )
  }
  return (
    <div className="NewsPage">
      <Categories />
      <NewsList category={category} />
    </div>
  )
}
export default NewsPage
