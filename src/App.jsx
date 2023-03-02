import './App.css'
import Nav from './component/Nav'
import Skill from './component/skills'
import Education from './component/Education'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'


import skills from './data/dataSkills'
import educations from './data/dataEducation'
import portfolios from './data/dataPortfolio'
import contacts from './data/dataContact'



function App() {
  
  const skillElements = skills.map((res,index)=>{
    return <Skill key={index} skill={res}/>
  })
  const educationElements = educations.map((res, index)=>{
    return <Education key={index} education={res} />
  })
  const portfolioElements = portfolios.map((res, index)=>{
    return <Portfolio key={index} portfolio={res} />
  })
  const contactElements = contacts.map((res,index)=>{
    return <Contact key={index} contact={res}/>
  })
  return (
    <div className="App">      
      <Nav/>
      <div className='home' id='home'>
        <div className='content'>
          <img width={300} src="/image/profile.jpg" alt="" />
          <div className='content-data mt-4'>
            <h3>Napamonton Norkhuntod( Stang )</h3>
            <h2>Font-End UX/UI</h2>
          </div>
        </div>        
      </div>
      <div className='about' id='about'>
        <div className="container">
          <div className="info">
            <h1 className='mb-5'>About Me</h1>
            <h3>Hi,I'm <b>Napamonton Norkhuntod I'm 23 years old</b></h3>
            <p></p>
          </div>
          <div className="skills">
            <h1>What is my skill level?</h1>
            <div className="row" >          
              {skillElements}
            </div>
          </div>
        </div>
      </div>
      <div className="education" id='education'>
        <div className="container">
          <h1>Education</h1>
          <div className="row">
            {educationElements}
          </div>
        </div>
      </div>
      <div className="portfolio" id='portfolio'>
        <div className="container">
          <h1>Portfolio</h1>
          <p>Certificate 2017-2022</p>
          <div className="content d-flex overflow text-center">            
            {portfolioElements}
          </div>
        </div>
      </div>
      <div className="contact" id='contact'>
        <div className="container">
          <h1>
            Contact
          </h1>
          <div className="row">            
            {contactElements}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
