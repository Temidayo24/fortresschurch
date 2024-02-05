import './globals.css';
import './contact.css';
import './about.css';
import Home from './home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Fellowship from './Pages/Fellowship';
import Give from './Pages/Give';
import About from './Pages/About';
import Resources from './Pages/Resources';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/about' index element={<About/>}/>
      {/* <Route path='/contact' index element={<Contact/>}/> */}
      <Route path='/fellowship' index element={<Fellowship/>}/>
      <Route path='/give' index element={<Give/>}/>
      <Route path='/resources' index element={<Resources/>}/>
    </Routes>
  );
}

export default App;
