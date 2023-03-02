import React from 'react'
import './skills.css'

function skills(props) {  
  const {skill} = props
  return (
    <div className="col-md-6 mb-3">
        <span>{skill.title}</span>
        <div className="w-100 p-1 border ">
            <div className="power-skill" style={{width: skill.powerSkill + '%'}}></div>
        </div>
    </div> 
  )
}

export default skills