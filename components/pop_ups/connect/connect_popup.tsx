import React from 'react';
import { Mail } from "lucide-react"

import classNames from 'classnames';

export default function ConnectPopup ({connect_open, setConnectOpen}: 
  {connect_open: boolean, setConnectOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    let box;

    if (connect_open) {
      box = <div className='z-40 flex flex-col justify-center rounded h-1/4 w-1/4 bg-azukired-500'>
        <div className='pt-5 self-center flex flex-col h-32 w-3/4'> 
          <p className='text-center text-gray-50 font-600 text-2xl font-title px-3 pt-3'>Let&apos;s Chat</p>
          <p className='text-gray-50 text-xs font-mono opacity-50 px-3 text-center pt-2'>I love hearing from different perspectives :)</p>
        </div>
        <div className='flex gap-y-1.5 flex-col h-32 w-full justify-center items-center pb-3'> 
          <button className='border transition-colors ease-in bg-gray-50 bg-opacity-5 hover:bg-opacity-10 \
              py-4 rounded text-xs uppercase font-mono font-400 items-center w-60 duration-150' 
              onClick={() => window.location.href = 'mailto:edward.zhzh@gmail.com'}>
                <div className='w-full flex flex-row justify-center space-x-4'>
                  <Mail className='text-white inline-block align-text-bottom'/>
                  <p className='flex items-center text-gray-50'>General Discussions</p>
                </div>

          </button>
        </div>
      </div>
    }
    
    return (
      <div className={classNames('flex fixed transition duration-300 items-center justify-center ease-in h-full w-screen bg-black \
      bg-opacity-50', {'opacity-0': !connect_open}, {'z-30': connect_open})} onClick={() => setConnectOpen(!connect_open)}>
        {box}
      </div>
    );
}