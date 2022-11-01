import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Switch, Route } from  'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from  './components/signup/Signup';
import Login from './components/login/Login';
import Transaction from './components/platform/Transaction';

function App() {

  return (

    <div className="App">
      {/* <Home />
      <Navbar /> */}

      <BrowserRouter> 
      <Navbar />
      
      
      <Switch>
      <Route path ='/home' component={ Home } />   
      <Route path ='/signup' component={ Signup } /> 
      <Route path ='/login' component={ Login } />   
      <Route path='/platform' component={ Transaction} />
      
                                                                                                                                                              
      
      </Switch>
    
      
    </BrowserRouter>   
    </div>
  );
}

export default App;
