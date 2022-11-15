import Head from 'next/head'
import NavBar from '../components/nav/nav_bar'

export default function Mindmap() {
  return (
    <div>
      <Head>
        <title>EdEddyEdward | MindMap</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      {/* Begin Main of Page */}
      <main className='bg-azukigray'>
        {/* Navigation Bar */}
        <NavBar active_page={Mindmap.name}/>

        {/* Body */}
        <div className='px-4 pt-24 pb-96'>
          <div className='bg-olive'>
            <div className='px-4 pt-8 uppercase font-600 text-4xl text-gray-800 font-title'>
              <h1>Vision & Value</h1>
            </div>
            <div className='px-4 pb-8 text-sm font-300 text-gray-800 font-mono'>
              <p>
                <span className="font-500">Under Construction </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor, mi ut luctus rhoncus, lorem dui posuere nisi, eleifend venenatis erat elit sit amet tortor. Etiam ut consectetur quam. Cras nisl metus, porttitor at lectus lobortis, auctor ullamcorper elit. Cras at nibh id magna imperdiet euismod. Fusce fringilla nec ex non posuere. Curabitur varius ipsum at velit ultricies iaculis. Vestibulum at urna et lorem tempor pulvinar. Sed dictum sem at quam pellentesque ornare. Under Construction
              </p>
            </div>
          </div>
        </div>

        <div className='px-4 pt-24 pb-96'>
          <div className='bg-olive'>
            <div className='px-4 pt-8 uppercase font-600 text-4xl text-gray-800 font-title'>
              <h1>Vision & Value</h1>
            </div>
            <div className='px-4 pb-8 text-sm font-300 text-gray-800 font-mono'>
              <p>
                <span className="font-500">Under Construction </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor, mi ut luctus rhoncus, lorem dui posuere nisi, eleifend venenatis erat elit sit amet tortor. Etiam ut consectetur quam. Cras nisl metus, porttitor at lectus lobortis, auctor ullamcorper elit. Cras at nibh id magna imperdiet euismod. Fusce fringilla nec ex non posuere. Curabitur varius ipsum at velit ultricies iaculis. Vestibulum at urna et lorem tempor pulvinar. Sed dictum sem at quam pellentesque ornare. Under Construction
              </p>
            </div>
          </div>
        </div>

      </main>
      {/* End Main of Page */}

    </div>
  )
}
