import React from "react";
import { GiLion } from "react-icons/gi";
import { VscVerified, VscDebugBreakpointDataUnverified } from "react-icons/vsc";

export default function Body() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 pe-5">
            <div className="card" style={{ width: "17rem" }}>
              <img src="/assets/10001.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p>
                  {" "}
                  <img className="rounded-5" style={{width:"15px"}} src="/assets/gift.gif" alt="" /> cryptovers <VscVerified color="blue" />
                </p>
                <div className="d-flex">
                  <h5 className="card-title">Patissier Lionne #2311</h5>
                  <h5 className=" ms-5 ps-4 ">
                    <VscDebugBreakpointDataUnverified color="darkblue"/>
                  </h5>
                </div>
                <p className="card-text">546/3.9k for sale</p>
                <div className="d-flex">
                  <div className="d-flex border rounded-2">
                    <div className=" me-5 my-auto">
                      <h6>Form</h6>
                    </div>
                    <div className="text-end my-auto ps-3 ms-5">
                      <h6>$18</h6>
                    </div>
                  </div>
                  <a href="#" className="btn btnc rounded-2  btn-primary ms-2">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 px-3">
            <div className="card" style={{ width: "17rem" }}>
              <img src="/assets/10006.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
              <p>
                  {" "}
                  <img className="rounded-5" style={{width:"15px"}} src="/assets/gift.gif" alt="" /> cryptovers <VscVerified color="blue" />
                </p>
                <div className="d-flex">
                  <h5 className="card-title">Helmsman Hank</h5>
                  <h5 className=" ms-5 ps-4 ">
                    <VscDebugBreakpointDataUnverified color="darkblue"/>
                  </h5>
                </div>
                <p className="card-text">52/381 for sale</p>
                <div className="d-flex">
                  <div className="d-flex border rounded-2">
                    <div className=" me-5 my-auto">
                      <h6>Form</h6>
                    </div>
                    <div className="text-end my-auto ps-3 ms-5">
                      <h6>$36</h6>
                    </div>
                  </div>
                  <a href="#" className="btn btnc rounded-2  btn-primary ms-2">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "17rem" }}>
              <img src="/assets/10004.png" className="card-img-top" alt="..." />
              <div className="card-body">
              <p>
                  {" "}
                  <img className="rounded-5" style={{width:"15px"}} src="/assets/gift.gif" alt="" /> cryptovers <VscVerified color="blue" />
                </p>
                <div className="d-flex">
                  <h5 className="card-title">crosmonauts #116</h5>
                  <h5 className=" ms-5 ps-4 ">
                    <VscDebugBreakpointDataUnverified color="darkblue"/>
                  </h5>
                </div>
                <p className="card-text">1 minted</p>
                <div className="d-flex">
                  <div className="d-flex border rounded-2">
                    <div className=" me-5 my-auto">
                      <h6>Starting</h6>
                      
                    </div>
                    <div className="text-end my-auto ps-3 ms-5">
                      <h6>$18</h6>
                    </div>
                  </div>
                  <a href="#" className="btn btnc rounded-2  btn-primary ms-2">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "17rem" }}>
              <img src="/assets/10003.png" className="card-img-top" alt="..." />
              <div className="card-body">
              <p>
                  {" "}
                  <img className="rounded-5" style={{width:"15px"}} src="/assets/gift.gif" alt="" /> cryptovers <VscVerified color="aqua" />
                </p>
                <div className="d-flex">
                  <h5 className="card-title">Bad Billy goats #1345</h5>
                  <h5 className=" ms-5 ps-4 ">
                    <VscDebugBreakpointDataUnverified color="darkblue"/>
                  </h5>
                </div>
                <p className="card-text">1 minited</p>
                <div className="d-flex">
                  <div className="d-flex border rounded-2">
                    <div className=" me-5 my-auto">
                      <h6>Current</h6>
                    </div>
                    <div className="text-end my-auto ps-3 ms-5">
                      <h6>$5</h6>
                    </div>
                  </div>
                  <a href="#" className="btn btnc rounded-2  btn-primary ms-2">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
