import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export default function GenericItem({ text, href, active, open }: 
  { text: string, href: string, active: string, open: boolean}) {

  return(
    <Link href={href}>
      <button className={classNames('pt-6 pb-2 w-full uppercase font-900 text-2xl \
      text-left font-title border-b-2 border-gray-800 border-opacity-20', {'text-gray-800' : active != text}, 
      {'text-azukired-500': active == text})} disabled={!open}>
          {text}
      </button>
    </Link> 
  );
}