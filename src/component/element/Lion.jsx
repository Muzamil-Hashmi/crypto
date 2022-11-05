import React from 'react'
import {AiOutlineHeart,AiOutlineEye} from 'react-icons/ai'
import {FaShare} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Lion() {
  // const {show}=useLocation()
  // console.log(show)
  const  location  = useLocation();
  console.log(location)
const value =location.state;
  return (
    <div>

        <div className="container mt-5">

            <div className="row">

                <div className="col-md-12">

                <div className="card mb-3" style={{maxWidth: '940px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <div className='row'>
        <img src={value.img} className=" rounded-5 w-100" alt="..." />
        


     
      </div>
      <div className="row my-3 ">
  <div className="col-md-12">
    <div className="card">
      <div className="card-body ">

        {/* <p>{value.p}</p> */}
<strong>View Crypto.org Chain details
</strong>        
      </div>
    </div></div></div>

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <Link className='text-decoration-none' to="/">back</Link>

        <div className='d-flex'>
            <div className=''>
                <AiOutlineHeart/>
                <small>1171</small>
            </div>
            <div className='ms-3'>
                <AiOutlineEye/>
                <small>1171</small>
            </div>
            <div className='ms-3'>
                <FaShare/>
                <small>1171</small>
            </div>
        </div>

        <div>
            <small className='text-muted'>Chain :</small>
            <small className='fw-bold'> Crypto.org Chain</small>
        </div>


        <div className='d-flex mt-3'>

            <div className='d-flex'>

                <img className='rounded-5' src={value.img} style={{width:'50px '}} alt="" />
               <div> <small>creater</small> <br />
                <small className='fw-bold'>Crypto.com</small></div>
            </div>

            <div className='d-flex ms-5'>

<img className='rounded-5' src="/assets/gift.gif" style={{width:'50px '}} alt="" />
<div> <small>collection</small> <br />
<small className='fw-bold'>Cryptovere</small></div>
</div>
        </div>
        <p className='fs-6 mt-3'>3928 Edition Minted</p>

        <h3>{value.head}</h3>
        <h3>$18</h3>
        <p className="card-text"><small className="text-muted">It’s Crypto.com’s 6th birthday and Monsieur Lionne has baked a few cakes that are just out of this world!</small></p>
    <div>

        <div>
        <button type="button" class=" btn2 border-primary text-info rounded-2 bg-transparent ">Art</button>
        <button type="button" class="btn2 border-primary text-info  ms-2 rounded-2 bg-transparent ">Crypto</button>


        </div>
    </div>
    <div>

      <div className='mt-3'>
        <a className='text-decoration-none text-dark mx-3 fw-bold ' href="">OwnerShip</a>
        <a className='text-decoration-none text-dark mx-3 ' href="">History</a>
        <a className='text-decoration-none text-dark mx-3' href="">Offer</a>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-6 d-flex">
      <img className='rounded-5' src="/assets/10002.png" style={{width:'50px '}} alt="" />
               <div> <small>owner</small> <br />
                <small className='fw-bold'>nufggh</small></div>
      </div>
      <div className="col-md-6 mt-3">
        <small>725z2y0emce76h57uqdx2snr95pjqp</small>
      

      </div>
    </div>
      </div>
    </div>
  </div>
</div>


                </div>
                <div className="row">
                  <div className="col-md-12">


                  <div className="card mb-3" style={{maxWidth: '940px'}}>
  <div className="row g-0">
    <div className="col-md-5 d-flex "> 
    <img src={value.img} className=" w-25"  alt="..." />
    <h3 className="card-title fw-bold mt-4">Loaded Lion #2244</h3>

    </div>
<div className="col-md-2"></div>
    <div className="col-md-4">
      <div className="card-body">
        <button className='btn bg-primary btn-primary'> But for $2,222 </button>
        <button type="button" class="btn bg-transparent ms-3 border-primary btn-outline-primary">Make an offfer</button>
<p className='fs-6'><small> A 2% royalty goes to the  for future resale</small></p>
        
      </div>
    </div>
  </div>
</div>

                  </div>
                </div>
                
            </div>
            
        </div>
      
    </div>
  )
}
