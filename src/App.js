import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './context/BasketContext';

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user >>>",authUser);

      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    
  }, []);


  return (
    
    <div className="app">
      <Router>
        
        <Switch>
          <Route path="/login"> 
            <Login />
          </Route>
          <Route path="/Checkout"> 
            <NavBar />
            <Checkout />
          </Route>
          <Route path="/"> 
            <NavBar />
            <Home />
          </Route>
        </Switch> 
      </Router> 

    
    
    </div>
  );
}

export default App;
