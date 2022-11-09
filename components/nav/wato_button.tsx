import React from 'react'
import Link from 'next/link'

export default function WATOButton() {
  return(
    <Link href='https://www.watonomous.ca/'>
      <button className='transition-colors ease-in \
      translate-y-0 rounded text-xs uppercase font-mono font-100'>
        <img src='/wato-logo.png' 
          className='fill-current stroke-current h-7 hover:opacity-50' />
      </button>
    </Link>
  );
}