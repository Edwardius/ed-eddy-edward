import React from 'react'
import Link from 'next/link'

export default function HomeButton() {
  return(
    <Link href='/'>
      <button className='bg-azukired-500 hover:bg-azukired-800
        py-2 px-24 rounded-lg text-xs text-white uppercase font-mono font-100'>
        Home
      </button>
    </Link>
  );
}