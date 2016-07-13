import "./styles/sidebar.scss";

import React from 'react';
import Listings from '../listings/';


class SideBar extends React.Component {

    render() {
    	return (
    		<div  className="sidebar">
    			<Listings spaces={this.props.spaces} />
    		</div>
    	);
    }
}

export default SideBar;
