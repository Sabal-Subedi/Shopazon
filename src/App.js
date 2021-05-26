import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
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
