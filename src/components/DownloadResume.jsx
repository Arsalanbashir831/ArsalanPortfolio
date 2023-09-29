import React from 'react'
 import {BsFillCloudDownloadFill} from 'react-icons/bs'

const DownloadResume = () => {
  return (
    <div>
    <a href="../pdf/ArsalanBashir_ReactDeveloper.pdf" download="resume.pdf">
      <button className='bg-[#915EFF] p-4 mt-20 rounded-lg flex gap-3 items-center'>
        <span>Download Resume</span>
        <BsFillCloudDownloadFill />
      </button>
    </a>
  </div>
  )
}

export default DownloadResume