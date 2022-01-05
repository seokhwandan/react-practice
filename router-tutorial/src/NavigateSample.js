import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePrompt } from './Blocker'

const HistorySample = () => {
  usePrompt('정말 떠나실 건가요?', true)

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  const goHome = () => {
    navigate('/')
  }
  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  )
}

export default HistorySample
