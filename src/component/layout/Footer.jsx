import React from 'react'
import {AiFillTwitterCircle,AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container  text-white   " id='foot'>


<div className="row">

  <div className="col-md-6">

  <AiFillTwitterCircle size={20}  />
  <AiOutlineInstagram size={20} />
  <AiOutlineLinkedin size={20}  />
  
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
