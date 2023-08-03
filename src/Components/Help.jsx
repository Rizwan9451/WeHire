import React from "react";

const Help = () => {
  return (
    <>
      <div className='container my-3'>
      <h1 className="fw-semibold text-center">
        What can WeHire help with you?
      </h1>
      <br />
      <br />
      <br />
      <div className="row g-0 overflow-hidden flex-md-row mb-5 ">
        <div className="col p-4 d-flex flex-column position-static">
          <p className="fw-medium fs-3" style={{ color: "#03a87f" }}>
            Find your next job, effortlessly ____
          </p>
          <p>You deserve better than spammy job boards.</p>
          <p className="mb-5">
            In less than 5 mins, get matched to just the right opportunities
            you want. Connect with the actual hiring teams and get super fast
            responses back.
          </p>
          <div className="d-flex justify-content-start">
            <button type="button" className="btn btn-primary me-3 rounded-pill">
              Find jobs now
            </button>
            <button
              type="button"
              className="btn btn btn-outline-secondary rounded-pill"
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="col-auto d-none d-lg-block">
          <iframe
            src="https://www.youtube.com/embed/Fpg5A5yqTO8"
            title="YouTube video"
            allowfullscreen
            style={{ height: "15rem", width: "25rem", borderRadius: ".5rem" }}
          ></iframe>
        </div>
      </div>
      <br /><br /><br />
      <div className="row g-0 overflow-hidden flex-md-row mb-4">
        <div className="col-auto d-none d-lg-block mt-1 me-5">
          <iframe
            src="https://www.youtube.com/embed/Fpg5A5yqTO8"
            title="YouTube video"
            allowfullscreen
            style={{ height: "15rem", width: "25rem", borderRadius: ".5rem" }}
          ></iframe>
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <p className="fw-medium fs-3" style={{ color: "#03a87f" }}>
            Hire 10x top tech talent. 0x backouts ____
          </p>
          <p className="mb-5">
            WeHire is the #1 tech hiring platform in World. Connect with top
            talent, engage with them and close positions to execute your
            vision, faster.
          </p>
          <div className="d-flex justify-content-start">
            <button type="button" className="btn btn-primary me-3 rounded-pill">
              Hire now
            </button>
            <button
              type="button"
              className="btn btn btn-outline-secondary rounded-pill"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Help;
