import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviews extends Component {

    constructor() {
        super()
        this.state ={
            searchTerm: '',
            reviews: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
        e.target.value = ''
    }

    handleChange = (e) => {
        this.setState(
            {searchTerm: e.target.value}
        )
    }

    render() {
        return (
        <div className='searchable-movie-reviews'>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange}></input>
            <button type='submit'>Search</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>)
    }
}