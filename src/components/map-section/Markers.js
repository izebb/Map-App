import "./styles/map.scss";

import React from 'react';
import {Marker } from "react-google-maps";
class MapSection extends React.Component {

    render() {
    	return (
    		<section  className="map">
    			<div>
    				<GoogleMapLoader
    					containerElement={
					          <div
					           className="map-container"
					          />
					    }

    					googleMapElement = {
	    						<GoogleMap 
	    							ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
	            					defaultZoom={10}
	            					defaultCenter={{ lat: 53.6756, lng: 7.227141 }}
	          					>
	         				</GoogleMap>
         				}
    				/>
    			</div>
    		</section>
    	);
    }
}
export default MapSection;
