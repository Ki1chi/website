
import { useRef } from 'react';
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
        <li  
        onClick={() =>{
          contactRef.current?.scrollIntoView({
            behavior:'smooth'
          })
        }}>Contact</li>
      </ul>
    </nav>
    <main ref={homeRef} className="main-container" id='main'>
      <div className="item-container">
      <h1 className='main-text'>Front-end Web Developer.</h1>
      <h3 className="main-text2">Nori Terada</h3>
      </div>
      </main>
      <section ref={projectRef} className='project-section'>
        <h3 className='project-text' id='text'></h3>
        <div className='projects'>
          <div>
          <a href="https://github.com/Ki1chi/calculator.git" target="_blank" className='image-1' id='project-item'>
            <img  alt="project-1" />
          </a>
          <div className='project-info'>Technologies: Html, Css, Javascript <br/> First DOM Project - Calculator<span className='link'>  <a href="https://statuesque-empanada-e1ac42.netlify.app/" target="_blank" rel="noopener noreferrer">Example</a></span></div>
          </div>
          <div>
          <a href="https://github.com/Ki1chi/libraryproject.git" target="_blank" className='image-2' id='project-item'>
            <img  alt="project-1" />
          </a>
          <div className='project-info'>Technologies: Html, Css, Javascript <br/> First C.R.U.D project - Library <span className='link'> <a href="https://luxury-haupia-146997.netlify.app/" target="_blank" rel="noopener noreferrer">Example</a> </span></div>
          </div>
          <div>
          <a href="https://github.com/Ki1chi/Etch-a-Sketch.git" target="_blank" className='image-3' id='project-item'>
            <img  alt="project-3" />
          </a>
          <div className='project-info'>Technologies: Html, Css, Javascript <br/> Etch-a-Sketch project<span className='link'>  <a href="https://sage-phoenix-8ffbd1.netlify.app/" target="_blank" rel="noopener noreferrer">Example</a></span></div>
          </div>
          <div>
          <a href="https://github.com/Ki1chi/tictactoe-game.git" target="_blank" className='image-4' id='project-item'>
            <img  alt="project-4" />
          </a>
          <div className='project-info'>Technologies: Html, Css, Javascript <br/> Tic-Tac-Toe Project<span className='link'>  <a href="https://relaxed-starship-6d23fe.netlify.app/" target="_blank" rel="noopener noreferrer">Example</a></span></div>
          </div>
          <div>
          <a href="https://github.com/Ki1chi/memorycard.git" target="_blank" className='image-5' id='project-item'>
            <img  alt="project-5" />
          </a>
          <div className='project-info'>Technologies: Html, Css, Javascript, APis, & React <br/> First React Project<span className='link'>  <a href="https://creative-dasik-9554b0.netlify.app/" target="_blank" rel="noopener noreferrer">Example</a></span></div>
          </div>
        </div>
      </section>
      <section>
        <div className='tech-container'>
            <div className='technologies'>
            <div>
              <div className='tech-1' id='technologies'></div>
              <div className='label'>Html</div>
            </div>
            <div>
              <div className='tech-2' id='technologies'></div>
              <div className='label'>Css</div>
            </div>
            <div>
              <div className='tech-3' id='technologies'></div>
              <div className='label'>JavaScript</div>
            </div>
            <div>
              <div className='tech-4' id='technologies'></div>
              <div className='label'>React</div>
            </div>
            <div>
              <div className='tech-5' id='technologies'></div>
              <div className='label'>Scss</div>
            </div>
            <div>
              <div className='tech-6' id='technologies'></div>
              <div className='label'>Git</div>
            </div>
            <div>
              <div className='tech-7' id='technologies'></div>
              <div className='label'>MacOS</div>
            </div>
            <div>
              <div className='tech-8' id='technologies'></div>
              <div className='label'>TypeScript</div>
            </div>
            <div>
              <div className='tech-9' id='technologies'></div>
              <div className='label'>Ruby</div>
            </div>
            <div>
              <div className='tech-10' id='technologies'></div>
              <div className='label'>Linux</div>
            </div>
            <div>
              <div className='tech-11' id='technologies'></div>
              <div className='label'>Wordpress</div>
            </div>
            <div>
              <div className='tech-12' id='technologies'></div>
              <div className='label'>Windows</div>
            </div>
            <div>
              <div className='tech-13' id='technologies'></div>
              <div className='label'>VsCode</div>
            </div>
            </div>
        </div>
      </section>
      <section className='about-section-container' id='about' ref={aboutRef}>
        <div className='about-section'>
          <h1 className='item-1'>About me</h1>
          <h3 className='item-2'> Hello. I'm Nori Terada, a passionate self-taught developer with a knack for creating visually appealing and user-friendly websites. My journey into web development began with computers. A few years ago I got curious on how websites work, which quickly evolved into my passion and hopefully a career.  </h3>
          <h1 className='item-3'>My Journey</h1>
          <h3 className='item-4'> Without a formal background in computer science, I took a dive into coding by using online resources, tutorials, and the passion to learn. I started with HTML and CSS, applying as much as I could learn to build many websites. As I got the hang of those two I ventured into Javascript and React to make a truly interactive experience.</h3>
          <h1 className='item-5'>My Philosopy</h1>
          <h3 className='item-6'>I believe in continuously learning. I like staying updated with the latest technologies. I'm self-taught so learning has given me many opportunities to seek out different technologies. I believe being self-taught has instilled in me a strong problem-solving mindset and the ability to adapt to many new challenges quickly.</h3> 
          </div>
      </section>
      <section className='contact-section-container' ref={contactRef}>
        <h1 className='contact-text'>Contact Me</h1>
        <div className='contact-section'>
            <a className='contact-2' href="https://github.com/Ki1chi" target="_blank" >
            </a>
            <a className='contact-3' href="https://www.linkedin.com/in/norihito-terada-94b869216?trk=people-guest_people_search-card" target="_blank" >
            </a>
        </div>
      </section>
      <footer>
        <h3 className='footer'>&copy; 2024 Nori Terada, All Rights Reserved</h3>
      </footer>
    </>
  )
}

export default App
