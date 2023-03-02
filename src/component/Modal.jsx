import React from 'react'

function modal(props) {      
  console.log(props)
  return (     
          <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">    
              <img width={500} src={props.pic} alt="" />              
            </div>
          </div>     
  )
}
export default modal