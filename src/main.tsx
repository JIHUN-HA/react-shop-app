import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import './global.scss'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store = {store}>
    <App />
    </Provider>
)
