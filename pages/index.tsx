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
      
      <img src='/eee-homephoto.png' className='z-0 w-full transform hidden lg:block h-screen object-cover'/>

      {/* End Main of Page */}

    </div>
  )
}
