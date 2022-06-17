import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RouteController from './controllers/RouteController'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteController />
  </React.StrictMode>
)
