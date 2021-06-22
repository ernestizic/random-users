import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import UserDetails from './components/users/UserDetails';
import UserContextProvider from './components/contexts/UserContext';


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route> 
            <Route path="/user/:user_id" component={UserDetails}/>
          </Switch>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
