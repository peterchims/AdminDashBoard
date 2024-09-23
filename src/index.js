import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { ContextProvider } from './contexts/ContentProvider';

import App from './App'

ReactDOM.render (
<ContextProvider><App /></ContextProvider>
,document.getElementById('root'));