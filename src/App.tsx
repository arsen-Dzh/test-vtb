import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useTypedSelector } from './hooks/useTypedSelector';
import { Login } from './pages/Login/Login';
import { Navigation } from './components/Navigation/Navigation';
import { privateRoutes } from './routes/privateRoutes';

function App() {

  const { auth } = useTypedSelector(state => state.user)
  
  return (
    <>
      <Router>
      {
        auth &&  <Navigation />
      }
        <Switch>
          <Route path='/' component={Login} exact/>
          {
            privateRoutes.map((item, index) => (
              // <Route key={item.path+index} path={item.path} component={item.page} exact/>
              <Route key={item.path+index} exact path={item.path}>
                {auth ? <item.page /> : <Redirect to="/" />}
              </Route>
            ))
          }
        </Switch>
      </Router>
    </>
  )
}

export default App;
