import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Cardmap from './components/Cardmap';
import Statefulcomponent from './components/Statefulcomponent';
import Eventhandlers from './components/Eventhandlers';
import Reacthooks from './components/Reacthooks';
import Statelessbutton from './components/Statelessbutton';
import Httpfetch from './components/Httpfetch';
import Httpaxios from './components/Httpaxios';
import Httpasyncawait from './components/Httpasyncawait';
import Register from './components/Register';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Auithorizer from './components/Auithorizer';
import Phone from './components/Phone';
const App = () => {
  return (
    <BrowserRouter>
      <Navibar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={
          <Auithorizer>
            <Httpasyncawait/>
          </Auithorizer>
        
        }/>
        <Route path='/experts' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* create route with params */}
        <Route path='/phone/:id' element={<Phone/>}/>
        {/* for other pages 404 */}
        <Route path='*' element={<h1 style={{textAlign:"center"}}>Error 404 - Page Not Found!</h1>}/>
      </Routes>
      
    </BrowserRouter>
    
  );
};
export default App;