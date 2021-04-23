import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
//import UserDetails from './components/users/UserDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route> 
          {/*<Route path='/user/:user_id' component={UserDetails}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
