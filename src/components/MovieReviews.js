import React from 'react' 

    const renderReviews = (reviews) => {
        return reviews.map((review, index) => 
                <div className='review' key={index}>
                    <h1>{review.display_title}</h1>
                    <h2>{review.headline}</h2>
                    <h5>{review.link.url}</h5>
                </div>
        )
    }

    const MovieReview = (props) =>
            <div className='review-list'>
                {renderReviews(props.reviews)}
            </div>

export default MovieReview;