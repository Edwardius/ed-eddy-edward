import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export default function NavButton({ text, href, active }: 
  { text: string, href: string, active: string }) {
  
  return(
    <Link href={href}>
      <button className={classNames('transition-colors ease-in backdrop-blur-xs bg-black bg-opacity-5 hover:bg-opacity-10 \
    py-1.5 px-4 rounded text-xs uppercase font-mono font-100', {'underline font-400': active == text})}>
        {text}
      </button>
    </Link> 
  );
}