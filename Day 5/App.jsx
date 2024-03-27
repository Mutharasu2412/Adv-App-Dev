import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Apply from './Components/Apply';
import Job from './Components/Job';
import About from './Components/About';
import Faq from './Components/Faq';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Applications from './Components/Applications';
import Admin from './Components/Admin';
import Newjob from './Components/Newjob';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/apply' element={<Apply/>}/>
      <Route path='/job' element={<Job/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/applications' element={<Applications/>}/>
      <Route path='/Newjob' element={<Newjob/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
