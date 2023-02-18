import React, { useContext, useEffect } from 'react'
import UserContext from './UserContext'
import { useNavigate } from 'react-router-dom';
import Posts from './Posts';
import '../styles/home.css'
function Home() {
  const {userId,isLoggedIn}=useContext(UserContext);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/',{replace:true});
    }
  },[isLoggedIn,navigate]);
  return (
    <div className='home-container'>
      {isLoggedIn &&
      <div> 
      <h1>Home</h1>
      <h3>Welcome! {userId}</h3>
      <Posts/>
      </div>}
    </div>
  )
}

export default Home