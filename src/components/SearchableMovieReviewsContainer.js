import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(reviewData => {
                this.setState({
                    reviews: reviewData.results
                })
            })
    }


    render(){
        return <div>
            <MovieReviews reviews={this.state.reviews}/>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}/>
                <button type="submit">Search Reviews</button>
            </form>
        </div>
    }

}

export default SearchableMovieReviewsContainer