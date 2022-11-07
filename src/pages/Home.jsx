import React from 'react'
import { Card } from 'react-bootstrap'
// import { Sidebar } from 'react-pro-sidebar'
import {AiOutlineBars} from 'react-icons/ai'
import  Sidebar from '../component/element/Sidebar'
import Body from '../component/element/Body'
import Cards from '../component/element/Cards'
import Dash from '../component/element/Dash'
import Hero from '../component/element/Hero'
import Lion from '../component/element/Lion'
import Mapfun from '../component/element/Mapfun'
import Footer from '../component/layout/Footer'
import Mui from '../component/element/Mui'
// import { Drawer } from '@material-ui/core'
import Drawe from '../component/element/Drawe'


export default function 
() {
  return (
   
   <>
     
   <Hero />
   <div className="container-fluid">
    <div className="row">
    
      <div className="col-md-2">
      
      <div style={{position: 'sticky' , top: '16px '}}>
      <button className='btn  text-white mt-5    rounded-5 ms-5'>
      <AiOutlineBars/>  Filter 

      </button>
      <Dash/>
      </div>
      
      </div>
      <div className="col-md-9 ms-5">
      
   <Mapfun/>
      </div>
    </div>
   </div>
 
   </>
  )
}
