import { useState, useEffect } from 'react';
import { isAndroid } from 'react-device-detect'
import Head from 'next/head'
import NavBar from '../components/nav/nav_bar'
import useLockedBody from '../hooks/lock_scroll';

export default function Home() {
  const [locked, setLocked] = useLockedBody(false, 'root')
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  // This useEffect will only run once, during the first render
  useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  }

  let background;

  if (isAndroid) {
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
        <link rel='icon' href='/icon.ico'/>
      </Head>

      {/* Begin Main of Page */}
      <NavBar active_page={Home.name} setLocked={setLocked}/>

      <div>
        {background}

        <img src='/artist-touch.png' className='absolute z-10 md:bottom-20 md:right-20 md:w-64 \
        xs:right-5 xs:bottom-5 xs:w-28'/>
      </div>
      {/* End Main of Page */}

    </div>
  )
}
