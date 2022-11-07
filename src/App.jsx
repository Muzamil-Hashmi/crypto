import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Base from './component/layout/Base';
import Home from './pages/Home';
import Lion from './component/element/Lion';


function App() {
  return (
   
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route path='/' index element ={ <Home/>} />
    <Route path='/lion' element ={ <Lion/>} />

   </Routes>
   
   </Base>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
