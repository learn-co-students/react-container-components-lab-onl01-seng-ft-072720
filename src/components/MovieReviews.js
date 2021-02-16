import React from 'react'

const renderReviews = (reviews) => {
  return reviews.map(({ display_title, headline, link }, index) => 
    <div className='review' key={index}>
      <h1>{display_title}</h1>
      <h2>{headline}</h2>
      <h5>{link.url}</h5>
    </div>
  )
}

const MovieReview = (props) => 
  <div className='review-list'>
    {renderReviews(props.reviews)}
  </div>


export default MovieReview;