import React from 'react'
import {
    ImQuotesLeft
} from "react-icons/im"
const Feed = () => {
  return (
    <>
      <div className='container mt-2'>
        <h3 className='text-center fs-4 mb-4' >DON'T JUST TAKE IT FROM US</h3>
        <h1 className='text-center fw-bolder'>From our users</h1>
      </div>
      <div className='container mt-5'>
      <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card p-5">
      <div className="card-body">
        <ImQuotesLeft/>
        <p className="card-text fs-5 mt-2">Since purchasing my IT job on WeHire four years ago, I've been content. Exceptional atmosphere, excellent pay, and an unlimited PTO policy.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card p-5">
      <div className="card-body ">
        <ImQuotesLeft/>
        <p className="card-text fs-5 mt-2">I love WeHire. I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card p-5">
      <div className="card-body ">
        <ImQuotesLeft/>
        <p className="card-text fs-5 mt-2">I can't think about my day to day without this platform. Life would be a lot extra difficult.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card p-5">
      <div className="card-body ">
        <ImQuotesLeft/>
        <p className="card-text fs-5 mt-2">Half of the offers I give are sourced from WeHire. It's the best product for anyone looking for startup talent.</p>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Feed
