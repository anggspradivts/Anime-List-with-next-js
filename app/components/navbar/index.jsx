"use client"
import React from 'react'
import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <div>
      <div className='bg-base-300 h-[100px] sm:px-10 relative text-[0.8rem] sm:text-[1rem]'>
        <div className='h-[50px] flex justify-between items-center'>
          <div className="navlogo">
            <Link className='text-xl' href="/">My Anime List</Link>
          </div>
          <div className="search-bar">
            <InputSearch />
          </div>
        </div>
        <div className="navlink h-[50px] flex justify-start gap-5">
          <div className="dropdown dropdown-content">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Filter</div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a>Item 1</a></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
            <Link href="/about">Link</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar