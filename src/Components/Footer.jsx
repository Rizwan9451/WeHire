import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedin,
  FaInstagram,
  FaHome,
  FaPhone

} from "react-icons/fa";
import {BiSolidMessage} from "react-icons/bi";
import Company from "./Company.png";
export default function Footer() {
  return (
    <div>
      <footer className=" text-center  text-black bg-light">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaGithub />
            </a>

            <a
              className="btn btn-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaFacebook />
            </a>

            <a
              className=" btn  btn-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaTwitter />
            </a>

            <a
              className="btn btn-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaGooglePlusG />
            </a>

            <a
              className="btn btn-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaLinkedin />
            </a>

            <a
              className="btn btn-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaInstagram />
            </a>
          </section>
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-success mb-4 ">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
        Streamline your recruitment process and discover top-tier talent in software engineering, product management, data science, and more. Let us connect you with the brightest minds to power your company's success. Simplify hiring, unleash potential - with weHire.
            </p>
          </section>
          <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <img src={Company} alt="" />
          </h6>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          For Candidates
          </h6>
          <p>
            <a href="#!" className="text-reset">Overview</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Startup Jobs</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Startup Hiring Data</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Tech Startups</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            For Recuiter
          </h6>
          <p>
            <a href="#!" className="text-reset">Overview</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Recruit Pro</a>
          </p>
          <p>
            <a href="#!" className="text-reset">RecruiterCloud</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Hire Developers</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><FaHome/> New York, NY 10012, US</p>
          <p>
            
            <BiSolidMessage/> info@example.com
          </p>
          <p><FaPhone/> + 01 234 567 88</p>
          <p><FaPhone/> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

        </div>
      </footer>
    </div>
  );
}