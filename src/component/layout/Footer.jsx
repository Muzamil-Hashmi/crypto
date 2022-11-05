import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container  text-white   " id='foot'>


<div className="row">

  <div className="col-md-6">

  <AiFillTwitterCircle size={30} color="blue" />
  <AiFillTwitterCircle size={30} color="blue" />
  <AiFillTwitterCircle size={30} color="blue" />
  
  <div className='style9 '>© 2022 Quant Network Limited. All rights reserved</div>
  </div> 
  <div className="col-md-3"></div>
  <div className="col-md-3 mt-4 d-flex">

    <small>Privacy Policy</small>
    <small className='px-3'>Help center</small>
    <small>Blog</small>
  </div>
  
  


</div>
      </div>
  
  )
}

export default Footer
