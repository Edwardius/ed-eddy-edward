import React from 'react'
import Link from 'next/link'

export default function WATOButton() {
  return(
    <Link href='https://www.watonomous.ca/'>
      <button className='transition-colors ease-in \
      -translate-y-1 rounded text-xs uppercase font-mono font-100'>
        <img src='/wato-logo.png' 
          className='transition-all ease-in fill-current stroke-current h-8 hover:h-9' />
      </button>
    </Link>
  );
}