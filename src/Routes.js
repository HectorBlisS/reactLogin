import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import PerfilPage from './components/perfil/PerfilPage';
import ProductListContainer from './components/products/productList/ProductListContainer';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage}/>
		<Route path="/login" component={LoginPage} />
		<Route path="/perfil" component={PerfilPage} />
		<Route path="/productos" component={ProductListContainer} />
		<Route render={()=><h2>Error 404</h2>} />
	</Switch>
	);

export default Routes;