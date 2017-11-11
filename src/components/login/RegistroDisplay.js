import React from 'react';

export const RegistroDisplay = ({mostrar, toggleMostrar, saveRegistro, onSubmit, error, email, password, password2}) => (
		<div>
			<form onSubmit={onSubmit} className="formulario">
			<h2>{error}</h2>
				<label>
					<input 
						name="email"
						onChange={saveRegistro}
						value={email}
						placeholder="Tu correo electronico"
						type="text"
					/>
				</label>

				<label>
					<input 
						name="password"
						value={password}
						onChange={saveRegistro}
						placeholder="Tu contraseña"
						type={mostrar ? "text" : "password" }
					/>
				</label>

				<label>
					<input 
						name="password2"
						value={password2}
						onChange={saveRegistro}
						placeholder="Confirmar contraseña"
						type={mostrar ? "text" : "password" }
					/>
				</label>
				
				<label>
				<input
					onClick={toggleMostrar}
					type="checkbox" 
					value="Mostrar password?"
				/>	
				Mostrar Constraseña
				</label>
				<input 
					type="submit" 
					value="Registrarse"
				/>

			</form>
		</div>
	);