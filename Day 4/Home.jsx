import React, { useState } from 'react'
import "./Home.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
function Home() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div class="home">
    <div class="bg">
    <img class="bg-img" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
    <div class="text-over-img"><div id="text-container">
     WELCOME !
    <div id="flip">
      <div><div>Streamline</div></div>
      <div><div>Empower</div></div>
      <div><div>Succeed</div></div>
    </div>
    START YOUR CAREER WITH JOBLINK.!
  </div>
  <div class="qoutes">Are you ready to take the next step in your career journey? Look no further than our comprehensive job portal, where opportunities abound and dreams are within reach. We understand that finding the perfect job can be both exhilarating and daunting, which is why we're dedicated to simplifying the process for you.
 <br></br> <button class="btn1"><Link to ="/login">JOIN IN</Link></button>
  </div>
  </div>
  
    </div>


  </div>

  )
}

export default Home