import React, { useEffect } from 'react';
import crypto from './crypto.mp4.mp4'
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='main'>
    <video src={crypto} className='vid-bg' autoPlay muted loop></video>
    </div>
    </>
  )
}

export default Home