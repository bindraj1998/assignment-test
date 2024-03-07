import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shope from './components/Shope';
import Navbar from './components/Navbar';
import Productdetails from './components/Productdetails';
import Addtocardpage from './components/Addtocardpage';

function App() {
  
   

  return (
    <div className="App">
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/addtocart" element={<Addtocardpage/>}></Route>
    <Route path="/shope" element={<Shope/>}></Route>
    <Route path="/shope/:id" element={<Productdetails/>}></Route>
    <Route path=":id" element={<Productdetails/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
