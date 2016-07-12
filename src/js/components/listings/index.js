import "./styles/listings.scss";
	
import React from 'react';
import Listing from './listing';

class Listings extends React.Component {

    render() {
    	return (
    		<section  className="listings clearfix">
    			<Listing />
    			<Listing />
    			<Listing />
    			<Listing />
    		</section>
    	);
    }
}
export default Listings;
