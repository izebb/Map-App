import "./styles/listing.scss";

import React from 'react';
import ListingImage from './listing-image';
import ListingInfo from './listing-info';

class Listing extends React.Component {

    render() {
    	return (
    		<section  className="col-md-6">
    			<div className="listing">
	    			<ListingImage src="https://d2h37djvgj7smg.cloudfront.net/60873f60c4a04def92984cb7416f80c5b26169e4/18997.600x400x16919.jpg" />
	    			<ListingInfo name="Name of location" venue="Herengracht 12 -Space to Meet "/>
	    		</div>
    		</section>
    	);
    }
}
export default Listing;
