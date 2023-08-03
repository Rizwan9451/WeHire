import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner fs-5 fw-2">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>WeHire is the #1 Tech Hiring Platform in World</h5>
              <p> Connect with top talent, engage with them and close positions to execute your vision, faster.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1664651205193-bfb6bfdd3b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Find your next Job, Effortlessly ! </h5>
              <p>Connect with the actual hiring teams and get super fast responses back.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>You Deserve Better</h5>
              <p>In less than 5 mins, get matched to just the right opportunities you want.</p>
            </div>
          </div>
        </div>
            <a className="position-absolute top-0 start-0 ms-3 fs-2 fw-bold" href="!#" style={{textDecoration:"none"}}><span style={{ color: "#5e9693" }}>We</span><span style={{ color: "#fff" }}>Hire</span></a>
        <nav className="navbar navbar-expand-lg position-absolute top-0 start-50 translate-middle-x ms-3">
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-2" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link" href="#!">Discover</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">Offer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">For job seekers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">For companies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Navbar
