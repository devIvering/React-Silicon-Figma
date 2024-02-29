import React from 'react'

const News = () => {
  return (
    <section class="news-section">
    <div class="container">
        <div id="news">
        <div class="news-card">
        <button class="btn-save"><i class="fa-regular fa-bookmark"></i></button>
        <img src="" alt="News-image">${item.imageUrl}</img>
            <div class="content">
                <div class="type-and-date">
                <p class="news-category">${item.published}</p>
                <p>Jan 19 2024</p>
                </div>
                    <h5>${item.title}</h5>
                    <hr></hr>
                        <div class="news-profile">
                            <div>
                                <img src="" alt="Profile-Picture">${item.profileImageUrl}</img>
                            </div>
                                <h6>${item.firstName} ${item.lastName}</h6>
                         </div>
                     </div>
                 </div>
        </div>
    </div>
</section>
  )
}

export default News