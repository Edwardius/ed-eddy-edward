import React from 'react'
import HomeButton from './home_button';

import NavButton from './nav_button';
import SocialButton from './social_button';
import WATOButton from './wato_button';

export default function NavBar({ active_page } : { active_page: string}) {
  return(
    <div className='sticky top-0 px-8 pt-8 bg-transparent'>
      <div className='float-left flex'>
        <HomeButton />
      </div>

      <ul className='float-right flex space-x-2 min-w-0'>
        <li><NavButton text='Mindmap' href='/mind_map' active={active_page}/></li>
        <li><NavButton text='Projects' href='/projects' active={active_page}/></li>
        <li><NavButton text='Leadership' href='/leadership' active={active_page}/></li>
        <li><NavButton text='Future' href='/future' active={active_page}/></li>
        <li><SocialButton link='https://www.linkedin.com/in/eddy-zhou-6968b8184/' icon='/linkedin-icon.png'/></li>
        <li><SocialButton link='https://www.youtube.com/channel/UCBYnPI9wfTCs-dCgo6_B45g' icon='/youtube-icon.png'/></li>
        <li><NavButton text='Connect' href='/connect' active={active_page}/></li>
        <li><div><h1 className='font-title text-gray-500 font-base font-600 pt-0.3 pl-2'>\\</h1></div></li>
        <li><WATOButton/></li>
      </ul>
        
    </div>
  );
}