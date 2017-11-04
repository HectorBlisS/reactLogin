import React, {Component} from 'react';
import {HomeDisplay} from './HomeDisplay';

class HomePage extends Component{

	componentWillMount(){
		const user = localStorage.getItem("user");
		if(!user){
			this.props.history.push("/login");
		}
	}

	signOut = () => {
		localStorage.removeItem("user");
		this.props.history.push("/login");
	};

	render(){
		return(
				<div>
					<HomeDisplay 
						signOut={this.signOut}
					/>
				</div>	
			);
	}
}

export default HomePage;