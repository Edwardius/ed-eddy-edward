import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>EdEddyEdward</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      {/* Begin Main of Page */}
      <main className='bg-azukigray'>
        <div className='px-4 py-96'>
          <div className='bg-olive'>
            <div className='px-4 pt-8 uppercase font-600 text-4xl text-gray-800 font-title'>
              <h1>Vision & Value</h1>
            </div>
            <div className='px-4 pb-8 text-sm font-300 text-gray-800 font-mono'>
              <p>
                <span className="font-500">We are the skaters of the internet. </span>
                We’re skating between the blurred lines of the physical and digital worlds 
                as they are beginning to blend. We are a community of individuals who 
                aren’t afraid to push the boundaries, challenge the status quo, 
                and communicate boldly. We’re making an impact on web3 culture.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* End Main of Page */}

    </div>
  )
}
