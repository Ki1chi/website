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
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <main className="main-container">
      <div className="item-container">
      <h1 className='main-text'>Front-end Web Developer.</h1>
      <h3 className="main-text2">Nori Terada</h3>
      {/* <button className='projects-button'>Projects</button> */}
      </div>
      </main>
      <section className='project-section'>
        <h3 className='project-text'>projects</h3>
        <div className='projects'>
          <img  alt="" className='image-1'/>
          <img  alt="" className='image-2'/>
          <img  alt="" className='image-3'/>
          <img  alt="" className='image-4'/>
          <img  alt="" className='image-5'/>
        </div>
          <h3>here are some of the following technologies I have utilized.</h3>
      </section>
      <section className='about-section-container'>
        <div className='about-section'>
          <h1 className='item-3'>About me</h1>
          <h3 className='item-4'> Hello! I'm Nori Terada, a passionate self-taught developer with a knack for creating visually appealing and user-friendly websites. My journey into web development began with computers. A few years ago I got curious on how websites work, which quickly evolved into my passion and hopefully a career.  </h3>
          <h1 className='item-1'>My Journey</h1>
          <h3 className='item-2'> Without a formal background in computer science, I took the plunge into coding by using online resources, tutorials, and the passion to learn. I started with HTML and CSS, applying as much as I could learn to build many websites. As I got the hang of those two I ventured into Javascript to make a truly interactive experience.</h3>
          <h1 className='item-5'>My Philosopy</h1>
          <h3 className='item-6'>I believe in continuously learning. I like staying updated with the latest technologies and trends. My self-taught background has given me many opportunities to seek out such technologies. I believe being self-taught has instilled in me a strong problem-solving mindset and the ability to adapt to many new challenges quickly.</h3> 
          </div>
      </section>
      {/* <h3>contact</h3> */}
    </>
  )
}

export default App
