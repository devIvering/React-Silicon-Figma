import React from 'react'
import { Link } from 'react-router-dom'

const ItemBox = ({item}) => {
  return (
    <Link to={`/news/${item.id}`} className="item-box">
        <img src={item.imageUrl} alt="" />
    </Link>
  )
}

export default ItemBox