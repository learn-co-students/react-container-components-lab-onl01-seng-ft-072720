// Code MovieReviews Here
import React from 'react';

const Review = ({
    headline,
    byline,
    summary_short
}) => {
    return (
        <div key={headline}className="review">
        <header><h3>{headline}</h3>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote><i>{summary_short}</i></blockquote>
    </div>
    )
}
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
export default MovieReviews
MovieReviews.defaultProps = {
    reviews: [] 
}