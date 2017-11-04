import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import PerfilPage from './components/perfil/PerfilPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage}/>
		<Route path="/login" component={LoginPage} />
		<Route path="/perfil" component={PerfilPage} />
		<Route render={()=><h2>Error 404</h2>} />
	</Switch>
	);

export default Routes;