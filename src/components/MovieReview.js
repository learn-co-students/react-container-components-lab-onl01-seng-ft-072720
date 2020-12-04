import React from 'react'

const MovieReview = props => {
    return (
        <h1>
            {props.reviewData.display_title}
        </h1>
    )
}

export default MovieReview