import React from 'react';
import classNames from 'classnames';
import GenericItem from './menu_items/generic_item';
import WATOItem from './menu_items/wato_item';

export default function Menu ({open, active_page}: 
    {open: boolean, active_page: string}) {

  return (
    <div
      className={classNames(
        'pt-20 px-6 z-20 fixed transition-opacity duration-300 ease-in-out h-full w-screen backdrop-blur-sm bg-gray-100 bg-opacity-60 overflow-scroll',
        {
          'opacity-0 pointer-events-none': !open,
          'opacity-100 pointer-events-auto': open,
        }
      )}
    >
      <ul className="w-full">
        <li><GenericItem text='About Me' href='/about' active={active_page} /></li>
        <li><GenericItem text='Brain Dump' href='https://braindump.ededdyedward.com/' active={active_page} /></li>
        <li><GenericItem text='Blog' href='/blog' active={active_page} /></li>
        <li><GenericItem text='Robots' href='/robots' active={active_page} /></li>
        <li><div className='font-mono font-800 pt-12 border-b-4 border-dotted border-black'><h1>Socials</h1></div></li>
        <li><GenericItem text='LinkedIn' href='https://www.linkedin.com/in/eddy-zhou-6968b8184/' active={active_page} icon='/icons/linkedin-icon.png' /></li>
        <li><GenericItem text='Youtube' href='https://www.youtube.com/channel/UCBYnPI9wfTCs-dCgo6_B45g' active={active_page} icon='/icons/youtube-icon.png' /></li>
        <li><GenericItem text='GitHub' href='https://github.com/Edwardius' active={active_page} icon='/icons/github-icon.png' /></li>

        <li><div className='font-mono font-800 pt-12 border-b-4 border-dotted border-black'><h1>External</h1></div></li>
        <li><WATOItem /></li> 

        <li><div className='text-sm font-mono font-300 pt-12 border-black pb-2'><h1>Ed Eddy Edward © 2022</h1></div></li>
        <li><div className='text-sm font-mono font-300 border-black'><h1>Why did I make a website? idk.</h1></div></li>
        <li><div className='text-sm font-mono font-300 border-black'><h1>Art done on Procreate</h1></div></li>
        <li><div className='text-sm font-mono font-300 border-black'><h1>Made on a Next.js Framework using React, Typescript, TailwindCSS</h1></div></li>
        <li><div className='text-sm font-mono font-300 pt-12 border-black pb-48'><h1>All components are made from scratch!! </h1></div></li>
      </ul>
    </div>
  )
}