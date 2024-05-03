import React from 'react'
import Navbar from "./navbar" 
import Footer from "./footer" 

const Layout = ({ children }) => {
  return (
    <div className='lg:mx-[150px]'>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout