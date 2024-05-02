"use client"
import React from 'react'
import { useWindowWidth } from "../utils/useWindowWidth"
import Link from "next/link"

const Navbar = () => {
  const windowWidth = useWindowWidth()
  console.log(windowWidth)
  return (
    <div>
      {windowWidth > 1020 ? (
        <div className='bg-base-300 h-[100px] px-10'>
          <div className='h-[50px] flex justify-between items-center'>
            <div className="navlogo">
              <Link className='text-xl' href="/">My Anime List</Link>
            </div>
            <div className="search-bar flex gap-7">
              <input className='bg-white w-[500px] h-[30px] rounded-md' type="search" name="" id="" />
            </div>
          </div>
          <div className="navlink h-[50px] flex justify-end gap-10">
            <Link href="/about">Link</Link>
            <Link href="/about">Link</Link>
          </div>
        </div>
      ) : (
        <div className="px-[8px] mb-[30px] bg-base-300 text-white">
          <div className="flex-1 h-[70px] px-2 w-full flex justify-center items-center lg:flex-none">
            <Link href="/">
              My Anime List
            </Link>
          </div>
          <div className='w-full'>
            <input className='w-full h-[20px] bg-slate-400 text-black' type="search" name="" id="" />
          </div>
          <div className="flex justify-end flex-1 px-2">
            <div className="flex items-stretch">
              <a className="btn btn-ghost rounded-btn">Button</a>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><a>Item 1</a></li> 
                  <li><Link href="/about">About</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar