import React from 'react';
import classNames from 'classnames';
import GenericItem from './menu_items/generic_item';
import WATOItem from './menu_items/wato_item';

export default function Menu ({open, active_page}: 
  {open: boolean, active_page: string}) {
    
    return (
      <div className={classNames('pt-20 px-6 z-20 fixed transition h-screen w-screen ease-in backdrop-blur-sm bg-gray-100 \
      bg-opacity-60 overflow-scroll', {'opacity-0 -z-10': !open})}>
        <ul className='w-full'>
          <li><GenericItem text='Connect' href='/connect' active={active_page} open={open} icon='/icons/mail-icon.png' red={true}/></li>
          <li><GenericItem text='Mindmap' href='/mind_map' active={active_page} open={open}/></li>
          <li><GenericItem text='Projects' href='/projects' active={active_page} open={open}/></li>
          <li><GenericItem text='Leadership' href='/leadership' active={active_page} open={open}/></li>
          <li><GenericItem text='Future' href='/future' active={active_page} open={open}/></li>

          <li><div className='font-mono font-800 pt-12 border-b-4 border-dotted border-black'><h1>Socials</h1></div></li>
          <li><GenericItem text='LinkedIn' href='/future' active={active_page} open={open} icon='/icons/linkedin-icon.png'/></li>
          <li><GenericItem text='Youtube' href='/future' active={active_page} open={open} icon='/icons/youtube-icon.png'/></li>
          <li><GenericItem text='GitHub' href='/future' active={active_page} open={open} icon='/icons/github-icon.png'/></li>
          
          <li><div className='font-mono font-800 pt-12 border-b-4 border-dotted border-black'><h1>External</h1></div></li>
          <li><WATOItem/></li> 

          <li><div className='text-sm font-mono font-300 pt-12 border-black pb-2'><h1>Ed Eddy Edward © 2022</h1></div></li>
          <li><div className='text-sm font-mono font-300 border-black'><h1>Why did I make a website? idk.</h1></div></li>
          <li><div className='text-sm font-mono font-300 border-black'><h1>Art done on Procreate</h1></div></li>
          <li><div className='text-sm font-mono font-300 border-black'><h1>Made on a Next.js Framework using React, Typescript, TailwindCSS</h1></div></li>
          <li><div className='text-sm font-mono font-300 pt-12 border-black pb-48'><h1>No code copying here &lt:)</h1></div></li>
        </ul>
      </div>
    );
}