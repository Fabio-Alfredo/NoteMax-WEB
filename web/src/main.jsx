import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteContextProvider from './contexts/NoteContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteContextProvider> 
      <App />
    </NoteContextProvider>
  </React.StrictMode>
)
