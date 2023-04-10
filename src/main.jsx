import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './templates/Home'
import { CounterContextProvider } from './contexts/CounterContext'

import './styles/global-styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>
)
