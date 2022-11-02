import React from 'react'
import{ CgMenuGridO} from 'react-icons/cg'
import {BsArrowDownUp} from 'react-icons/bs'

export default function Cards() {
  return (
    <div>

        <div className="container-fluid">

            <div className="row mt-3">
            
            

                <div className="col-md-2">
                <button type="button" class="btn btn-primary rounded-5 px-4 ms-3">Filter</button>

                </div>
                <div className="col-md-8">

                </div>
                <div className="col-md-2">
{/* Example single danger button */}
<div className="btn-group">
  <button type="button" className="btn rounded-5 btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   <BsArrowDownUp/> Sort by
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Sort by</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
{/* Example single danger button */}
<div className="btn-group ms-2">
  <button type="button" className="btn rounded-5 btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <CgMenuGridO/>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#"> img </a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
                </div>

            </div>


        </div>
      
    </div>
  )
}
