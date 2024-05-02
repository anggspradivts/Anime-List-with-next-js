import React from 'react'
import Navbar from "./Navbar" 
import Footer from "./Footer" 

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