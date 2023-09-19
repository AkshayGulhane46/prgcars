import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "./Style.scss"
import Home from './components/Home';
import { Route , Routes, Router, BrowserRouter } from 'react-router-dom';
import VehicleDetails from './components/VehicleDetails';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <switch>
      <Header/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route  path='/vehicle/:car_id/' Component={VehicleDetails} />
        </Routes>
    </switch>    
    </BrowserRouter>
    </>
  )
}

export default App;
