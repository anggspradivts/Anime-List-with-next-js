import React from 'react'
import AuthSec from "./FooterHeader"

const Footer = () => {
  return (
    <div className='bg-base-300'>
      <footer className="page-footer h-[30vh] lg:h-[40vh] p-2 lg:p-5 mt-40 sm:mt-20">
        <AuthSec />
      </footer>
    </div>
  )
}

export default Footer