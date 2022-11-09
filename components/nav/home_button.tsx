import React from 'react'
import Link from 'next/link'

export default function HomeButton() {
  return(
    <Link href='/'>
      <button className='bg-azukired-500 hover:bg-azukired-800
        py-2 px-2 rounded text-xs text-white uppercase font-mono font-100 -translate-y-0.5'>
        <img src='/EdEddyEdward-Logo.png' 
          className='object-scale-down transition-all ease-in fill-current stroke-current h-3.5'/>
      </button>
    </Link>
  );
}