import React from 'react'

const MovieReview = props => {
    return (
        <div>
            <h1>
                {props.reviewData.display_title}
            </h1>
        </div>
    )
}

export default MovieReview