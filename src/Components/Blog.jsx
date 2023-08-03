import React from "react";

const Blog = () => {
  return (
    <>
      <div className="container mt-4 d-flex justify-content-between">
        <h3>From the Blog</h3>
        <button type="button" className="btn btn-outline-warning">
          More Post
        </button>
      </div>
      <div className="container  my-3 mt-4 d-flex justify-content-evenly">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-5">
            <div className="card">
              <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287d71a7e6361_Frame%2520297-min-p-800.jpeg" className="card-img-top" alt="..." />
              <div className="card-body m-4">
                <h5 className="card-title">JOB COLLECTION</h5>
                <h3 className="card-text mt-4 mb-4 fw-bold">
                20 Women-Led Startups Expanding Their Remote Teams in 2023
                </h3>
                <p >It is no surprise by now that women make great leaders. In the US alone, women-led businesses generated more than 1.8 trillion dollars...</p>
                <a href="!#" className="btn btn-outline-danger mt-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128719aa7e6360_Frame%2520296-min-p-800.jpeg" className="card-img-top" alt="..." />
              <div className="card-body m-4">
                <h5 className="card-title">BLOG POST</h5>
                <h3 className="card-text mt-4 mb-4 fw-bold">
                30 Questions to Ask Before Joining a Startup
                </h3>
                <p >You're trying to evaluate the company while still impressing your interviewers, and that balance can be tricky...</p>
                <a href="!#" className="btn btn-outline-danger mt-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712875bf67e635d_Frame%2520293-min-p-800.jpeg" className="card-img-top" alt="..." />
              <div className="card-body m-4">
                <h5 className="card-title">BLOG POST</h5>
                <h3 className="card-text mt-4 mb-4 fw-bold">
                Why Naval Ravikant Thinks Remote Work Is The Future
                </h3>
                <p >It feels like the rise of remote works has been a top conversation in tech for years, but despite the enthusiasm and attention...</p>
                <a href="!#" className="btn btn-outline-danger mt-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712872b067e635c_Frame%2520292-min-p-800.jpeg" className="card-img-top" alt="..." />
              <div className="card-body m-4">
                <h5 className="card-title">BLOG POST</h5>
                <h3 className="card-text mt-4 mb-4 fw-bold">
                The Truth About Finding Your First Engineering Job
                </h3>
                <p >Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...</p>
                <a href="!#" className="btn btn-outline-danger mt-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128724317e635f_Frame%2520295-min-p-800.jpeg" className="card-img-top" alt="..." />
              <div className="card-body m-4">
                <h5 className="card-title">JOB COLLECTION</h5>
                <h3 className="card-text mt-4 mb-4 fw-bold">
                19 Hot Crypto Startups Hiring Remotely in 2023
                </h3>
                <p >Either Crypto has a great PR team, or the internet-based medium of exchange is truly taking the world by storm...</p>
                <a href="!#" className="btn btn-outline-danger mt-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <img src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287a9897e635e_Frame%2520294-min-p-800.jpeg" className="card-img-top" alt="..." />
              <div className="card-body m-4">
                <h5 className="card-title">JOB COLLECTION</h5>
                <h3 className="card-text mt-4 mb-4 fw-bold">
                18 Innovative Space Startups Hiring Now In 2023
                </h3>
                <p >Few tech sectors are capturing the public’s collective imagination as much as space. Privatized spaceflight, or “NewSpace,” is attracting...</p>
                <a href="!#" className="btn btn-outline-danger mt-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
