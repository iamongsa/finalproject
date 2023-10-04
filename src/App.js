import './App.css';
import { Login } from './pages/login';
import { Contact } from './pages/contact';
import { Routes, Route } from 'react-router-dom';
import {Home} from './pages/home';
import {Addform} from './pages/addform';
import {Repair} from './pages/repair';
import {Car} from './pages/car';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addform' element={<Addform/>}/>
        <Route path='/repair' element={<Repair/>}/>
        <Route path='/car' element={<Car/>}/>
      </Routes>
    </div>
  );
}
export default App;
