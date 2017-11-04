import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';

const users = [
	{
		id:0,
		nombre:"Juanito",
		email:"juanito@hotmail.com",
		password:"juanitoMijito",
		imagen:"https://mediosfera.files.wordpress.com/2009/09/juanito-300x2281.jpg?w=594"
	},
	{
		id:1,
		nombre:"Juanita",
		email:"juanita@hotmail.com",
		password:"juanitaMijita",
		imagen:""
	},
	{
		id:2,
		nombre:"Lupe",
		email:"lupis@hotmail.com",
		password:"soyhombre",
		imagen:""
	},
];

function checkUser(login){
	const user = users.filter(
		u=>u.email === login.email && u.password === login.password
		);
	if(user.length){
		return user[0];
	} else{
		return false
	}
}


class LoginPage extends Component{

	state = {
		mostrar:false,
		login:{
			email:null,
			password:null
		},
		error:null
		
	};

	//ciclos de vida
	componentWillMount(){
		const user = localStorage.getItem("user");
		if(user){
			this.props.history.push("/");
		}
	}

	toggleMostrar = () => {
		// let mostrar = this.state.mostrar;
		// mostrar = !mostrar;
		// this.setState({mostrar});
		this.setState({mostrar:!this.state.mostrar});
	};

	saveInput = (e) => {
		const input = e.target.name;
		const value = e.target.value;
		const login = this.state.login;
		login[input] = value;
		this.setState({login});
		//console.log(login);
	};

	onSubmit = (e) => {
		e.preventDefault();
		let user = checkUser(this.state.login);
		if(user){
			user = JSON.stringify(user);
			localStorage.setItem("user", user);
			this.props.history.push("/perfil")
		}else{
			this.setState({error:"El usuario no coincide"});
		}
		

		//if(user){
		//	localStorage.setItem("user", user);
		//}
	};

	render(){
		return(
				<div>
					<LoginDisplay
						mostrar={this.state.mostrar}
						toggleMostrar={this.toggleMostrar}
						saveInput={this.saveInput}
						onSubmit={this.onSubmit}
						error={this.state.error}
					/>
				</div>
			);
	}
}

export default LoginPage;