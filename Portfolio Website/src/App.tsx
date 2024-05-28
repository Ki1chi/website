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
      <h1 className='main-text'>Front-end Web Developer</h1>
      <h3 className="main-text2">My name is Nori Terada, I like to make websites</h3>
      </main>
      <section className='about-section'>
        <div>
          <h1>hello</h1>
        </div>
      </section>
    </>
  )
}

export default App
