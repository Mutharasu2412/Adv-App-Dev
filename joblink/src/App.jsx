import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

 
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>

  )
}

export default App;
