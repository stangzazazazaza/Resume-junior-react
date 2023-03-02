import React from 'react'

function Contact(props) {
    const {contact} = props
  return (
    <div className="col-md-4  p-2 ">
        <div className="bg-white bg-white text-black p-3 rounded">
        <h2>
            {contact.title}
        </h2>
        <p>
            {contact.name}                
        </p>
        </div>
    </div>
  )
}

export default Contact