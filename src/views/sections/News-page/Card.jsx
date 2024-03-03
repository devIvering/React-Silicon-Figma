import React from 'react'
import ItemBox from '../../components/ItemBox'


const Card = ({title, news}) => {
  return (
    <section className="news-section">
    <div className="container">
        <div id="news">
        {title}
        </div>

        {
          news.map(item => (
            <ItemBox item={news} />
          ))
        }
    </div>
</section>
  )
}

export default Card