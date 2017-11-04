import React from 'react';

export const PerfilDisplay = ({nombre, imagen, email}) => (
		<div>
			<h2>Bienvenido {nombre}</h2>
			<img src={imagen} alt="foto" />
			<h5>{email}</h5>
		</div>
	);