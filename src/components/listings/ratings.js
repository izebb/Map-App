import "./styles/ratings.scss";

import React, { Component } from 'react';

class Ratings extends Component {

    render() {
    	const MAX_RATE = 5;
    	let rating  = this.props.rating;
    	let ratedNum =  Math.floor(rating/10 * 5);
    	let unRaterateNum = MAX_RATE - ratedNum;
    	let rated = [];
    	let unRated = [];

    	for(var i = 0; i <ratedNum; i++ ){
				rated.push(<label key={i} className="star-rating__ico fa fa-star fa-lg" htmlFor="star-rating-5" title=" out of 5 stars"></label>)

		}
		for(var i = 0; i <unRaterateNum; i++ ){
				unRated.push(<label key={i} className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title=" out of 5 stars"></label>)
		}
    	return (
    		<div>
				
				<span className="star-reviews">{this.props.reviews} </span> {' '}<span>Reviews</span>

				<span className="star-rating">
					<span className="star-rating__wrap">
							{unRated}
							{rated}
					</span>
				</span>
			</div>
    	);
    }
}
export default Ratings;