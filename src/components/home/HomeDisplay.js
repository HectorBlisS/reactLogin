import React from 'react';

export const HomeDisplay = ({signOut}) => (
		<div>
			<h1>
				BlisS
			</h1>

			<button 
				onClick={signOut}
			 >
				Cerrar Sesión
			</button>	

		</div>
	);