import "./styles/listing.scss";

import React from 'react';
import ListingImage from './listing-image';
import ListingInfo from './listing-info';

class Listing extends React.Component {

    render() {
        const data = this.props.data;
        const address = data.address.join("-");
    	return (
    			<div className="listing">
	    			<ListingImage src={data.image_urls[0]} />
	    			<ListingInfo name={data.location_name} venue={data.location_city} address={address} reviews={data.review_count}/>
	    		</div>
    	);
    }
}
export default Listing;
