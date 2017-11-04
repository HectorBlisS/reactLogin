import React from 'react';

export const LoginDisplay = ({mostrar, toggleMostrar, saveInput, onSubmit, error}) => (
		<div>
			<form onSubmit={onSubmit} className="formulario">
			<h2>{error}</h2>
				<label>
					<input 
						name="email"
						onChange={saveInput}
						placeholder="Tu correo electronico"
						type="text"
					/>
				</label>

				<label>
					<input 
						name="password"
						onChange={saveInput}
						placeholder="Tu contraseña"
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
					value="Iniciar Sesión"
				/>

				<p>
					¿Aún no tienes cuenta?
					<a href="#!">
						registrate
					</a>
				</p>
				<p>
					¿Olvidaste tu contraseña?
					<a href="#!">
						Recuperar
					</a>
				</p>
			</form>
		</div>
	);