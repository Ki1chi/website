// import { useState } from 'react'
import './App.scss'

function App() {



  return (
    <>
    <img className="bg-image"></img>
    <nav className='nav-container'>
      <div className='logo-container'>
        <div className='logo'></div>
      </div>
      <ul className='nav-bar'>
        {/* <li>Home</li> */}
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
    <main className="main-container">
      {/* <h3 className="main-text">Hey, I am</h3> */}
      <h1 className='name'>Front-end Web Developer</h1>
      <h3 className="main-text">My name is Nori, I like to make websites</h3>
      </main>
    </>
  )
}

export default App
