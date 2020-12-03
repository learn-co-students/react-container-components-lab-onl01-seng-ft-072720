import React from 'react'
import MovieReview from './MovieReview'


const MovieReviews = props => {

    return (
        <ul className="review-list">
            welcome to movie reviews component
            {props.reviews.map((review, index) => {
                return <li key={index}>
                    <MovieReview reviewData={review}/>
                    </li>
            })}
        </ul>
        
    )
}

export default MovieReviews
