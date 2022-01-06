import React, { useState, useEffect } from 'react'
import './NewsList.scss'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true)
      try {
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0ac1e9658b0545bc8b7f62268ff2ea0d`
        )
        setArticles(response.data.articles)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [category])

  // 대기 중일 때
  if (loading) {
    return <div className="NewsList">대기 중...</div>
  }
  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null
  }
  // articles 값이 유효할 때
  return (
    <div className="NewsList">
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  )
}

export default NewsList
