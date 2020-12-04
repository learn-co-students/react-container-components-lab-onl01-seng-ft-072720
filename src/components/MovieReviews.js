import React from 'react'
import MovieReview from './MovieReview'


const MovieReviews = props => {

    return (
        <ul className="review-list">
            {props.reviews.map((review, index) => {
                return <li key={index} className="review">
                    <MovieReview reviewData={review}/>
                    </li>
            })}
        </ul>
        
    )
}

export default MovieReviews
