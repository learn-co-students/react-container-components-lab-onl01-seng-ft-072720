import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviews extends Component {

    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount = () => {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ')
        .then(resp => resp.json())
        .then(data => {
            this.setState({reviews: data.results})
            console.log(data.results[0].link.url)
        })
    }

    render() {
        return (
        <div className='latest-movie-reviews'>
            <MovieReviews reviews={this.state.reviews} />
        </div>)
    }
}