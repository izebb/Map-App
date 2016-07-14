import React from 'react';
import Listing from './listing';

class Listings extends React.Component {

    render() {
        const listings = this.props.spaces && this.props.spaces.map((space) => {
                    return (
                        <section  className="col-md-6" key={space.id}>
                            <Listing  data={space}/>
                        </section>
                    )
                });
    	return (
    		<section  className="listings clearfix">
            {listings}
    		</section>
    	);
    }
}
export default Listings;
