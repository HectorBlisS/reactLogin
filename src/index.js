import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui';

const WithRouter = () => (
    <MuiThemeProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
    </MuiThemeProvider>
	);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
