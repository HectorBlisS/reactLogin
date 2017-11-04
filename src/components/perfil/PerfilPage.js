import React, {Component} from 'react';
import {PerfilDisplay} from './PerfilDisplay';

class PerfilPage extends Component{

	state = {
		usuario:{
			nombre:null,
			email:null,
			imagen:null
		}
	};

	componentWillMount(){
		let usuario = localStorage.getItem("user");
		this.checkUser(usuario);
		usuario = JSON.parse(usuario);
		this.setState({usuario});
	}

	checkUser = (usuario) => {
		if(!usuario){
			this.props.history.push("/login");
		}
	}

	render(){
		return(
				<div>
					<PerfilDisplay 
						{...this.state.usuario}
					/>
				</div>
			);
	}
}

export default PerfilPage;