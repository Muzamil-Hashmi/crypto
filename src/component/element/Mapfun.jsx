import React,{useState} from 'react'
import { AccordionButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineVerified } from "react-icons/md";
 import{AiOutlineSwap,AiOutlineAppstore,AiOutlineAppstoreAdd } from 'react-icons/ai'
import {VscDebugBreakpointData} from "react-icons/vsc"
import { useNavigate } from 'react-router-dom';
import Lion from './Lion';
import{ CgMenuGridO} from 'react-icons/cg'
import {BsArrowDownUp} from 'react-icons/bs'
const Mapfun = () => {
  const data = [
    {
      img: "./assets/10001.jpeg",
      h1: "/assets/gift.gif",
      p: "Cryptover",
      head: "Patissier Lionne ",
      text: "546/3.9k for sale",
      text1: "Form",
      text3: "$18",
      btn:"Buy",
    },
    {
      img: "./assets/10002.png",
      h1: "/assets/gift.gif",
      p: "Cryptover",
      head: "Helmsman Hank",
      text: "52/381 for sale",
      text1: "Form",
      text3:"$36",
      btn:"Buy",
  
    },
    {
      img: "./assets/10003.png",
      h1: "/assets/gift.gif",
      p: "Cryptover",
      head: "crosmonauts ",
      text: "1 minted ",
      text1: "Strating",
      text3:"$18",
      btn:"Buy",
  
    },
    {
      img: "./assets/10004.png",
      h1: "/assets/gift.gif",
      p: "Cryptover",
      head: "Bad Billy goats ",
      text: "1 minited",
      text1: "Current",
      text3:"$5",
      btn:"Buy",
  
    },
    {
      img: "./assets/10005.png",
      h1: "/assets/gift.gif",
      p: "Cryptover",
      head: "Patissier Lionne ",
      text: "546/3.9k for sale",
      text1: "Form",
      text3:"$6",
      btn:"Buy",
  
    },
    {
      img: "./assets/10006.jpeg",
         h1: "/assets/gift.gif",
      p: "Cryptover",
      head: "on Rainy wish",
      text: "1 minited",
      text1: "Bid",
      text3:"$1",
      btn:"Buy",
  
    },
  ]
    // console.log(JSON.stringify(data));

    const [show, setShow] = useState("");
    // console.log(show)
// const navigate=useNavigate()
// navigate('/lion',{show})
const navigate = useNavigate();
  
    
  return (
    <>
    <div className=' py-5' >
        <div className="container">
            <div className="row align-items-stretch">
              <div className="col-md-12 text-end mb-3 ">
              <div className="btn-group">
  <button type="button" className="btn rounded-5 btn-danger fw-bold  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
   <BsArrowDownUp/> Sort by
  </button>
  <ul className="dropdown-menu fw-bold rounded-4">
    <li><a className="dropdown-item fw-bold" href="#">Most Relevnet</a></li>
    <li><a className="dropdown-item fw-bold" href="#">Recent Listed</a></li>
    <li><a className="dropdown-item fw-bold" href="#">Newest</a></li>
    <li><a className="dropdown-item fw-bold" href="#">Price high to low</a></li>
    <li><a className="dropdown-item fw-bold" href="#">Price low to high</a></li>
  </ul>
</div>               <div className="btn-group ms-2">
  <button type="button" className="btn rounded-5 btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <CgMenuGridO/>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item fw-bold" href="#"> img </a></li>
    <li><a className="dropdown-item fw-bold" href="#">Another action</a></li>
    <li><a className="dropdown-item fw-bold" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider " /></li>
    <li><a className="dropdown-item fw-bold" href="#">Separated link</a></li>
  </ul>
</div>

              </div>
        {data.map((v,i)=>{
            return <>
            <div className="col-md-4 mb-4 " key={i}>
                <div className={`card text-dark h-100 ` } onClick={ ( )=>   navigate('/lion', {state: v}) } >
                <div className="card-body">
                       
                       <img
                          src={v.img}
                          className="w-100 d-block m-auto"
                          alt=""
                        />
                       
                        <div className="d-flex mt-3">
                          <img
                            src={v.h1}
                            alt=""
                            className="rounded-5  mt-1 "
                            style={{ width: "20px", height: "20px" }}
                          />
                          <p className="mx-3 ">{v.p}</p>
                          <MdOutlineVerified className="mt-1" />
                        </div>
                        <h4>{v.head} <VscDebugBreakpointData className="ms-2"/></h4>
                        <p>{v.text}</p>
                        <div className=" d-flex">
                          <div className="d-flex border me-5">
                            <p>{v.text1}</p>
                            <p className="ms-5 ps-2 ">{v.text3}</p>
                          </div>
                    <button className="bg-white border-primary text-primary rounded-3 ms-2 px-2 " 
                        
                    >
                      Buy
                    </button>
                  </div>
                    </div>
                </div>
            </div>
            </>
        })}
        </div>
        </div>
    </div>

    
    
    </>
  )
}
export default Mapfun