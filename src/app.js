import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import *  as ROUTES from './constants/routes'
import { 
        Browse, 
        Signin,
        Signup,
        Home 
      } 
      from './pages'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = { ROUTES.HOME }>
          <Home />
        </Route>
        <Route exact path = { ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route exact path = { ROUTES.SIGN_UP }>
          <Signup />
        </Route>
        <Route exact path = { ROUTES.BROWSE }>
          <Browse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App