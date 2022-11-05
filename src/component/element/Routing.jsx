import React,{useState} from "react";
import { MdOutlineVerified } from "react-icons/md";
import {VscDebugBreakpointData} from "react-icons/vsc"
import Dash from "./Dash";
const data = [
  {
    img: "./assets/10001.jpeg",
    h1: "/assets/gift.gif",
    p: "Cryptover",
    head: "Patissier Lionne #2311",
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
    head: "crosmonauts #116",
    text: "1 minted ",
    text1: "Strating",
    text3:"$18",
    btn:"Buy",

  },
  {
    img: "./assets/10004.png",
    h1: "/assets/gift.gif",
    p: "Cryptover",
    head: "Bad Billy goats #1345",
    text: "1 minited",
    text1: "Current",
    text3:"$5",
    btn:"Buy",

  },
  {
    img: "./assets/10005.png",
    h1: "/assets/gift.gif",
    p: "Cryptover",
    head: "Patissier Lionne #2311",
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
];

export default function Mapfun() {

  
 
  return (
    <>
    
      <div className="map py-5 ">
        <div className="container-fluid">
          <div className="row align-items-stretch">
          
            {data.map((v, i) => {
              return (
                <>
                
                  <div className="col-md-4 mb-4 " key={i}>
                    <div className="card text-dark h-100">
                    
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
                            <p className="ms-5 ps-5">{v.text3}</p>
                          </div>

                          <button className="bg-white border-primary text-primary rounded-3 ms-2 px-2   " >
                          {v.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
