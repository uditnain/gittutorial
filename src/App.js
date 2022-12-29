import logo from './logo.svg';
import './App.css';
import gym from './image/img2.jpg'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Contact from './contact'
import Fitness from './fitness';
import Page from './page'
import Oops from './oops'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/Fitness' element={<Fitness/>}/>
        <Route excat path='/Page' element={<Page/>}/>
        <Route excat path ='/Oops' element={<Oops/>}/>
        </Routes>
    </Router>


  );
}

export default App;
