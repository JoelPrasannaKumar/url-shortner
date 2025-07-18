"use client"
import React from 'react'
import localFont from "next/font/local"
import Link from 'next/link';
import { useState } from 'react';
const poppins = localFont({
  src:"./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});
const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate=() => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    alert(result.message)
    setUrl("")
    setshorturl("")
  })
  .catch((error) => console.error(error));
  }
  
  return (
    <div className='bg-red-100 flex justify-center flex-col items-center mx-[600px] my-20 p-10 gap-5'>
      <div className={`text-2xl font-bold  ${poppins.className}`}>Generate your Short URLs</div>
      <div className='flex justify-center flex-col items-center  gap-4 '>
        <input type="text" placeholder='Enter your URL' className='bg-white pr-24 py-1 pl-2' value={url} onChange={e=>setUrl(e.target.value)} />
        <input type="text" placeholder='Enter your short URL text'className='bg-white pr-24 py-1 pl-2 flex justify-start'value={shorturl} onChange={e=>setshorturl(e.target.value)} />
      </div>
      <button className='bg-red-500 text-white px-8 font-bold text-xl p-2 cursor-pointer rounded-2xl' onClick={generate}>Generate</button>
      <div>
        
        {generated&&<><span className='font-bold'>Your link: </span><Link href={generated}target='_blank'><code className='cursor-pointer'>{generated}</code></Link></>}
      </div>
    </div>
  )
}

export default Shorten
