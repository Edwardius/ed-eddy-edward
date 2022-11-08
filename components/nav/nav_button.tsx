import React from 'react'
import Link from 'next/link'

export default function NavButton({ text, href, active }: 
  { text: string, href: string, active: string }) {
  
  // Is this good practice?
  var config = 'transition-colors ease-in bg-gray-500 bg-opacity-10 hover:bg-opacity-20 \
  py-1.5 px-4 rounded text-xs uppercase font-mono font-100';

  if (active == text) {
    config = config + ' underline font-400';
  }

  return(
    <Link href={href}>
      <button className={config}>
        {text}
      </button>
    </Link> 
  );
}