import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-red-500 text-white font-bold'>
      <div className="logo text-2xl">
        BitLinks
      </div>
      <div className='flex gap-5 p-1 text-lg'>
        <Link href={"/"} className='p-1'>Home</Link>
        <Link href={"/about"} className='p-1'>About</Link>
        <Link href={"/shorten"} className='p-1'>Shorten</Link>
        <Link href={"/contact"} className='p-1'>Contact Us</Link>
        <Link href={"/shorten"} className='bg-red-400 p-1 px-4  rounded-2xl'>Try Now</Link>
        <Link href={"/"} className='bg-red-400 p-1  px-4 rounded-2xl'>GitHub</Link>
      </div>
    </nav>
  )
}

export default Navbar
