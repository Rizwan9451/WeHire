import React from 'react'
const Companies = () => {
  return (
    <>
    <div className="container border-bottom">
    <div className='row '>
      <div className='border border-start-0 p-5 text-center col-6' style={{color:'blue'}}>
        <h1 className='fw-bold'>130K +</h1>
        <h2 className='fw-bold'>Tech Jobs</h2>
      </div>
      <div className='border border-end-0 p-5 text-center col-6' style={{color:'orange'}}>
      <h1 className='fw-bold'>6M +</h1>
        <h2 className='fw-bold'>Matches Made</h2>
      </div>
      <div className=' p-5 text-center' style={{color:'green'}}>
      <h1 className='fw-bold'>8M +</h1>
        <h2 className='fw-bold'>Startup-ready candidates</h2>
      </div>
    </div>
    </div>
    <marquee className="border-top" scrollamount="10">
      <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-768x432.png" alt="" height={200} className='me-5'/>
      <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo-768x251.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2020/08/Atlassian-Logo-640x400.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2018/02/Epson-Logo-640x400.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2017/02/HP-Log%D0%BE-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2021/05/HTC-logo-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2021/05/Intel-logo-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2022/02/NVIDIA_logo-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2019/12/Plantronics-Logo-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2018/10/Xbox-logo-640x360.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2021/11/Siemens-logo-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2018/07/O2-Logo-768x432.png" alt="" height={200} className='me-5' />
      <img src="https://1000logos.net/wp-content/uploads/2017/12/Fujitsu-Logo-768x432.png" alt="" height={200} className='me-5' />
    </marquee>
    </>
  )
}

export default Companies
