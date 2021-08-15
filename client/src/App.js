import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/Landing'
import Home from './components/Home'
import CreateActivity from './components/CreateActivity'
import Details from './components/Details'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route
            path='/countries/:id'
            render={({ match }) => <Details country={match.params.id} />}
          ></Route>
          <Route path='/countries' component={Home}></Route>
          <Route path='/activity' component={CreateActivity}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
