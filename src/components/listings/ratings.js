import "./styles/ratings.scss";

import React, { Component } from 'react';

class Ratings extends Component {

    render() {

    	return (
    		<span>
				<span className="star-rating">
					<span className="star-rating__wrap">
						<label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
						<label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
						<label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
						<label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
						<label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
					</span>
				</span>
				<span className="star-reviews">{this.props.reviews} </span> {' '}<span>Reviews</span>
			</span>
    	);
    }
}
export default Ratings;