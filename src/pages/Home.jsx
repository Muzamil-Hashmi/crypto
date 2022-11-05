import React from 'react'
import { Card } from 'react-bootstrap'
import { Sidebar } from 'react-pro-sidebar'
import Body from '../component/element/Body'
import Cards from '../component/element/Cards'
import Dash from '../component/element/Dash'
import Hero from '../component/element/Hero'
import Lion from '../component/element/Lion'
import Mapfun from '../component/element/Mapfun'
import Footer from '../component/layout/Footer'
import Mui from '../component/element/Mui'


export default function 
() {
  return (
   
   <>
     
   <Hero />
   <div className="container-fluid">
    <div className="row">
    
      <div className="col-md-12">
      
     
      <Cards/>
      </div>
      <div className="col-md-12">
      
   <Mapfun/>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}
