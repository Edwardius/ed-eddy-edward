import React from 'react'
import Link from 'next/link'


export default function WATOItem({open}: {open:boolean}) {

  return(
    <Link href='https://www.watonomous.ca/'>
      <button className='transition-colors ease-in \
      translate-y-0 w-full pt-6 pb-2 border-b-2 border-gray-800 border-opacity-20' disabled={!open}>
          <img src='/wato-logo.png' className='h-10 hover:opacity-60'></img>
      </button>
    </Link> 
  );
}