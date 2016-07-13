import React from 'react';

import Ratings from "./ratings";

class ListingInfo extends React.Component {

    render() {
    	return (
    		<div  className="listing-info">
    			<h4 className="listing-name">{this.props.name}</h4>
    				<div>
						<div>
                            <span className="listing-city">{this.props.address}</span>
    						<span className="listing-reviews">
    							<Ratings reviews={this.props.reviews} />
        					</span>
                        </div>
                        <div>
                            <span className="listing-venue">{this.props.venue}</span>
                        </div>

    				</div> 
    		</div>
    	);
    }
}
export default ListingInfo;