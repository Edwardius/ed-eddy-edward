import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/header'

export default function Home() {
  return (
    <div className='bg-olive'>
      <div className='uppercase font-900cd w3 text-4xl text-gray-800 font-title'>
        <h1>Vision & Value</h1>
      </div>
      <div className='text-sm font-300 text-gray-800 font-mono'>
        <p>
          <span className="font-500">We are the skaters of the internet. </span>
          We’re skating between the blurred lines of the physical and digital worlds 
          as they are beginning to blend. We are a community of individuals who 
          aren’t afraid to push the boundaries, challenge the status quo, 
          and communicate boldly. We’re making an impact on web3 culture.
        </p>
      </div>
    </div>
  )
}
