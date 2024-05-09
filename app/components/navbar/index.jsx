"use client"
import React from 'react'
import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <div>
      <div className='bg-base-300 h-[100px] px-5 sm:px-10 relative text-[0.8rem] sm:text-[1rem] font-mono'>
        <div className='h-[50px] flex justify-between items-center'>
          <div className="navlogo">
            <Link className='text-xl sm:text-4xl font-bold' href="/">My Anime List</Link>
          </div>
          <div className="search-bar">
            <InputSearch />
          </div>
        </div>
        <div className="navlink h-[50px] flex justify-start items-center ">
          <div className="border-r-2 border-gray-400 px-1">manga</div>
          <div className="border-r-2 border-gray-400 px-1">people</div>
          <div className="border-r-2 border-gray-400 px-1">character</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar