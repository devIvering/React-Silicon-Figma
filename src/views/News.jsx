import React, { useEffect, useState } from 'react'
import Card from './sections/News-page/Card'
import NewsFooter from './sections/News-page/NewsFooter'



const News = () => {
 const url = 'https://kyhnet23-assignment.azurewebsites.net/api/news'
 const [news, setNews] = useState([])


 useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setNews(data)
    }
 }, [])

  return (
    <>
      <Card title="Our News" news={news} />
      <NewsFooter />
    </>
  )
}

export default News