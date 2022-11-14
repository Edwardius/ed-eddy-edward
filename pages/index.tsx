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
        <video className='w-full transform hidden lg:block h-screen object-cover overlay-item z-0' muted loop autoPlay playsInline>
          <source src='/eee-animation.mp4' type="video/mp4"/>
        </video>

        <img src='/artist-touch.png' className='fixed bottom-20 right-20 w-64 z-10'/>
      </div>

      {/* End Main of Page */}

    </div>
  )
}
