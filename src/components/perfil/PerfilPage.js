import React, {Component} from 'react';
import {PerfilDisplay} from './PerfilDisplay';
import firebase from '../../firebase';

const db = firebase.database().ref("react");

class PerfilPage extends Component{

	state = {
		usuario:{
			id:null,
			nombre:null,
			email:null,
			imagen:null
		}
	};

	componentWillMount(){
		let user = localStorage.getItem("user");
		this.checkUser(user);
		user = JSON.parse(user);
		const {usuario} = this.state;
		usuario.id = user.uid;
		this.setState({usuario});
		db.child(usuario.id)
			.once("value")
			.then(s=>{
				if(s.val())
					this.setState({usuario:s.val()});
			})
			.catch(e=>console.log(e));
		
	}

	checkUser = (usuario) => {
		if(!usuario){
			this.props.history.push("/login");
		}
	}

	changePic = (e) => {
		let usuario = this.state.usuario;
		const file = e.target.files[0];
		console.log(file);
		firebase.storage()
			.ref("imagenes")
			.child("profilePic" + usuario.id)
			.put(file)
			.then(s=>{
				alert("subi el archivo", s.downloadURL);
				console.log(s.downloadURL);
				usuario.imagen = s.downloadURL;
				this.setState({usuario});
				this.guardarPerfil(usuario);
				})
			.catch(e=>console.log(e));
	};

	guardarPerfil = (usuario) => {
		db.child(usuario.id).set(usuario);
	};

	render(){
		return(
				<div>
					<PerfilDisplay 
						changePic={this.changePic}
						{...this.state.usuario}
					/>
				</div>
			);
	}
}

export default PerfilPage;