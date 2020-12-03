import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReview'



export default class LatestMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount () {
        const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

        fetch(URL)
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({
                movies: movieData.results
            })
            console.log(this.state.movies)
        })

    }

    render () {
        return (
            <div>
                <MovieReviews movies={this.state.movies} />
                movies list would go here
            </div>
        )
    }

}


