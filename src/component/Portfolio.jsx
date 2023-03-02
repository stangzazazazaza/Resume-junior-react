import React, { useState } from 'react'
import './Portfolio.css'
import Modal from './Modal'



function Portfolio(props) {
  const {portfolio} = props
  


  return (     
        <div className="card-portfolio mx-3">
          <img width={300} src={portfolio.pic} alt="" />
          <div className="content-card-portfolio">
            <p>{portfolio.title}</p>        
          </div>

           
        </div>        
        
  )
}

export default Portfolio