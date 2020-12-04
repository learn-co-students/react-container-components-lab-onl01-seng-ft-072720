import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'




export default class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
        const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`;

        fetch(URL)
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({
                reviews: movieData.results
            })
        })
    }

    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        }, () => console.log(this.state.searchTerm))
        
    }


    render () {
        return (
            <div className="serchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">
                        Search Movie Reviews
                    </label>
                    <input 
                        id="search-input"
                        type="text"
                        style={{width: 300}}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
                <h2>Search results:</h2>
                {<MovieReviews reviews={this.state.reviews} />}
            </div>
        )
    }

}



