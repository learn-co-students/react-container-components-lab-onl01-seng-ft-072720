import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state ={
        reviews: [],
        searchTerm: ""
    }

    handleSearchInputChange = e =>
    this.setState({ searchTerm: e.target.value})

    handleSubmit = e => {
        e.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(resp => this.setState({ reviews: resp.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input"></label>
                    <input 
                    id="search-input"
                    type="text"
                    style={{ width: 300}}
                    onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' &&
                this.state.reviews.length > 0 && <h2>Movie Review Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
