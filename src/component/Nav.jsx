import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <header className='shadow p-4 bg-body position-fixed'>
      <div className='container-fluid'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="#">NAPAMONTON</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <a class="nav-link" aria-current="page" href="#home">Home</a>
                <a class="nav-link" href="#about">About</a>
                <a class="nav-link" href="#education">Education</a>
                <a class="nav-link" href='#portfolio'>Portfolio</a>
                <a class="nav-link" href='#contact'>Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </div>        
    </header>
  )
}

export default Nav
