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
		},
		completed:100
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
		const task = firebase.storage().ref("imagenes").child("profilePic" + usuario.id).put(file);
		//console.log(file);

		task.on("state_changed", s=>{
			const completed = (s.bytesTransferred / s.totalBytes) * 100;
			console.log(completed)
			this.setState({completed});
		},e=>console.log(e),()=>{
					//alert("subi el archivo", task.snapshot.downloadURL);
					//console.log(task.snapshot.downloadURL);
					usuario.imagen = task.snapshot.downloadURL;
					this.setState({usuario});
					this.guardarPerfil(usuario);
				});
		
	};

	guardarPerfil = (usuario) => {
		db.child(usuario.id).set(usuario);
	};

	render(){
		return(
				<div>
					<PerfilDisplay 
						completed={this.state.completed}
						changePic={this.changePic}
						{...this.state.usuario}
					/>
				</div>
			);
	}
}

export default PerfilPage;