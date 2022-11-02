import React from 'react'
import Marquee from "react-fast-marquee"; 

export default function Hero() {
  return (
    <div>
      
      <div className="container-fluid mt-5 text-white">

      <div className="row ">
        
          <div className="col-md-6">
          <h3>Top Collection</h3>
          
          </div>
          <div className="col-md-6 text-end pe-5">
          <h6 className=''>see All</h6>

          </div>
      
        
      </div>
      <Marquee >

      <div className="row">
      <div className="col-md-2 mx-4">

<div className="card" style={{width: '15rem'}}>
<img src="/assets/10007.png" className="card-img-top" alt="..." />

</div>

</div>
<div className="col-md-2">

<div className="card" style={{width: '15rem'}}>
<img src="/assets/10008.png" className="card-img-top" alt="..." />

</div>

</div>
<div className="col-md-2 mx-4">

<div className="card " style={{width: '15rem'}}>
<img src="/assets/10004.png" className="card-img-top" alt="..." />

</div>

</div>
<div className="col-md-2">

<div className="card" style={{width: '15rem'}}>
<img src="/assets/10004.png" className="card-img-top" alt="..." />

</div>

</div>
<div className="col-md-2 mx-4">

<div className="card" style={{width: '15rem'}}>
<img src="/assets/10004.png" className="card-img-top" alt="..." />

</div>

</div>
</div>
</Marquee>
      
      </div>
    </div>
  )
}
