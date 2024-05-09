import React from 'react'
import AuthSec from "./FooterHeader"

const Footer = () => {
  return (
    <div className='bg-base-300'>
      <footer className="page-footer h-[30vh] lg:min-h-[40vh] p-2 lg:p-5">
        <AuthSec />
        <div className="grid grid-cols-3">
          <div></div>
        </div>
        <div>
          Powered By Jikan API
        </div>
      </footer>
    </div>
  )
}

export default Footer