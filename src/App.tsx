import React from 'react'
import { Hero, ListHero } from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list-hero">
          <ListHero />
        </Route>
        <Route path="/hero/:heroId" component={Hero} />
        <Redirect path="/" to="/list-hero" />
      </Switch>
    </Router>
  )
}

export default App
