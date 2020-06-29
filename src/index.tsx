import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import App from './App'
import { HeroProvider } from './context/HeroContext'
import theme from './theme'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HeroProvider>
          <App />
        </HeroProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
