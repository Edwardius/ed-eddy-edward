import React, { useRef } from 'react'
import { Mail } from 'lucide-react'
import classNames from 'classnames'

export default function ConnectPopup({
  connect_open,
  setConnectOpen,
}: {
  connect_open: boolean
  setConnectOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const boxRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={classNames(
        'flex fixed items-center justify-center h-full w-screen bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-30',
        {
          'opacity-100 pointer-events-auto': connect_open,
          'opacity-0 pointer-events-none': !connect_open,
        }
      )}
      onClick={() => setConnectOpen(false)}
    >
      <div
        ref={boxRef}
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          'z-40 flex flex-col justify-center rounded h-1/4 w-1/4 bg-azukired-500 transform transition-all duration-300',
          {
            'scale-100 opacity-100': connect_open,
            'scale-95 opacity-0': !connect_open,
          }
        )}
      >
        <div className='pt-5 self-center flex flex-col h-32 w-3/4'>
          <p className='text-center text-gray-50 font-600 text-2xl font-title px-3 pt-3'>
            Let&apos;s Chat
          </p>
          <p className='text-gray-50 text-xs font-mono opacity-50 px-3 text-center pt-2'>
            I love hearing from different perspectives :)
          </p>
        </div>
        <div className='flex gap-y-1.5 flex-col h-32 w-full justify-center items-center pb-3'>
          <button
            className='border transition-colors ease-in bg-gray-50 bg-opacity-5 hover:bg-opacity-10 
              py-4 rounded text-xs uppercase font-mono font-400 items-center w-60 duration-150'
            onClick={() =>
              (window.location.href = 'mailto:edward.zhzh@gmail.com')
            }
          >
            <div className='w-full flex flex-row justify-center space-x-4'>
              <Mail className='text-white inline-block align-text-bottom' />
              <p className='flex items-center text-gray-50'>
                General Discussions
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
