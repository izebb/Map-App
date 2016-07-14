import "./styles/map.scss";

import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
class MapSection extends React.Component {
	handleClick(id){
		
	}
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
	    							ref={(map) => (this._googleMapComponent = map) }
	            					defaultZoom={12}
	            					defaultCenter={{ lat: this.props.data.rows[0].coordinate[0], lng: this.props.data.rows[0].coordinate[1] }}
	          					>
	          					 {
	          					 	this.props.data.rows.map((space, idx)=>{
	          					 			{
	          					 				 return space.points.map( (point,idx) =>{
			          					 			return <Marker  key={idx} position ={{
													        lat:  point.latitude,
													        lng: point.longitude,
													        key: point.name
				          					 		}} 
				          					 		 	onClick={this.props.onSelectSpace.bind(this, space.id )}
	          					 						/>

			          					 		})

	          					 			}
		          					 		
	          					 		

	          					 	})

	          					 }
	         				</GoogleMap>
         				}
    				/>
    			</div>
    		</section>
    	);
    }
}
export default MapSection;
