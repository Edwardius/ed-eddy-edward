import React from 'react';
import classNames from 'classnames';

export default function ConnectPopup ({connect_open, setConnectOpen}: 
  {connect_open: boolean, setConnectOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    let box;

    if (connect_open) {
      box = <div className='z-40 flex flex-col justify-center rounded h-60 w-64 bg-azukired-500'>
        <div className='flex flex-col h-32 w-full'> 
          <p className='text-gray-50 font-600 text-2xl font-title text-left px-3 pt-3'>Let&apos;s Chat</p>
          <p className='text-gray-50 text-xs font-mono opacity-50 px-3 text-left pt-2'>I love hearing from different perspectives :)</p>
        </div>
        <div className='flex gap-y-1.5 flex-col h-32 w-full justify-center items-center pb-3'> 
          <button className='border transition-colors ease-in bg-gray-50 bg-opacity-5 hover:bg-opacity-10 \
              py-1.5 rounded text-xs uppercase font-title font-400 items-center w-60 duration-150' 
              onClick={() => window.location.href = 'mailto:edward.zhzh@gmail.com'}>
                <div className='flex flex-row'>
                  <img src='/icons/mail-icon.png' className='flex fill-current stroke-current h-11 w-11'/>
                <p className='flex items-center text-gray-50'>General Discussions</p>
                </div>
                
          </button>
          <button className='border transition-colors ease-in bg-gray-50 bg-opacity-5 hover:bg-opacity-10 \
              py-1.5 rounded text-xs uppercase font-title font-400 items-center w-60 duration-150'
              onClick={() => window.location.href = 'mailto:e23zhou@watonomous.ca'}>
                <div className='flex flex-row'>
                  <img src='/icons/mail-icon.png' className='flex fill-current stroke-current h-11 w-11'/>
                <p className='flex items-center text-gray-50'>About WATonomous</p>
                </div>

          </button>
        </div>
      </div>
    }
    
    return (
      <div className={classNames('flex fixed transition duration-300 items-center justify-center ease-in h-full w-screen bg-black \
      bg-opacity-50', {'opacity-0': !connect_open}, {'z-20': connect_open})} onClick={() => setConnectOpen(!connect_open)}>
        {box}
      </div>
    );
}