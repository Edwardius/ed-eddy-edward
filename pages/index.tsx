import { useState, useEffect } from 'react';
import Head from 'next/head'
import NavBar from '../components/nav/nav_bar'
import getBreakpoint from '../components/utils/get_breakpoint';

import useWindowDimensions from '../hooks/window_size'

export default function Home() {
  const size = useWindowDimensions();
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    // This useEffect will only run once, during the first render
    useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  }

  const breakpoint = getBreakpoint('xl');
  let background;

  if (size.width == null) {
    background = <img src='eee-homepage.png' className='w-full block h-screen object-cover object-center overlay-item z-0 bottom-0'/>
  }
  else if (size.width < breakpoint) {
    background = <img src='eee-homepage.png' className='w-full block h-screen object-cover object-center overlay-item z-0 bottom-0'/>
  }
  else {
    background = <video className='w-full block h-screen object-cover object-center overlay-item z-0 bottom-0' muted loop autoPlay playsInline>
        <source src='/eee-animation.mp4' type="video/mp4"/>
      </video>
  }

  
  return (
    <div>
      <Head>
        <title>EdEddyEdward</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      {/* Begin Main of Page */}
      <NavBar active_page={Home.name}/>
      
      <div>
        {background}

        <img src='/artist-touch.png' className='absolute z-10 md:bottom-20 md:right-20 md:w-64 \
        xs:right-10 xs:bottom-10 xs:w-32'/>
      </div>
      {/* End Main of Page */}

    </div>
  )
}
