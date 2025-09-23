import React from 'react'

import NavButton from './nav_buttons/nav_button';
import WATOButton from './nav_buttons/wato_button';
import SocialButton from './nav_buttons/social_button';
import ConnectButton from '../../pop_ups/connect/connect_button';

export default function NavMenu ({active_page, connect_open, setConnectOpen}: 
  {active_page: string, connect_open: boolean, setConnectOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
      <ul className='float-right flex space-x-2 min-w-0'>
        <li><NavButton text='About Me' href='/about' active={active_page}/></li>
        <li><NavButton text='Brain Dump' href='https://braindump.ededdyedward.com/' active={active_page}/></li>
        <li><NavButton text='Blog' href='/blog' active={active_page}/></li>
        <li><NavButton text='Robots' href='/robots' active={active_page}/></li>
        <li><SocialButton link='https://www.linkedin.com/in/eddy-zhou-6968b8184/' icon='/icons/linkedin-icon.png'/></li>
        <li><SocialButton link='https://www.youtube.com/channel/UCBYnPI9wfTCs-dCgo6_B45g' icon='/icons/youtube-icon.png'/></li>
        <li><SocialButton link='https://github.com/Edwardius' icon='/icons/github-icon.png'/></li>
        <li><ConnectButton connect_open={connect_open} setOpen={setConnectOpen}/></li>
        <li><div><p className='font-title text-gray-600 font-base font-600 pt-0.5 pl-2'>&#47;&#47;</p></div></li>
        <li><WATOButton/></li>
      </ul>
    );
}