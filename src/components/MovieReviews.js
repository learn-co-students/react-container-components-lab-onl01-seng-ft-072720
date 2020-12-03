import React from 'react'
import MovieReview from './MovieReview'


const MovieReviews = props => {

    // debugger
    return (
        <div>
            welcome to movie reviews component
            {props.movies.map(movie => {
                return <MovieReview movieData={movie}/>
            })}
        </div>
        // debugger;
        
    )
}

export default MovieReviews
