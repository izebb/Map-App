import "./styles/styles.scss";

import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "../header"
import SideBar from "../sidebar"
import MapSection from "../map-section"
import { fetchSpaces, selectedSpace } from "../../actions/"

// App container  component
class App extends Component {
	constructor(props) {
	    super(props)
	}
    componentDidMount() {
    	const { dispatch } = this.props;
        dispatch(fetchSpaces());
        this.onSelectSpace = this.onSelectSpace.bind(this)
    }
    onSelectSpace(id){
    	const { dispatch } = this.props;
    	dispatch(selectedSpace(id));

    }

    render() {
	    const _loader = {
	    	__html: `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
			  <path fill="#999" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(160 25 25)">
			    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
			    </path>
			  </svg>`
			};
		const sideBar =  this.props.spaces.isFetching ===  true ||  this.props.spaces.data === undefined ? 
		        		<div className="loader" dangerouslySetInnerHTML={_loader}>
		        		</div>
		        		: <SideBar spaces={this.props.spaces.data.rows} />;

        return (
        	this.props.spaces.data ?
        		<div  className={this.props.spaces.selection ? "is-selection": ""}>
		            <Header/ >
		        	<section className = "sidebar-layout" >
			        	{ sideBar }
			        </section> 
			       <section className = "map-layout" >
			       		{
			       			this.props.spaces.isFetching ===  false?
							<MapSection data={this.props.spaces.data}   onSelectSpace = {this.onSelectSpace}/>: ""
						}
					</section>
	            </div>
	            : <div></div>
        	
        );
    }
}


const mapStateToProps = (state)=>{
    return Object.assign({}, state);
};



export default connect(mapStateToProps)(App);
