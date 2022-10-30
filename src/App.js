import './App.css';
// import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
// import Header from './components/signup/Header';
import { BrowserRouter, Switch, Route } from  'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from  './components/signup/Signup';
import Login from './components/login/Login';
import Transaction from './components/platform/Transaction';

function App() {

  return (

   
   
    <div className="App">

      <BrowserRouter> 
      <Navbar />
      <Switch>

      <Route exact path ='/home' component={ Home } />   
      <Route path ='/signup' component={ Signup } /> 
      <Route exact path ='/login' component={ Login } />   
      <Route exact path='/platform' component={ Transaction} />
      
                                                                                                                                                              
      
      </Switch>
    
      
    </BrowserRouter>   
    </div>
  );
}

export default App;
