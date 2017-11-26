import React from 'react';
import {LinearProgress} from 'material-ui';

const pic = "https://instagram.fmex5-1.fna.fbcdn.net/t51.2885-19/10643826_667719856708100_484502054_a.jpg";

let elInput;

function experimento(){
	console.log(elInput);
	elInput.click();
}

export const PerfilDisplay = ({completed, changePic, nombre, imagen, email}) => (
		<div>
			<div className="user-info">
				{completed === 100 ?
					<img onClick={experimento} src={imagen ? imagen:pic} alt="profile" />
					:
					<div>
						<LinearProgress
						  style={{maxWidth:200}}
				          mode="determinate"
				          value={completed}
				          thickness={7}
				        /> {Math.round(completed*100)/100} %
					</div>
				}
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
