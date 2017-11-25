import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui';
import 'font-awesome/css/font-awesome.css';
import 'toastr/build/toastr.css';

const WithRouter = () => (
    <MuiThemeProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
    </MuiThemeProvider>
	);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
