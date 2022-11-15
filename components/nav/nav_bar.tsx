import React, { useState, useEffect } from 'react'
import HomeButton from './nav_desktop/nav_buttons/home_button'

import NavButton from './nav_desktop/nav_buttons/nav_button'
import SocialButton from './nav_desktop/nav_buttons/social_button'
import WATOButton from './nav_desktop/nav_buttons/wato_button'

import getWindowDimensions from '../../hooks/window_size'
import getBreakpoint from '../utils/get_brekpoint'
import MenuButton from './nav_hamburger/menu_items/menu_button'
import Menu from './nav_hamburger/menu'
import NavMenu from './nav_desktop/nav_menu'

export default function NavBar({ active_page } : { active_page: string}) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  	// This useEffect will only run once, during the first render
	useEffect(() => {
		// Updating a state causes a re-render
		setInitialRenderComplete(true);
	}, []);

  const size = getWindowDimensions();
  const breakpoint = getBreakpoint('xl');

  // hamburger menu hook
  const [open, setOpen] = useState(false);

  if (!initialRenderComplete || size.width == null) {
    return null;
  }
  else if (size.width > breakpoint) {
    return(
      <div className='z-10 fixed w-full top-0 lg:px-8 px-4 lg:pt-8 pt5 '>
        <div className='flex h-full items-center justify-between max-w-11xl mx-auto'>
          <div className='float-left flex'>
            <HomeButton />
          </div>
          <NavMenu active_page={active_page}/>
        </div>
      </div>
    );
  }
  else {
    
    return(
      <div>
        <div className='z-30 fixed w-full top-0 px-4 pt-6 '>
          <div className='flex h-full items-center justify-between max-w-11xl mx-auto'>
            <div className='float-left flex'>
              <HomeButton />
            </div>
            <MenuButton open={open} setOpen={setOpen}/>
          </div>
        </div>
        <Menu open={open} active_page={active_page}/>
      </div>
    );
  }

  
}