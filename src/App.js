import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserDetails from './components/users/UserDetails';
import AllUsers from './components/users/AllUsers';
import UserContextProvider from './components/contexts/UserContext';


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <AllUsers />
            </Route> 
            <Route path="/user/:user_id" component={UserDetails}/>
          </Switch>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
