import React from 'react';

import Ratings from "./ratings";

class ListingInfo extends React.Component {

    render() {

    	return (
    		<div  className="listing-info">
    			<h4 className="listing-name">{this.props.name}</h4>
    				<div>
						<span className="listing-venue">{this.props.venue}</span>
						<span className="listing-city"></span>
						<span className="listing-reviews">
							<Ratings reviews="10" />
    					</span>
    				</div> 
    		</div>
    	);
    }
}
export default ListingInfo;