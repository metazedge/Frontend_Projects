import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss'
const Home = () => {
    const navigate = useNavigate()
    const handleLogout = () =>{
        navigate('/login')
    }
  return (
    <div className='home'>
        <h1>Welcome to Home page</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home