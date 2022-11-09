import React from 'react'
import Link from 'next/link'

export default function SocialButton({ link, icon }: { link: string, icon: string }) {
  return(
    <Link href={link}>
      <button className='transition-colors ease-in bg-black bg-opacity-5 hover:bg-opacity-10 \
      py-1.5 px-4 rounded text-xs uppercase font-mono font-100'>
        <img src={icon} className='fill-current stroke-current h-4 w-4'/>
      </button>
    </Link>
  );
}