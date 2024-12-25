import React from 'react'
import Link from 'next/link'

export default function IntextButton({ text, href }: 
  { text: string, href: string }) {
  
  return(
    <Link href={href}>
      <button className={'bg-azukired-500 hover:bg-azukired-800 \
    py-1.5 px-4 rounded text-xs text-white uppercase font-mono font-500'}>
        {text}
      </button>
    </Link> 
  );
}