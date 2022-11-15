import Head from 'next/head'
import NavBar from '../components/nav/nav_bar'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>EdEddyEdward</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      {/* Begin Main of Page */}
      <NavBar active_page={Home.name}/>
      
      <div>
        <video className='w-full block h-screen object-cover overlay-item z-0' muted loop autoPlay playsInline>
          <source src='/eee-animation.mp4' type="video/mp4"/>
        </video>

        <img src='/artist-touch.png' className='fixed z-10 md:bottom-20 md:right-20 md:w-64 \
        xs:w-32 xs:bottom-10 xs:right-10'/>
      </div>

      {/* End Main of Page */}

    </div>
  )
}
