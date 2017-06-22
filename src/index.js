import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './global.css'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('root'))
registerServiceWorker()
