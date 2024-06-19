import { useState } from 'react'
import { useRef, useEffect } from 'react';
import './App.scss'

function App() {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
    <img className="bg-image"></img>
    <nav className='nav-container'>
      <div className='logo-container' 
        onClick={() =>{
            homeRef.current?.scrollIntoView({
              behavior:'smooth'
            })
          }}>
        <div className='logo'>Nori Terada</div>
      </div>
      <ul className='nav-bar' >
        <li
        onClick={() =>{
          homeRef.current?.scrollIntoView({
            behavior:'smooth'
          })
        }}
        >Home</li>
        <li  
          onClick={() =>{
            projectRef.current?.scrollIntoView({
              behavior:'smooth'
            })
          }}
        >Projects</li>
        <li
        onClick={() =>{
          aboutRef.current?.scrollIntoView({
            behavior:'smooth'
          })
        }}
        >About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <main ref={homeRef} className="main-container" id='main'>
      <div className="item-container">
      <h1 className='main-text'>Front-end Web Developer.</h1>
      <h3 className="main-text2">Nori Terada</h3>
      </div>
      </main>
      <section ref={projectRef} className='project-section' id='projects'>
        <h3 className='project-text' id='text'>Latest Projects</h3>
        <div className='projects'>
          <a href="https://statuesque-empanada-e1ac42.netlify.app/" target="_blank" className='image-1'>
            <img  alt="project-1" />
          </a>
          <a href="https://luxury-haupia-146997.netlify.app/" target="_blank" className='image-2'>
            <img  alt="project-1" />
          </a>
          <a href="https://sage-phoenix-8ffbd1.netlify.app/" target="_blank" className='image-3'>
            <img  alt="project-3" />
          </a>
          <a href="https://relaxed-starship-6d23fe.netlify.app/" target="_blank" className='image-4'>
            <img  alt="project-4" />
          </a>
          <a href="https://creative-dasik-9554b0.netlify.app/" target="_blank" className='image-5'>
            <img  alt="project-5" />
          </a>
        </div>
          {/* <h3>here are some of the following technologies I have utilized.</h3> */}
      </section>
      <section>
        <div className='tech-text' id='text'>My Skills</div>
        <div className='tech-container'>
            <div className='technologies'>
            <div className='tech-1'></div>
            <div className='tech-2'></div>
            <div className='tech-3'></div>
            <div className='tech-4'></div>
            <div className='tech-5'></div>
            <div className='tech-6'></div>
            <div className='tech-7'></div>
            <div className='tech-8'></div>
            <div className='tech-9'></div>
            <div className='tech-10'></div>
            <div className='tech-11'></div>
            <div className='tech-12'></div>
            <div className='tech-13'></div>
            </div>
        </div>
      </section>
      <section className='about-section-container' id='about' ref={aboutRef}>
        <div className='about-section'>
          <h1 className='item-3'>About me</h1>
          <h3 className='item-4'> Hello. I'm Nori Terada, a passionate self-taught developer with a knack for creating visually appealing and user-friendly websites. My journey into web development began with computers. A few years ago I got curious on how websites work, which quickly evolved into my passion and hopefully a career.  </h3>
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
