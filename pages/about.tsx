import Head from 'next/head'
import NavBar from '../components/nav/nav_bar'
import IntextButton from '../components/content/intext_button'

import { Bot, Code2, Hammer, Palette } from "lucide-react"

import useLockedBody from '../hooks/lock_scroll'

export default function About() {
  const [locked, setLocked] = useLockedBody(false, 'root')

  let text = <div className='flex-auto self-center'>
  <div className='pt-8 xl:pt-0 px-4 pb-4 uppercase font-600 text-4xl text-gray-800 font-title'>
    <h1>About Me</h1>
  </div>
  <div className='overflow-visible space-y-2.5'>
    <div className='px-4 text-sm font-300 text-gray-800 font-mono'>
      <p>
        <span className="font-500"> <Bot className='inline-block align-text-bottom'/> Hi, I&apos;m Eddy! </span>
        An aspiring roboticist interested in Robot Embodiment. I believe that the future of AI centers around robotics and how we can make algorithms perceive, model, and react with the world in real-time. I&apos;ve worked with many different robots: Autonomous Vehicles, Humanoids, Robot Swarms, Balancing Platforms, Drones, you name it. The world is full of Wall-E enthusiasts, so let&apos;s come together and make the future awesome!
      </p>
    </div>
    <div className='px-4 text-sm font-300 text-gray-800 font-mono'>
      <p>
        <span className="font-500"> 
          <Code2 className='inline-block align-text-bottom'/> <Hammer className='inline-block align-text-bottom'/> <Palette className='inline-block align-text-bottom'/> I&apos;m mainly a robotics software engineer... 
        </span> but I&apos;ve ran into countless times when I had to manufacture my own CAD designs, solder PCBs, interface with sensors and actuators, build websites, draw, lead initiatives, and pitch to companies for fundraising. Honestly, it&apos;s all pretty fun, but please only ask me questions on robotics software design :3. 
      </p>
    </div>
    <div className='px-4 pt-4 text-sm font-300 text-gray-800 font-mono'>
      <p>
        <span className="font-500"> 
          Interested in knowing more about me?
        </span>
      </p>
    </div>
    <div className='px-4 text-sm font-300 font-mono'>
      <p>
        Check out my <IntextButton text='Blog' href='/blog'/>, or take a look at all the <IntextButton text='Robots' href='/robots'/> I worked with.
      </p>
    </div>
  </div>
  </div>;

  let headshot = <div className='flex-initial self-center w-1/2 xl:w-full'>
    <img src='/headshot.jpg' className=''></img>
  </div>;

  return (
    <div>
      <Head>
        <title>EdEddyEdward | About</title>
        <link rel='icon' href='/icon.ico'/>
      </Head>

      {/* Navigation Bar */}
      <NavBar active_page='About Me' setLocked={setLocked}/>

      {/* Body */}
      <div className='z-0 bg-olive flex pt-48 pb-48 sm:fixed h-full w-screen items-center justify-center'>
        <div className='flex flex-col xl:flex-row xl:gap-x-10 w-4/5'>
          {headshot}
          {text}
        </div>
      </div>

    </div>
  )
}
