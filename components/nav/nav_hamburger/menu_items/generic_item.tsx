import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface ButtonProps {
  text: string,
  href: string, 
  active: string,
  open: boolean, 
  icon?: string, 
  red?: boolean
}

export default function GenericItem({text, href, active, open, icon = '', red = false}: ButtonProps) {
  let icon_ele;
  
  if (icon) {
    icon_ele = <img src={icon} className='translate-y-1.5 -translate-x-2 float-right right-3 h-4'/>;
  }
  else {
    icon_ele = null;
  }

  return(
    <Link href={href}>
      <button className={classNames('transition ease-in pt-6 pb-2 w-full uppercase font-900 text-2xl \
      text-left font-title border-b-2 border-gray-800 border-opacity-20', {'hover:text-azukired-500 text-gray-800' : active != text}, 
      {'text-azukired-500': red}, {'text-gray-500 text-opacity-50': active == text})} disabled={!open || active == text}>
          {text}
          {icon_ele}
      </button>
    </Link> 
  );
}