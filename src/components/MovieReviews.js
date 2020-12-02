// Code MovieReviews Here

const MovieReviews = props => {
    props.movies.map(movie => {
        return(
            <div>
                <h1>{movie.title}</h1>
                
            </div>
        )
    })


}