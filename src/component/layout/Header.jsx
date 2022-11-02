import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark position-sticky  fw-bold  " id="head">
      <div className="container ">
        <a className="navbar-brand text-white" href="#">
        <img className="rounded-5" src="assets/10004.png" alt=" " width={30} />
        | NFT

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <form className="d-flex">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
</form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
           

              <a className="nav-link active text-white" aria-current="page" href="#">
                Marketplace
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
                Drops
              </a>
            </li>
          <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Brands
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li>

            <button className="btn text-white bg-primary btn-outline-primary me-3" type="submit">create</button>
            <li className="nav-item text-white">
              <a className="nav-link text-white border-start  " href="#">
                Sign in
              </a>
            </li>

            <li className="nav-item text-white">
              <a className="nav-link text-white border-end " href="#">
                Sign Up
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link  text-white">English</a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
}
