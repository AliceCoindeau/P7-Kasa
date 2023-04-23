import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Appartements from './Pages/Appartements';
import Erreur from './Pages/Erreur';

const App = () => {

    return (
    <BrowserRouter>
      <Routes >
      <Route path='/' element ={<Home />}/>
      <Route path='/about' element ={<About />}/>
      <Route path='/Appartements' element ={<Appartements />}/>
      <Route path='/*' element ={<Erreur />}/>
    </Routes>
       </BrowserRouter>
  );
};

export default App;
