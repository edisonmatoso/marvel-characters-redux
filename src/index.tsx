import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/core'
import { HeroProvider } from './context/HeroContext'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HeroProvider>
        <App />
      </HeroProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
