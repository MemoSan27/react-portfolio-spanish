import React from 'react'

const BotonDownload = () => {

  return (
    <a  href='../CV.pdf' download={true}>
          <div className="float_container btn">
            <div className="float">
              <br></br>  
              <i className='pdf bx bxs-file-pdf'></i>
              <br></br>
              <br></br>
              <p className='cv'>mi CV</p>
              <i className='bx bx-cloud-download bx-fade-down bx-lg' ></i>
            </div>
          </div>
    </a>
  )
}

export default BotonDownload
