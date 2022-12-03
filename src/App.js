import './App.css'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export default App
