import React from 'react';

const ItemBox = ({ item }) => {
  return (
  <div className="card-container">
     <div className="news-card">
        <button className="btn-save"><i className="fa-regular fa-bookmark"></i></button>
        <img className="news-image" src={item.imageUrl} alt={item.title} />
        <div className="content">
           <div className="news-category">
              <div className="category-text">{item.category} </div>
              <div className="published-text">{item.published}</div>
           </div>
           <div className="news-title">
              <h5>{item.title}</h5>
              <hr />
           </div>
           <div className="author-box">
              <img src={item.author.profileImageUrl} alt="Profile-pic" />
              <h6>{item.author.firstName} {item.author.lastName}</h6>
           </div>
           <div>
           </div>
        </div>
     </div>
  </div>
  );
  };

export default ItemBox;