import React from 'react'

function Education(props) {
  const {education} = props
  return (
    <div className="col-md-6 p-3  text-center  text-black ">
      <div className="bg-white rounded p-3 h-auto">
        <img width={100} src={education.img} alt="" />
        <h3>{education.name}</h3>
        <h4>{education.year}</h4>
        <h5>Grade: {education.grade}</h5>
      </div>
    </div>
  )
}

export default Education