import "./styles/listing.scss";

import React from 'react';
import ListingImage from './listing-image';
import ListingInfo from './listing-info';

class Listing extends React.Component {

    render() {
        const data = this.props.data;
        const address = data.address.join("-");
        let selectedClass = data.isSelected ? "selected": "unselected";
        const _classes= `listing  ${selectedClass}`;
    	return (
    			<div className={_classes}>
	    			<ListingImage src={data.image_urls[0]} />
	    			<ListingInfo {...data}/>
	    		</div>
    	);
    }
}
export default Listing;
