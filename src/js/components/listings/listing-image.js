import React from 'react';

class ListingImage extends React.Component {

    render() {
    	let _styles = {
    		backgroundImage: `url(${this.props.src})`,
    		backgroundSize:"cover",
    		height: "270px"
    	};

    	return (
    		<div  className="listing-image" style={_styles}>
    		</div>
    	);
    }
}
export default ListingImage;