import React from 'react';

const pic = "https://instagram.fmex5-1.fna.fbcdn.net/t51.2885-19/10643826_667719856708100_484502054_a.jpg";

let elInput;

function experimento(){
	console.log(elInput);
	elInput.click();
}

export const PerfilDisplay = ({changePic, nombre, imagen, email}) => (
		<div>
			<div className="user-info">
				<img onClick={experimento} src={imagen ? imagen:pic} alt="profile" />
				<input accept="image/*" onChange={changePic} hidden ref={input=>elInput=input} type="file"/>	
				<div>
					<div style={{display:"flex", alignItems:"center"}}>
						<h2>{nombre}</h2>
						<button style={styles.boton}>Seguir</button>	
					</div>
					<br/>
					<span>27 publicaciones</span>
					<span>500 seguidores</span>
					<span>126 seguidos</span>
					<p>Mini bio <a>{email}</a> </p>
				</div>	
			</div>

			<div className="user-photos">

			</div>
		</div>
	);

const styles = {
	boton:{
		marginLeft:"20px"
	}
}
