import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

/*
#0078bd
#00a2c7
#00c7a2
#a2c700
#c7a200
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
)
