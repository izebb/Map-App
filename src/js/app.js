import "../styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import MapSection from "./components/map-section";


ReactDOM.render(
	<div>
		<Header/>
		<section className="sidebar-layout">
			<SideBar/>
		</section>
		<section className="map-layout">
			<MapSection/>
		</section>

	</div>, 
	
	document.getElementById('root')
);


