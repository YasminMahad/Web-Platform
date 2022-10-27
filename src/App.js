import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Header from './components/signup/Header';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Header />
     {/* <Signup/> */}
     

     
    </div>
  );
}

export default App;
