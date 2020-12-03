import React from 'react'

const MovieReview = props => {
    return (
        <div>
            <h1>
                {props.movieData.display_title}
            </h1>
        </div>
    )
}

export default MovieReview