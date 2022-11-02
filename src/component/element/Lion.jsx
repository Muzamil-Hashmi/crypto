import React from 'react'
import {AiOutlineHeart,AiOutlineEye} from 'react-icons/ai'
import {FaShare} from 'react-icons/fa'

export default function Lion() {
  return (
    <div>

        <div className="container mt-5">

            <div className="row">

                <div className="col-md-12">

                <div className="card mb-3" style={{maxWidth: '940px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <div className='row'>
        <img src="/assets/10001.jpeg" className=" rounded-5 w-100" alt="..." />


     
      </div>
      <div className="row my-3 ">
  <div className="col-md-12">
    <div className="card">
      <div className="card-body ">
<strong>View Crypto.org Chain details
</strong>        
      </div>
    </div></div></div>

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <a className='text-decoration-none' href="">back</a>

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

                <img className='rounded-5' src="/assets/10001.jpeg" style={{width:'50px '}} alt="" />
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

        <h3>Pâtissier Lionne</h3>
        <h3>$18</h3>
        <p className="card-text"><small className="text-muted">It’s Crypto.com’s 6th birthday and Monsieur Lionne has baked a few cakes that are just out of this world!</small></p>
    <div>

        <div>
        <button type="button" class=" btn2 border-primary text-info rounded-2 bg-transparent ">Art</button>
        <button type="button" class="btn2 border-primary text-info  ms-2 rounded-2 bg-transparent ">Crypto</button>


        </div>
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
