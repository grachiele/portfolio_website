import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(<MuiThemeProvider><Router><App {...this.props} /></Router></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
